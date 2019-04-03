<template>
    <div class="sign-in-container">
        <label for="email">
            <span class="email">Email</span>
            <input type="email" v-model="email">
        </label>
        <label for="password">
            <span class="password">Password</span>
            <input type="password" v-model="password">
        </label>
        <button type="submit" class="submit-button" @click="signUp();">Login</button>
        <button class="request-sign-up" @click="$emit('requestSignUp')">Gå til registrering</button>
    </div>
</template>


<script>
import Axios from 'axios';

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
    }
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

    .submit-button {
        background-color: lighten(#3C6E71, 20%);
        color:black;
        padding: 20px;
        margin: 0.9em 0;
        border: none;
        font-size: 1em;
        font-family: inherit;
        cursor: pointer;
        transition: background-color 200ms;
    }

    .request-sign-up {

    }

</style>
