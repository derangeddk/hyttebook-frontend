<template>
    <div class="hut-registration-container">

        <div class="page-header">
            <h1>Registrer hytte</h1>
        </div>

        <form @submit.prevent class="registration-container">
            <labelled-input name="hut-name" type="text" label="Hytte navn" v-model="hutName"></labelled-input>
            <labelled-input name="street" type="text" label="Vej navn" v-model="street"></labelled-input>
            <labelled-input name="city" type="text" label="By" v-model="city"></labelled-input>
            <labelled-input name="zip-code" type="text" label="Postnummer" v-model="zipCode"></labelled-input>
        </form>
    </div>
</template>

<script>
    import LabelledInput from '~/components/labelled-input';

    export default {
        components: { LabelledInput }
    }
</script>

<style lang="scss">
    div.hut-registration-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        min-height: 100vh;
        width: 100%;

        .page-header h1 {
            margin-top: 80px;
        }

        form.registration-container {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
    }
</style>
