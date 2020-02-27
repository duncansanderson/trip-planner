import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articles: [],
    },
    getters: {
        articles: state => state.articles.map,
    },
    mutations: {
        setArticles(state, articles) {
            state.articles = articles
        }
    },
    actions: {
        async getArticles(context) {
                const articles = (await axios.get('http://localhost:3000/trip-planner.json')).data
                context.commit('setArticles', articles)
        }
    }
})
