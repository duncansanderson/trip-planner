<template>
    <div class="navigation">
        <b-navbar toggleable="lg">
            <div class="container">
                <b-navbar-brand><router-link to="/">VisitScotland Blog</router-link></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
                        <b-nav-item><router-link to="/my-trip-planner">MyTripPlanner</router-link></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<script>
import { BNavbar, BNavbarBrand, BNavbarNav, BNavItem, BNavbarToggle, BCollapse } from 'bootstrap-vue'

export default {
    components: {
        BNavbar,
        BNavbarBrand,
        BNavbarNav,
        BNavItem,
        BNavbarToggle,
        BCollapse
    }
}
</script>

<style lang="scss">
.navigation {
    margin-bottom: 100px;

    .navbar-brand {
        font-size: 32px;
        font-weight: bold;

        a {
            color: black;
        }
    }
}
</style>
