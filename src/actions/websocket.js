import types from './actionTypes'

const URI = process.env.REACT_APP_WS || 'ws://localhost:3000'

const webSocket = new WebSocket(URI);

const initWebsocket = (store) => {
    webSocket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      store.dispatch({ type: types.UPDATE_COMPUTATION, payload: { data: data.job } })
      let msg = {}

      switch (data.job.status) {
        case 'completed':
          msg = { msg: `Computation with ID ${data.job.id} completed`, type: 'success', title: 'Success' }
          break;
        case 'failed':
          msg = { msg: `Computation with ID ${data.job.id} failed`, type: 'error', title: 'Error' }
          break;
        case 'processing':
          msg = { msg: `Computation with ID ${data.job.id} is being processed`, type: 'info', title: 'Information' }
          break;
        default:

      }

      store.dispatch({ type: types.ADD_NOTIFICATION, payload: { data: msg } })
    }

    webSocket.onopen = () => console.log(` Ws: Connected to ${URI}`)
    webSocket.onclose = () => console.log(` Ws: Disconnected from server`)
}

const emit = (type, payload) => webSocket.send(JSON.stringify({ type, payload }))

export {
  initWebsocket,
  emit
}
