<template>
    <nav>
        <div class="header-wrapper">
            <div class="site-name">
                <h1>
                    <nuxt-link class="link" to="/">Hytte Index</nuxt-link>
                </h1>
            </div>
            <div class="logged-in-user-information">
                <div class="username">{{ username }}</div>
                <div class="hutname">{{ hutName }}</div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters([
                'hutName',
                'username'
            ]),
        }
    }
</script>

<style lang="scss">
    nav {
        width: 100%;
        height: 60px;
        background-color: #3C6E71;
        background-image: linear-gradient(300deg, lighten(#3C6E71, 17%) 60%, lighten(#3C6E71, 22%));
        text-align: center;
        color: black;
    }

    .header-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        align-items: center;
    }

    .site-name {
        display: flex;
    }

    .site-name h1 {
        align-self: flex-start;
        font-size: 2.3em;
        padding: 0.2em 0.5em;
        margin: 0;
        font-weight: 500;
    }

    .logged-in-user-information {
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items: center;
        line-height: 100%;

        .hutname {
            padding: 0 1.2em;
            font-weight: 300;
            font-size: 0.95em;
        }

        .username {
            padding: 0 1.2em;
            font-size: 1.1em;
        }
    }

    .link {
        text-decoration: inherit;
        color: black;
    }
</style>

