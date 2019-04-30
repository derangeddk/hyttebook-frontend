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

export default {
    components: { SignUp, SignIn, Welcome, HideableContainer },
    data() {
        return {
            showSignIn: false,
        };
    },
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

