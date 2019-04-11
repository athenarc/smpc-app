import React from 'react'
import Plot from 'react-plotly.js'

const PlotComponent = (props) => {
    return (
      <Plot
        data={props.data}
        layout={props.layout}
        frames={props.frames}
        config={props.config}
        onInitialized={(figure) => props.onInitialized(figure)}
        onUpdate={(figure) => props.onUpdate(figure)}
        useResizeHandler
        style={{width: '100%', height: '100%' }}
            />
    )
  }

export default PlotComponent
