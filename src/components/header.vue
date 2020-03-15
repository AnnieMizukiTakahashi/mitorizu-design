<template>
    <header>
        <div class="container is-desktop">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <router-link class="navbar-item" to="/">
                    <img src="@/assets/ic_logo_white.png" art="" contain height="48" width="186"/>
                    </router-link>

                    <a role="button" class="navbar-burger burger is-white" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarMenu" class="navbar-menu">
                    <div class="navbar-end">
                        <div class="tabs is-size-6 has-text-weight-bold is-one-quarter-desktop is-right">
                            <ul class="mt-4">
                                <li class="navbar-item">
                                    <router-link class="has-text-white" to="about">知の見取り図とは？</router-link>
                                </li>
                                <li class="navbar-item">
                                    <router-link class="has-text-white" to="learn">うまく学習するには？</router-link>
                                </li>
                                <li class="navbar-item">
                                    <router-link class="has-text-white" to="theme">テーマから記事を探す</router-link>
                                </li>
                                <li class="navbar-item">
                                    <router-link class="has-text-white" to="academic">学術分野から記事を探す</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../styles/_variables.scss';
header {
    background-color: $main-color;

    .navbar-brand{
        background-color: $main-color;

        span{
            color: $white;
        }
    }
    .navbar-menu {
        background-color: $main-color;
        margin: auto;
    }
}

</style>
