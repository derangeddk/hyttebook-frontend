<template>
    <div class="welcome-container">
        <div class="headers">
            <h1>Velkommen til HUAS</h1>
            <h2>Hurtigere og nemmere hytte (ud)lejning for alle parter</h2>
        </div>
        <div class="short-description">
            <p>HUAS er et hytteadministrationssystem
            designet til at gøre dit liv
            som hytte udlejer så nemt som muligt!</p>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style lang="scss">

    .welcome-container {
        display: flex;
        align-content: center;
        flex-direction: column;
        width: 50vw;
        background-color: #3C6E71;
        background-image: linear-gradient(0deg, lighten(#3C6E71, 20%), lighten(#3C6E71, 25%));
        padding: 100px 40px;

        h1 {
            font-weight: 500;
        }
    }

    .short-description {
        max-width: 450px;
    }

</style>
