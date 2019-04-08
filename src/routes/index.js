import Home from '../home/Home'
import Histogram from '../smpc/Histogram'
import Computation from '../computation/Computation'
import ComputationDetail from '../computation/ComputationDetail'

const appRoutes = [
  { path: '/', component: Home },
  { path: '/histogram', component: Histogram },
  { path: '/computation', component: Computation },
  { path: '/computation/:id', component: ComputationDetail }
]

export default appRoutes
