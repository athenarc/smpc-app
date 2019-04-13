import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import ComputationDetail from './ComputationDetail'
import PlotComponent from '../plot/PlotComponent'
import * as moment from 'moment'
import 'moment-precise-range-plugin'

import actions from '../actions'
import { findComputationIndexById } from '../helpers'

const checkComputationStatus = actions.checkComputationStatus
const getSingleComputation = actions.getSingleComputation

class SingleComputation extends React.Component {
  constructor (props) {
    super(props)

    const layout = {
      paper_bgcolor: '#f8f9fa',
      plot_bgcolor: '#f8f9fa',
      xaxis: {
        type: 'category',
      }
    }

    const config = {
      responsive: true
    }

    this.state = { plot: { data: [{}], layout, frames: [], config }, computation: {} }
    this.updatePlot = this.updatePlot.bind(this)
  }

  makePlot () {
    console.log(this.state.computation)
    if (!this.state.computation.status || this.state.computation.status !== 'completed') {
      return
    }

    const trace = {}
    const layout = this.state.plot.layout
    const results = this.state.computation.results

    switch (this.state.computation.algorithm) {
      case '1d_categorical_histogram':
        trace.type = 'bar'
        trace.y = results.y
        trace.x = results.x
        break;
      case '1d_numerical_histogram':
        trace.type = 'bar'
        trace.y = results.y
        let width = (results.max - results.min) / results.cells

        layout.xaxis = {
          tickvals: [...Array(results.cells).keys()],
          ticktext: this.computeAxisLabels(results.min, results.max, width, results.cells),
          title: this.state.computation.attributes[0].name,
        }

        break;
      case '2d_categorical_histogram':
        trace.type = 'heatmap'
        trace.z = results.z
        trace.x = results.labels.x
        trace.y = results.labels.y
        break;
      case '2d_numerical_histogram':
        let width0 = (results.max[0] - results.min[0]) / 2
        let width1 = (results.max[1] - results.min[1]) / 2

        trace.type = 'heatmap'
        trace.z = results.z
        trace.y = this.computeAxisLabels(results.min[0], results.max[0], width0, results.cellsX)
        trace.x = this.computeAxisLabels(results.min[1], results.max[1], width1, results.cellsY)
        break;
      case '2d_mixed_histogram':
        width = (results.max - results.min) / 2
        trace.type = 'heatmap'
        trace.z = results.z
        trace.x = this.computeAxisLabels(results.min, results.max, width, results.cells)
        trace.y = results.y
        break;
      default:

    }

    this.setState({ plot: { data: [trace], layout } })
  }

  computeAxisLabels (min, max, width, cells) {
    let start = min
    let end = max
    const ticks = []
    for (const _ of Array(cells - 1).keys()) { // eslint-disable-line no-unused-vars
      end = start + width
      ticks.push(`[${start.toFixed(2)}, ${end.toFixed(2)})`)
      start = end
    }
    end = start + width
    ticks.push(`[${start.toFixed(2)}, ${end.toFixed(2)}]`)
    return ticks
  }


  updatePlot(figure) {
   this.setState({ plot: figure })
  }

  componentDidMount () {
    this.props.actions.getSingleComputation({ id: this.props.match.params.id }).then(res =>
      {
        this.setState( { computation: this.findComputation(this.props.match.params.id) } )
        this.makePlot()
      }
    )
  }

  checkStatus (id) {
    this.props.actions.checkComputationStatus({ id: this.props.match.params.id })
  }

  findComputation (id) {
    return this.props.computations[findComputationIndexById(this.props.computations, id)]
  }

  formatTimestamps (timestamps) {
    const start = moment(timestamps.accepted).format('dddd, MMMM Do YYYY, HH:mm:ss')
    const end = moment(timestamps.done).format('dddd, MMMM Do YYYY, HH:mm:ss')
    const diff = moment(timestamps.accepted).preciseDiff(timestamps.done)
    return { start, end, diff}
  }

  formatComputation () {
    const attributes = this.state.computation.attributes.map(item => item.name).join(', ')
    return { ...this.state.computation, attributes, time: this.formatTimestamps(this.state.computation.timestamps)}
  }

  render () {
    if (!this.props.computations || _.isEmpty(this.state.computation)) {
      return null
    }

    return (
      <div>
        {
          (this.state.computation.status && this.state.computation.status === 'completed') &&
            <div className='plot'>
              <PlotComponent { ...this.state.plot } onInitialized={this.updatePlot} onUpdate={this.updatePlot} />
            </div>
        }
        <ComputationDetail {...this.formatComputation()} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ computations: state.computations })

const mapDispatchToProps = dispatch => ({actions: bindActionCreators({ checkComputationStatus, getSingleComputation }, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(SingleComputation)
