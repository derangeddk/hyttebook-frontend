<template>
    <form @submit.prevent="login();" class="sign-in-container">
        <labelled-input name="username" type="text" label="Username" v-model="username"></labelled-input>
        <labelled-input name="password" type="password" label="Password" v-model="password"></labelled-input>
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
            username: "",
            password: ""
        }
    },
    methods: {
        ...mapMutations([
            'setUser'
        ]),
        login: async function () {
            let payload = {
                username: this.username,
                password: this.password
            };

            let headers = {
                'Content-type': 'application/json'
            }
            let response;
            try {
                response = await axios.post('http://localhost:4752/login', payload, { headers });
            } catch(err) {
                console.error("couldn't login: ", err);
                return;
            }

            let user = response.data.user.data;

            this.setUser(user)
            this.$router.push("/form-configuration");
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
