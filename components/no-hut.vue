<template>
    <div class="no-hut-container" >
        <p>Du har ikke registreret en hytte endnu. Vil du gøre det nu?</p>
        <primary-button type="submit" @click="$emit('requestRegistration')">Registrer Hytte</primary-button>
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
        justify-content: center;
        align-self: center;
        width: 100vw;
    }
</style>
