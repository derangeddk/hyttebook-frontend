<template>
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

    .introductory-text {
        display: flex;
        align-content: center;
        flex-direction: column;
        width: 50vw;
    }

    .short-description {
        align-content: center
    }

</style>
