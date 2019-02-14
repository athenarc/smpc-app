import Home from '../home/Home'
import Aggregation from '../smpc/Aggregation'
import Classification from '../smpc/Classification'
import Computation from '../computation/Computation'

const appRoutes = [
  { path: '/', component: Home },
  { path: '/aggregation', component: Aggregation },
  { path: '/classification', component: Classification },
  { path: '/computation', component: Computation }
]

export default appRoutes
