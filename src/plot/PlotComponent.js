import React from 'react'
import Plot from 'react-plotly.js'

class PlotComponent extends React.Component {
    constructor(props) {
        super(props)
        const trace = {
          type: 'bar',
          x: ['giraffes', 'orangutans', 'monkeys'],
          y: [20, 14, 23]
        }

        const layout = {
          paper_bgcolor: '#f8f9fa',
          plot_bgcolor: '#f8f9fa'
        }

        const config = {
          responsive: true
        }

        this.state = { data: [trace], layout, frames: [], config };
    }

    render() {
        return (
            <Plot
                data={this.state.data}
                layout={this.state.layout}
                frames={this.state.frames}
                config={this.state.config}
                onInitialized={(figure) => this.setState(figure)}
                onUpdate={(figure) => this.setState(figure)}
                useResizeHandler={true}
                style={{width: '100%', height: '100%' }}
            />
        );
    }
}

export default PlotComponent
