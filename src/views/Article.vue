<template>
    <div class="row article" v-if="isLoaded">
        <div class="col-8">
            <b-spinner
                label="Loading..."
                v-if="!isLoaded"
            ></b-spinner>
            <h1 class="article__title">{{ findArticle(this.$route.params.id).name }}</h1>
            <b-card-text>Written by {{ findArticle(this.$route.params.id).author }}</b-card-text>
            <b-card-text>{{ findArticle(this.$route.params.id).body }}</b-card-text>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { BCardText, BSpinner } from 'bootstrap-vue'

export default {
    components: { BCardText, BSpinner },
    data() {
        return {
            title: '',
            body: ''
        }
    },
    computed: {
        ...mapGetters([
            'isLoaded',
            'findArticle',
        ])
    },
}
</script>

<style lang="scss" scoped>
.article {
    &__title {
        margin-bottom: 50px;
    }
}
</style>
