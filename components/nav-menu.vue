<template>
    <div class="navigation">
        <div class="logo-container">
            <center><img src="/tmp_logo.png" alt="home-logo"></center>
        </div>
        <ul>
            <li>Hytte Administration</li>
            <li><a href="#">Anmodninger</a></li>
            <li><a href="#">Formular</a></li>
            <li><a href="#">Priser</a></li>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .navigation {
        position: absolute;
        left: 0;
        top: 60px;
        width: 15%;
        height: 100%;
        float: left;
        background-color: #242c31;
        display: inline-block;
    }

    ul {
        margin-left: 5px;
        padding-left: 10px;
    }

    ul li {
        list-style: none;
        padding-top: 4px;
    }

    ul li a {
        font-family: Arial, Helvetica, sans-serif;
        color: whitesmoke;
        text-decoration: none;
        display: block;
    }

    ul li a:hover, ul li a:focus  {
        background-color: lightgrey;
        color: black;
    }
</style>