<template>
    <main>
        <section class="introduction-wrapper">
            <div class="introductory-text">
                <div class="headers">
                    <h1>Velkommen til HUAS</h1>
                    <h3>Hurtigere og nemmere hytte (ud)lejning for alle parter</h3>
                </div>
                <div class="short-description">
                     <p>HUAS er et hytte administrations system</p>
                    <p>designet til at gøre dit liv</p>
                    <p>som hytte udlejer så nemt som muligt!</p>
                </div>
            </div>
        </section>
        <section class="sign-up-wrapper">
            <div class="sign-up-container">
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
                <button type="submit" class="submit-button" @click="signUp();">Registrer</button>
            </div>
        </section>
    </main>
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
    @import url('https://fonts.googleapis.com/css?family=Kanit:100,300,400,400i,500,700');
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,400i,500,700');

    body {
        font-family: 'Kanit', sans-serif;
        color: black;
        background: #FFFFFF;
        margin: 0;
    }

    main {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        min-height: 100vh;
        min-width: 100vh;
    }

    h1, h2, h3 {
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    }

    section.introduction-wrapper {
        height: 100vh;
        padding: 70px;
        background: linear-gradient(170deg,#4f9396, #3C6E71);
    }

    .introductory-text {
        display: flex;
        align-content: center;
        flex-direction: column;
    }

    .short-description {
        align-content: center
    }

    section.sign-up-wrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 70px;
    }

    .sign-up-container {
        display: flex;
        flex-direction: column;
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
