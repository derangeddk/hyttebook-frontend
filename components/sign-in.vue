<template>
    <div :class="'sign-in-container' + (visible ? ' sign-in-container-visible' : '')">
        <label for="hut-name">
            <span class="hut-name">Hytte navn</span>
            <input type="text" v-model="hutName">
        </label>
        <label for="first-name">
            <span class="first-name">Fulde navn</span>
            <input type="text" v-model="fullName">
        </label>
        <label for="last-name">
            <span class="last-name">Brugernavn</span>
            <input type="text" v-model="username">
        </label>
        <label for="email">
            <span class="email">Email</span>
            <input type="email" v-model="email">
        </label>
        <label for="password">
            <span class="password">Password</span>
            <input type="password" v-model="password">
        </label>
        <button type="submit" class="submit-button" @click="signUp();">Login</button>
        <button @click="$emit('requestSignUp')">Gå til registrering</button>
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
    props: ["visible"],
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
        width: 0;
        overflow: hidden;
        flex-grow: 0;
        transition: width 0.4s;

    }

    .sign-in-container-visible {
        width: 50vw;
    }

    .submit-button:hover {
        background-color: lighten(#3C6E71, 15%);
    }

    .submit-button {
        background-color: lighten(#3C6E71, 20%);
        color:black;
        width: 100%;
        padding: 20px;
        margin: 0.9em 0;
        border: none;
        font-size: 1em;
        font-family: inherit;
        cursor: pointer;
        transition: background-color 200ms;
    }

</style>
