import Home from '../home/Home'
import Histogram from '../smpc/Histogram'
import Computation from '../computation/Computation'
import Dashboard from '../computation/Dashboard'
import SingleComputation from '../computation/SingleComputation'

const appRoutes = [
  { path: '/', component: Home },
  { path: '/histogram', component: Histogram },
  { path: '/computation', component: Computation },
  { path: '/dashboard', component: Dashboard },
  { path: '/computation/:id', component: SingleComputation }
]

export default appRoutes
