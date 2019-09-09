<template>
    <form @submit.prevent="signUp();" class="sign-up-container">
        <labelled-input-with-feedback @input="checkFullNameValidity()" :errorMessage="fullNameError" name="full-name" type="text" label="Fulde navn" v-model="fullName"></labelled-input-with-feedback>
        <labelled-input-with-feedback @input="checkUsernameValidity()" :errorMessage="usernameError" name="username" type="text" label="Brugernavn" v-model="username"></labelled-input-with-feedback>
        <labelled-input-with-feedback @input="checkEmailValidity()" :guidanceMessage="emailGuidance" :errorMessage="emailError" name="email" type="text" label="Email" v-model="email"></labelled-input-with-feedback>
        <labelled-input-with-feedback @input="checkPasswordValidity()" @change="checkPasswordValidity()" :guidanceMessage="passwordGuidance" :errorMessage="passwordError" name="password" type="password" label="Password" v-model="password"></labelled-input-with-feedback>
        <labelled-input-with-feedback @input="checkPasswordMatches()" @change="checkPasswordMatches()" :guidanceMessage="repeatedPasswordGuidance" :errorMessage="repeatedPasswordError" name="repeatedPassword" type="password" label="Gentag password" v-model="repeatedPassword"></labelled-input-with-feedback>

        <primary-button type="submit">Registrer</primary-button>

        <secondary-button @click="$emit('requestLogin')">Gå til login</secondary-button>
    </form>
</template>


<script>
import axios from 'axios';
import LabelledInputWithFeedback from '~/components/labelled-input-with-feedback';
import PrimaryButton from '~/components/primary-button';
import SecondaryButton from '~/components/secondary-button';
import { mapMutations } from 'vuex';


export default {
    data() {
        return {
            fullName: "",
            username: "",
            email: "",
            password: "",
            repeatedPassword: "",
            emailError: "",
            emailGuidance: "",
            usernameError: "",
            fullNameError: "",
            passwordError: "",
            passwordGuidance: "",
            repeatedPasswordGuidance: "",
            repeatedPasswordError: ""
        }
    },
    methods: {
        ...mapMutations([
            'setUsername',
        ]),
        signUp: async function () {
            if(this.fieldsAreBlank()) {
                return;
            }

            this.emailError = "";
            this.usernameError = "";
            let data = {
                fullName: this.fullName,
                username: this.username,
                email: this.email,
                password: this.password
            };

            let headers = {
                'Content-type': 'application/json'
            }

            let response;
            try {
                axios.defaults.withCredentials = true;
                response = await axios.post('http://localhost:4752/users', data, { headers });
            } catch(error) {
                let { errorCount, username, fullName, email, password } = error.response.data;
                if(errorCount > 0) {
                    this.fullNameError = fullName[0] ? fullName[0].da : "";
                    this.usernameError = username[0] ? username[0].da : "";
                    this.emailError = email[0] ? email[0].da : "";
                    this.emailGuidance = "";
                    this.passwordError = password[0] ? password[0].da : "";
                    this.passwordGuidance = "";
                    return;
                }
                return;
            }
            this.setUsername(this.username);
            this.$router.push("/hut-management");
        },
        fieldsAreBlank: function() {
            if(this.fullName && this.username && this.email && this.password && this.password == this.repeatedPassword) {
                return false;
            }

            this.checkEmailValidity();
            this.checkUsernameValidity();
            this.checkFullNameValidity();
            this.checkPasswordValidity();
            this.checkPasswordMatches();
            return true;
        },
        checkFullNameValidity: function() {
            if(this.fullName !== "" && this.fullName !== null) {
                return this.fullNameError = "";
            }
            return this.fullNameError = "feltet må ikke være tomt";
        },
        checkUsernameValidity: function() {
            if(this.username !== "" && this.username !== null) {
                return this.usernameError = "";
            }
            return this.usernameError = "feltet må ikke være tomt";
        },
        checkEmailValidity: function() {
            const regEx = /^.+@.+$/;
            if(!regEx.test(this.email) && this.emailError !== "") {
                this.emailError = "";
                return;
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
        checkPasswordValidity: function() {
            if(this.password == "" || this.password == null) {
                this.passwordError = "feltet må ikke være tomt";
                return;
            }
            this.passwordGuidance = "";
            this.passwordError = "";
            return;
        },
        checkPasswordMatches: function() {
            if(this.repeatedPassword == "" || this.repeatedPassword == null) {
                this.repeatedPasswordGuidance = "";
                this.repeatedPasswordError = "feltet må ikke være tomt";
                return;
            }
            if(this.password !== this.repeatedPassword) {
                this.repeatedPasswordGuidance = "matcher ikke endnu";
                this.repeatedPasswordError = "";
                return;
            }
            this.repeatedPasswordGuidance = "";
            this.repeatedPasswordError = "";
            return;
        }
    },
    components: { LabelledInputWithFeedback, PrimaryButton, SecondaryButton }
}
</script>

<style lang="scss">

    .sign-up-container {
        display: flex;
        flex-direction: column;
    }

</style>
