<template>
    <div class="no-hut-container" >
        <h1>Velkommen indenfor</h1>
        <h3>Du er nået til det punkt hvor du enten</h3>
        <h3>skal registrere en hytte eller forbinde dig til en hytte.</h3>
        <div class="button-container">
            <primary-button type="submit" @click="$emit('requestRegistration')">Registrer Hytte</primary-button>
            <primary-button type="submit" @click="$emit('requestAffiliation')">Forbind til hytte</primary-button>
        </div>
    </div>
</template>

<script>
    import PrimaryButton from '~/components/primary-button';

    export default {
        components: { PrimaryButton }
    }
</script>

<style lang="scss">
    div.no-hut-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        margin-top: 100px;

        h3 {
            margin: 0;
        }

        .button-container {
            margin-top: 50px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            width: 600px;
        }
    }
</style>
