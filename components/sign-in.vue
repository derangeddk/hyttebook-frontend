<template>
    <form @submit.prevent="login();" class="sign-in-container">
        <labelled-input name="email" @input="checkEmailValidity()" :guidanceMessage="emailGuidance" :errorMessage="emailError" type="text" label="Email" v-model="email"></labelled-input>
        <labelled-input name="password" @input="removePasswordErrorMessage(passwordError)" :errorMessage="passwordError" type="password" label="Password" v-model="password"></labelled-input>
        <primary-button type="submit">Login</primary-button>

        <secondary-button @click="$emit('requestSignUp')">Gå til registrering</secondary-button>
    </form>
</template>


<script>
import axios from 'axios';
import LabelledInput from '~/components/labelled-input';
import PrimaryButton from '~/components/primary-button';
import SecondaryButton from '~/components/secondary-button';
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            email: "",
            emailGuidance: "",
            emailError: "",
            password: "",
            passwordError: ""
        }
    },
    methods: {
        ...mapMutations([
            'setUser'
        ]),
        login: async function () {
            let payload = {
                email: this.email,
                password: this.password
            };

            let headers = {
                'Content-type': 'application/json'
            }
            let response;
            try {
                response = await axios.post('http://localhost:4752/login', payload, { headers });
            } catch(error) {
                if(error.response.data.code == "NON-EXISTENT") {
                    this.emailError = "kunne ikke findes";
                }
                if(error.response.data.code == "INCORRECT") {
                    this.passwordError = "passer ikke til emailen";
                }
                console.error("couldn't login: ", error);
                return;
            }

            let user = response.data.user;

            this.setUser(user);
            this.$router.push("/hut-management");
        },
        checkEmailValidity: function() {
            const regEx = /^.+@.+$/;
            if(!regEx.test(this.email) && this.emailError !== "") {
                this.emailError = "";
                return;
            }
            if(regEx.test(this.email) && this.emailError !== "") {
                this.emailError = "";
            }
            if(regEx.test(this.email) && this.emailGuidance !== "") {
                this.emailGuidance = "";
                return;
            }
            if(this.email === "" || this.email === null) {
                this.emailGuidance = "";
                this.emailError = "feltet skal have en email";
                return;
            }
            if(!regEx.test(this.email) && this.email !== "") {
                this.emailError == "";
                this.emailGuidance = "skal indeholde et @";
                return;
            }
        },
        removePasswordErrorMessage() {
            if(this.passwordError != "" && this.passwordError != null) {
                this.passwordError = "";
                return;
            }
        }
    },
    components: { LabelledInput, PrimaryButton, SecondaryButton }
}
</script>

<style lang="scss">


    .sign-in-container {
        display: flex;
        flex-direction: column;
    }

    .submit-button:hover {
        background-color: lighten(#3C6E71, 15%);
    }

</style>
