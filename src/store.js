import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articles: [],
        likedArticles: ['5e56de17aeb4377ce5d9ee6f']
    },
    getters: {
        articles: state => state.articles,
        likedArticles: state => state.likedArticles,
        findArticle: state => id => state.articles.find(article => article._id == id),
        isLoaded: state => !!state.articles.length
    },
    mutations: {
        setArticles(state, articles) {
            state.articles = articles
        },
        likeArticle(state, articleId) {
            state.likedArticles.push(articleId)
        },
        unlikeArticle(state, articleId) {
            const index = state.likedArticles.indexOf(articleId)
            state.likedArticles.splice(index, 1)
        },
    },
    actions: {
        async getArticles(context) {
            try {
                const articles = (await axios.get('http://localhost:3000/trip-planner.json')).data
                context.commit('setArticles', articles)
            } catch (error) {
                console.log(error)
            }
        },
        async likeArticle(context, articleId) {
            context.commit('likeArticle', articleId)
        },
        async unlikeArticle(context, articleId) {
            context.commit('unlikeArticle', articleId)
        },
    }
})
