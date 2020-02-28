import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articles: [],
    },
    getters: {
        articles: state => state.articles,
        findArticle: state => id => state.articles.find(article => article._id == id),
        isLoaded: state => !!state.articles.length
    },
    mutations: {
        setArticles(state, articles) {
            state.articles = articles
        }
    },
    actions: {
        async getArticles(context) {
            try {
                const articles = (await axios.get('http://localhost:3000/trip-planner.json')).data
                context.commit('setArticles', articles)
            } catch (error) {
                console.log(error)
            }
        }
    }
})
