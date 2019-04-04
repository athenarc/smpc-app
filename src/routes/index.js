import Home from '../home/Home'
import Aggregation from '../smpc/Aggregation'
import Computation from '../computation/Computation'
import ComputationDetail from '../computation/ComputationDetail'

const appRoutes = [
  { path: '/', component: Home },
  { path: '/aggregation', component: Aggregation },
  { path: '/computation', component: Computation },
  { path: '/computation/:id', component: ComputationDetail }
]

export default appRoutes
