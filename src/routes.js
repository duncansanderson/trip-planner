import Article from './views/Article.vue'
import Home from './views/Home.vue'
import MyTripPlanner from './views/MyTripPlanner.vue'

export default [
    { path: '/', component: Home},
    { path: '/article/:id', component: Article },
    { path: '/my-trip-planner', component: MyTripPlanner}
]
