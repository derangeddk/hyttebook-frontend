<template>
    <form @submit.prevent="signUp();" class="sign-up-container">
        <labelled-input name="first-name" type="text" label="Fulde navn" v-model="fullName"></labelled-input>
        <labelled-input name="username" type="text" label="Brugernavn" v-model="username"></labelled-input>
        <labelled-input name="email" type="email" label="Email" v-model="email"></labelled-input>
        <labelled-input name="password" type="password" label="Password" v-model="password"></labelled-input>
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
            password: ""
        }
    },
    methods: {
        ...mapMutations([
            'setUsername',
        ]),
        signUp: async function () {
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
                console.error("failed to register user: ", error);
                return;
            }

            this.setUsername(this.username);
            this.$router.push("/form-configuration");
        }
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
