<template>
    <form @submit.prevent="signUp();" class="sign-up-container">
        <labelled-input @input="checkFullNameValidity()" :errorMessage="fullNameError" name="full-name" type="text" label="Fulde navn" v-model="fullName"></labelled-input>
        <labelled-input @input="checkUsernameValidity()" :errorMessage="usernameError" name="username" type="text" label="Brugernavn" v-model="username"></labelled-input>
        <labelled-input @input="checkEmailValidity()" :errorMessage="emailError" name="email" type="email" label="Email" v-model="email"></labelled-input>
        <labelled-input @input="checkPasswordValidity()" @change="checkPasswordValidity()" :errorMessage="passwordError" name="password" type="password" label="Password" v-model="password"></labelled-input>
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
import LabelledInput from '~/components/labelled-input';
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
            usernameError: "",
            fullNameError: "",
            passwordError: ""
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
            this.$router.push("/form-configuration");
        },
        fieldsAreBlank: function() {
            // let someFieldsAreEmpty;

            // if(this.username == null || this.username == "") {
            //     this.usernameError = "feltet må ikke være tomt";
            //     someFieldsAreEmpty = true;
            // }
            // if(!this.fullName) {
            //     this.fullNameError = "feltet må ikke være tomt";
            //     someFieldsAreEmpty = true;
            // }
            // if(!this.email) {
            //     this.emailError = "feltet skal have en email";
            //     someFieldsAreEmpty = true;
            // }
            // if(!this.password) {
            //     this.passwordError = "feltet må ikke være tomt";
            //     someFieldsAreEmpty = true;
            // }
            // return someFieldsAreEmpty ? true : false;
            this.checkFullNameValidity();
            this.checkUsernameValidity();
            this.checkEmailValidity();
            this.checkPasswordValidity();
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
            if(this.email !== "" && this.email !== null) {
                return this.emailError = "";
            }
            return this.emailError = "feltet skal have en email";
        },
        checkPasswordValidity: function() {
            const regEx = /^(?=.*[a-zA-Z])(?=.*\d).{4,}$/;
            if(regEx.test(this.password)) {
                return this.passwordError = ""
            } else {
                return this.passwordError = "krav ikke overholdt";
            }
        },
    },
    components: { LabelledInput, PrimaryButton, SecondaryButton }
}
</script>

<style lang="scss">

    .sign-up-container {
        display: flex;
        flex-direction: column;
    }

</style>
