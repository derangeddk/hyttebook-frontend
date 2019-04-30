<template>
    <form @submit.prevent="signUp();" class="sign-up-container">
        <labelled-input-with-feedback @input="checkFullNameValidity()" :errorMessage="fullNameError" name="full-name" type="text" label="Fulde navn" v-model="fullName"></labelled-input-with-feedback>
        <labelled-input-with-feedback @input="checkUsernameValidity()" :errorMessage="usernameError" name="username" type="text" label="Brugernavn" v-model="username"></labelled-input-with-feedback>
        <labelled-input-with-feedback @input="checkEmailValidity()" :guidanceMessage="emailGuidance" :errorMessage="emailError" name="email" type="email" label="Email" v-model="email"></labelled-input-with-feedback>
        <labelled-input-with-feedback @input="checkPasswordValidity()" @change="checkPasswordValidity()" :guidanceMessage="passwordGuidance" :errorMessage="passwordError" name="password" type="password" label="Password" v-model="password"></labelled-input-with-feedback>
        <div>Krav til password:
            <ul>
                <li>min. 4 karakterer</li>
                <li>mindst et tal</li>
                <li>mindst et bogstav</li>
            </ul>
        </div>
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
            emailError: "",
            emailGuidance: "",
            usernameError: "",
            fullNameError: "",
            passwordError: "",
            passwordGuidance: ""
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
            let payload = {
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
                response = await axios.post('http://localhost:4752/users', payload, { headers });
            } catch(error) {
                if(error.response.data.message === "A user with that username already exists") {
                    this.usernameError = "er allerede i brug";
                    return;
                }
                if(error.response.data.message === "A user with that email already exists") {
                    this.emailError = "er allerede i brug";
                    return;
                }
                if(error.response.data.errorCount > 0) {
                    //TODO: return message to the right indputfield.
                }
                return;
            }
            this.setUsername(this.username);
            this.$router.push("/hut-management");
        },
        fieldsAreBlank: function() {
            if(this.fullName && this.username && this.email && this.password) {
                return false;
            }

            this.checkEmailValidity();
            this.checkUsernameValidity();
            this.checkFullNameValidity();
            this.checkPasswordValidity();
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
            const regEx = /^(?=.*[a-zA-Z])(?=.*\d).{4,}$/;
            if(regEx.test(this.password) && this.passwordError !== "") {
                this.passwordError = ""
                return;
            }
            if(regEx.test(this.password) && this.passwordGuidance !== "") {
                this.passwordGuidance = "";
                return;
            }
            if(this.password == "" || this.password == null) {
                this.passwordGuidance = "";
                this.passwordError = "feltet må ikke være tomt";
                return;
            }
            if(!regEx.test(this.password) && this.password !== "") {
                this.passwordError = "";
                this.passwordGuidance = "krav endnu ikke overholdt";
                return;
            }
        },
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
