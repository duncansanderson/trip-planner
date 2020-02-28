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
                <router-link class="read-more" :to="`/article/${article._id}`">Read more</router-link>
                <b-icon-heart
                    class="icon"
                    @click="iconClick(article._id)"
                    :font-scale="likedArticles.indexOf(article._id) >= 0 ? 3 : 2"
                    :class="{ liked: likedArticles.indexOf(article._id) >= 0 }"
                ></b-icon-heart>
            </b-card>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { BCard, BCardText, BIconHeart} from 'bootstrap-vue'

export default {
    components: {
        BCard,
        BCardText,
        BIconHeart
    },
    computed: {
        ...mapGetters([
            'isLoaded',
            'likedArticles'
        ]),
        ...mapState([
            'articles'
        ]),
    },
    methods: {
        getDays(timestamp) {
            const currentTimestamp = Date.now()
            const difference = Math.abs(currentTimestamp - timestamp)
            const days = Math.floor(difference / 1000 / 60 / 60 / 24)
            return days
        },
        iconClick(articleId) {
            if (this.likedArticles.indexOf(articleId) >= 0) {
                this.$store.dispatch('unlikeArticle', articleId)
            } else {
                this.$store.dispatch('likeArticle', articleId)
            }
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
            font-weight: bold;
            position: absolute;
            top: 17px;
            right: 10px;

            &.liked {
                color: #af006e;
            }
        }

        .read-more {
            color: #af006e;
        }
    }
}
</style>
