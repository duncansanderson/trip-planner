<template>
    <div>
        <navigation-bar></navigation-bar>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'

export default {
    components: {
        NavigationBar
    },
    created() {
        this.$store.dispatch('getArticles')
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&display=swap');

body {
    font-family: "Source Sans Pro", Arial, sans-serif-serif;
}
</style>
