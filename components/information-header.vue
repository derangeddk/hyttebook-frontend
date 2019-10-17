<template>
    <nav class="top-nav">
        <div class="header-wrapper">
            <div class="site-name">
                <h1>
                    <nuxt-link class="link" to="/dashboard">Hytte Index</nuxt-link>
                </h1>
            </div>
            <div class="logged-in-user-information">
                <div class="username">{{ username }}</div>
                <div class="hutname">{{ hutName }}</div>
                <div class="user-details-dropdown">
                    <secondary-button @click="logout()">
                        Log ud
                    </secondary-button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import SecondaryButton from '~/components/secondary-button';
import axios from 'axios';
import { async } from 'q';

    export default {
        data() {
            return {
            }
        },
        methods: {
            logout: async function() {
                let response;
                try {
                    response = await axios.post(
                        "http://localhost:4752/logout",
                        {},//apparently axios needs an empty data object to include options.
                        {
                            withCredentials: true
                        }
                    );
                } catch(error) {
                    console.log("this is the error: ", error);
                }

                if(response.status != 204) return;

                this.$router.push("/");
            }
        },
        computed: {
            ...mapGetters([
                'hutName',
                'username'
            ]),
        },
        components: { SecondaryButton }
    }
</script>

<style lang="scss">
    .top-nav {
        width: 100%;
        height: 60px;
        background-color: #3C6E71;
        background-image: linear-gradient(
                300deg,
                lighten(#3C6E71, 17%) 60%,
                lighten(#3C6E71, 22%)
            );
        text-align: center;
        color: black;
    }

    .header-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        overflow: hidden;
    }

    .site-name {
        display: flex;
    }

    .site-name h1 {
        align-self: flex-start;
        font-size: 2.3em;
        padding: 0.1em 0.5em 0em;
        margin: 0;
        font-weight: 500;
    }

    .logged-in-user-information {
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items: center;
        line-height: 100%;
        cursor: pointer;

        .hutname {
            padding: 0 1.2em;
            font-weight: 300;
            font-size: 0.95em;
        }

        .username {
            padding: 0 1.2em;
            font-size: 1.1em;
        }

        .user-details-dropdown {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }

        &:hover .user-details-dropdown {
            display: block;
        }
    }

    .link {
        text-decoration: inherit;
        color: black;
    }
</style>

