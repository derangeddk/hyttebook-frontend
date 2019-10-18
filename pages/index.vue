<template>
    <main class="welcome-page">
        <hideable-container :visible="showSignIn">
            <sign-in @requestSignUp="showSignIn = false"></sign-in>
        </hideable-container>
        <welcome></welcome>
        <hideable-container :visible="!showSignIn">
            <sign-up @requestLogin="showSignIn = true"></sign-up>
        </hideable-container>
    </main>
</template>

<script>
import SignUp from '~/components/sign-up';
import SignIn from '~/components/sign-in';
import Welcome from '~/components/welcome';
import HideableContainer from '~/components/hideable-container';
import axios from 'axios';
import { mapMutations } from "vuex";

export default {
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },
    components: { SignUp, SignIn, Welcome, HideableContainer },
    data() {
        return {
            showSignIn: false,
        };
    },
    methods: {
        ...mapMutations([
            "setUsername"
        ])
    },
    async mounted() {
        let response;
        try {
            response = await axios.get(
                "http://localhost:4752/whoami",
                {
                    withCredentials: true
                }
            );
        } catch(error) {
            console.error(error);
            return;
        }

        if(!response) return;
        if(response.status != 200) return;

        this.setUsername(response.data.user.username);
        //push to hut-mangement, which will check if the user has any huts.
        this.$router.push("/hut-management");

        return;
    }
}
</script>

<style lang="scss">
    main.welcome-page {
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100vw;
        align-items: stretch;
    }
</style>

