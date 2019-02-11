import Home from '../home/Home'
import Aggregation from '../smpc/Aggregation'
import Classification from '../smpc/Classification'

const appRoutes = [
  { path: '/', component: Home },
  { path: '/aggregation', component: Aggregation },
  { path: '/classification', component: Classification },
]

export default appRoutes
