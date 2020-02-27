<template>
    <div class="row">
        <div class="col-8">
            <b-card
                v-for="(article, index) in articles"
                :key="index"
                :title="article.name"
            >
                <b-card-text>{{ article.snippet }}</b-card-text>
                <b-card-text>Written by {{ article.author }} {{ getDays(article.timestamp) }} days ago</b-card-text>
            </b-card>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { BCard, BCardText } from 'bootstrap-vue'

export default {
    components: {
        BCard,
        BCardText,
    },
    computed: mapState({
        articles: state => state.articles
    }),
    methods: {
        getDays(timestamp) {
            const currentTimestamp = Date.now()
            const difference = Math.abs(currentTimestamp - timestamp)
            const days = Math.floor(difference / 1000 / 60 / 60 / 24)
            return days
        }
    },
}
</script>
