<template>
    <div :class="'sign-up-container' + (visible ? ' sign-up-container-visible' : '')">
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
        <button type="submit" class="sign-up-button" @click="signUp();">Registrer</button>
        <button class="request-login" @click="$emit('requestLogin')">Gå til login</button>
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

    .sign-up-container {
        display: flex;
        flex-direction: column;
        width: 0;
        overflow: hidden;
        flex-grow: 0;
        transition: width 0.4s;
        justify-content: center;
        align-items: center;
    }

    .sign-up-container-visible {
        width: 50vw;
    }

    label input, label span {
        display:block;
    }

    label {
        margin-bottom: 10px;
    }

    label span {
        font-weight: normal;
        font-size: 0.80em;
        font-family: "Roboto";
    }

    input {
        height: 30px;
        width: 200px;
        font-weight: 400;
        font-family: "Kanit";
        padding: 3px 4px;
        font-size: 1.2em;
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
