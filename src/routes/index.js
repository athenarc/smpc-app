import Home from '../home/Home'
import Histogram from '../smpc/Histogram'
import Dashboard from '../computation/Dashboard'
import Computations from '../computation/Computations'
import SingleComputation from '../computation/SingleComputation'
import Login from '../authentication/Login'

const appRoutes = [
  { path: '/', component: Home, private: false },
  { path: '/histogram', component: Histogram, private: true },
  { path: '/dashboard', component: Dashboard, private: true },
  { path: '/computations', component: Computations, private: true },
  { path: '/computation/:id', component: SingleComputation, private: true },
  { path: '/login', component: Login, private: false }
]

export default appRoutes
