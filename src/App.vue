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
    }
}
</script>
