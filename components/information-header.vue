<template>
    <nav>
        <div class="hutname">{{ hutName }}</div>
        <div class="username">{{ username }}</div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                username: "",
                hutName: "",
            }
        },
        async mounted() {
            this.getUsername();
            this.getHutname();
        },
        methods: {
            getUsername: function() {
                return this.username = process.env.username;
            },
            getHutname: function() {
                return this.hutName = process.env.hutName;
            },
        }
    }
</script>

<style>
    nav {
        top: 0;
        width: 100%;
        height: 60px;
        margin: 0%;
        position: absolute;
        background-color: #772f73;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }

    .hutname {
        padding-top: 20px;
        padding-bottom: 20px;
        display: inline-block;
        position: relative;
    }

    .username {
        padding-top: 20px;
        padding-bottom: 20px;
        display: inline-block;
        float: right;
        padding-right: 30px;
    }
</style>

