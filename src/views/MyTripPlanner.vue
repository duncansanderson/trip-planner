<template>
    <div>
        <b-list-group v-if="likedArticles.length > 0">
            <template v-for="(article, index) in articles">
                <b-list-group-item
                    :key="index"
                    v-if="likedArticles.indexOf(article._id) >= 0"
                >
                    <router-link :to="`/article/${article._id}`">{{ article.name }}</router-link>
                    <b-icon-trash
                        class="icon"
                        @click="unlikeArticle(article._id)"
                        :font-scale="2"
                    ></b-icon-trash>
                </b-list-group-item>
            </template>
        </b-list-group>
        <b-card-text v-if="likedArticles.length == 0">No articles liked.</b-card-text>
    </div>
</template>

<script>
import { BListGroup, BListGroupItem, BCardText, BIconTrash } from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
    components: {
        BListGroup,
        BListGroupItem,
        BCardText,
        BIconTrash
    },
    computed: {
        ...mapGetters([
            'isLoaded',
            'articles',
            'likedArticles'
        ]),
    },
    methods: {
        unlikeArticle(articleId) {
            this.$store.dispatch('unlikeArticle', articleId)
        },
    },

}
</script>

<style lang="scss" scoped>
.list-group-item {
    position: relative;

    .icon {
        cursor: pointer;
        position: absolute;
        top: 8px;
        right: 20px;
    }
}
</style>
