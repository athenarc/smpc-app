import types from './actionTypes'

const URI = process.env.REACT_APP_WS || 'ws://localhost:3000'
const webSocket = new WebSocket(URI);

let pingTimeout

const heartbeat = () => {
  clearTimeout(pingTimeout);

  pingTimeout = setTimeout(() => {
    webSocket.close();
  }, 30000 + 1000) // 30 seconds
}

const initWebsocket = (store) => {
    webSocket.onmessage = (event) => {
      const data = JSON.parse(event.data)

      if (data.message && data.message === 'ping') {
        webSocket.send(JSON.stringify({ message: 'pong' }))
        heartbeat()
        return
      }

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

    webSocket.onopen = () => {
      console.log(` Ws: Connected to ${URI}`)
      heartbeat()
    }
    webSocket.onclose = () =>  {
      console.log(` Ws: Disconnected from server`)
      clearTimeout(pingTimeout)
    }
}

const emit = (type, payload) => webSocket.send(JSON.stringify({ type, payload }))

export {
  initWebsocket,
  emit
}
