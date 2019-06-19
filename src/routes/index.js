import Home from '../home/Home'
import Histogram from '../smpc/Histogram'
import Dashboard from '../computation/Dashboard'
import Computations from '../computation/Computations'
import SingleComputation from '../computation/SingleComputation'

const appRoutes = [
  { path: '/', component: Home },
  { path: '/histogram', component: Histogram },
  { path: '/dashboard', component: Dashboard },
  { path: '/computations', component: Computations },
  { path: '/computation/:id', component: SingleComputation }
]

export default appRoutes
