<template>
    <form @submit.prevent="signUp();" class="sign-in-container">
        <labelled-input name="email" type="email" label="Email" v-model="email"></labelled-input>
        <labelled-input name="password" type="password" label="Password" v-model="password"></labelled-input>
        <primary-button type="submit">Login</primary-button>

        <secondary-button @click="$emit('requestSignUp')">Gå til registrering</secondary-button>
    </form>
</template>


<script>
import Axios from 'axios';
import LabelledInput from '~/components/labelled-input';
import PrimaryButton from '~/components/primary-button';
import SecondaryButton from '~/components/secondary-button';

export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        signUp: async function () {
            console.log("login fired");
            let payload = {
                hutName: this.hutName,
                fullName: this.fullName,
                username: this.username,
                email: this.email,
                password: this.password
            };

            let headers = {
                'Content-type': 'application/json'
            }

            Axios.post('http://localhost:4752/users', payload, { headers });
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
