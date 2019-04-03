<template>
    <main class="welcome-page">
        <sign-in :visible="showSignIn" @requestSignUp="showSignIn = false"></sign-in>
        <welcome></welcome>
        <sign-up :visible="!showSignIn" @requestLogin="showSignIn = true"></sign-up>
    </main>
</template>

<script>
import SignUp from '~/components/sign-up';
import SignIn from '~/components/sign-in';
import Welcome from '~/components/welcome';

export default {
    components: { SignUp, SignIn, Welcome },
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

