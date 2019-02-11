import Home from '../home/Home'
import Aggregation from '../smpc/Aggregation'
import Classification from '../smpc/Classification'
import Results from '../results/Results'

const appRoutes = [
  { path: '/', component: Home },
  { path: '/aggregation', component: Aggregation },
  { path: '/classification', component: Classification },
  { path: '/results', component: Results }
]

export default appRoutes
