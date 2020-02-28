<template>
    <div class="row cards">
        <div class="col-8">
            <b-card
                class="card"
                v-for="(article, index) in articles"
                :key="index"
                :title="article.name"
            >
                <b-card-text>{{ article.snippet }}</b-card-text>
                <b-card-text>Written by {{ article.author }} {{ getDays(article.timestamp) }} days ago</b-card-text>
                <router-link :to="`/article/${article._id}`">Read more</router-link>
                <b-icon-heart
                    class="icon"
                    @click="iconClick"
                    font-scale="2"
                ></b-icon-heart>
            </b-card>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { BCard, BCardText, BIconHeart} from 'bootstrap-vue'

export default {
    components: {
        BCard,
        BCardText,
        BIconHeart
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
        },
        iconClick() {
            alert('click')
        },
    },
}
</script>

<style lang="scss" scoped>
.cards {
    .card {
        margin-bottom: 40px;
        position: relative;

        .icon {
            cursor: pointer;
            position: absolute;
            top: 17px;
            right: 10px;;
        }
    }
}
</style>
