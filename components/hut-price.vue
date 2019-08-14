<template>
    <div class="hut-price-container">
        <form @submit.prevent="savePrice();" class="price-form">
            <labelled-input name="hut-price" type="text" label="Pris" v-model="hutPrice"></labelled-input>
            <primary-button type="submit">Gem</primary-button>
        </form>
    </div>
</template>

<script>
    import LabelledInput from '~/components/labelled-input';
    import PrimaryButton from '~/components/primary-button';
    import axios from 'axios';

    export default {
        data() {
            return {
                hutPrice: "" 
            }
        },
        methods: {
            async savePrice() {
                let payload = {
                    hutPrice: this.hutPrice
                }

                let headers = {
                    "content-type": "application/json"
                }

                let response;
                try {
                    response = await axios.post('http://localhost:4752/pricetest', payload, { headers });
                } catch(error) {
                    console.error("Failed to register price: ", error);
                    return;
                }

            }
        },
        components: { LabelledInput, PrimaryButton }
    }
</script>

<style lang="scss">
    div.hut-price-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        min-height: 100vh;
        width: 100%;

        form.price-form {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
    }
</style>
