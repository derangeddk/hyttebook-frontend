<template>
    <div class="sign-up-container">
        <labelled-input name="hut-name" type="text" label="Hytte navn" v-model="hutName"></labelled-input>

        <labelled-input name="first-name" type="text" label="Fulde navn" v-model="fullName"></labelled-input>

        <labelled-input name="username" type="text" label="Brugernavn" v-model="username"></labelled-input>

        <labelled-input name="email" type="email" label="Email" v-model="email"></labelled-input>

        <labelled-input name="password" type="password" label="Password" v-model="password"></labelled-input>

        <button type="submit" class="sign-up-button" @click="signUp();">Registrer</button>
        <button class="request-login" @click="$emit('requestLogin')">Gå til login</button>
    </div>
</template>


<script>
import Axios from 'axios';
import LabelledInput from '~/components/labelled-input';

export default {
    data() {
        return {
            hutName: "",
            fullName: "",
            username: "",
            email: "",
            password: ""
        }
    },
    methods: {
        signUp: async function () {
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
    components: { LabelledInput }
}
</script>

<style lang="scss">

    .sign-up-container {
        display: flex;
        flex-direction: column;
    }

    .sign-up-button:hover {
        background-color: lighten(#3C6E71, 15%);
    }

    .sign-up-button {
        background-color: lighten(#3C6E71, 20%);
        color:black;
        padding: 20px;
        margin: 0.9em 0;
        width: 200px;
        border: none;
        font-size: 1em;
        font-family: "Kanit";
        cursor: pointer;
        transition: background-color 200ms;
    }

    .request-login {
        border: 1px solid lighten(#3C6E71, 20%);
        color: lighten(#3C6E71, 20%);
        background-color: transparent;
        width: 200px;
        padding: 10px;
        margin-top: 60px;
    }

</style>
