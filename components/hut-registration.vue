<template>
    <div class="hut-registration-container">

        <div class="page-header">
            <h1>Registrering af hytte</h1>
            <h3>Vi har behov for noget information</h3>
            <h3>om hytten du udlejer. Informationen vil bl.a. blive brugt</h3>
            <h3>i mails som sendes til lejere</h3>
        </div>

        <form @submit.prevent="registerHut();" class="registration-container">
            <labelled-input name="hut-name" type="text" label="Hytte navn" v-model="hutName"></labelled-input>
            <labelled-input name="street" type="text" label="Vej" v-model="street"></labelled-input>
            <labelled-input name="streetNumber" type="text" label="Nummer" v-model="streetNumber"></labelled-input>
            <labelled-input @input="findCityFromZip()" name="zip-code" type="number" label="Postnummer" v-model="zipCode"></labelled-input>
            <labelled-input name="city" type="text" label="By" v-model="city"></labelled-input>
            <labelled-input name="email" type="email" label="Kontakt email" v-model="email"></labelled-input>
            <labelled-input name="phone" type="tel" label="Kontakt nummer" v-model="phone"></labelled-input>
            <primary-button type="submit">Registrer</primary-button>
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
                hutName: "",
                street: "",
                streetNumber: "",
                city: "",
                zipCode: "",
                email: "",
                phone: ""
            }
        },
        methods: {
            async findCityFromZip() {
                let timer = 0;
                clearTimeout(timer);
                timer = setTimeout(async () => {
                   this.city = await requestCity(this.zipCode);
                },600);
            },
            async registerHut() {
                let payload = {
                    hutName: this.hutName,
                    street: this.street,
                    streetNumber: this.streetNumber,
                    city: this.city,
                    zipCode: this.zipCode,
                    email: this.email,
                    phone: this.phone
                }

                let headers = {
                    "content-type": "application/json"
                }

                let response;
                try {
                    response = await axios.post('http://localhost:4752/huts', payload, { headers });
                } catch(error) {
                    console.error("Failed to register hut: ", error);
                    return;
                }

            }
        },
        components: { LabelledInput, PrimaryButton }
    }

    async function requestCity(zip) {
        let headers = {
                    "content-type": "application/json"
                }

        let response;
        try {
            response = await axios.get(`http://dawa.aws.dk/postnumre/${zip}`,headers);
        } catch (error) {
            console.log("Couldn't fetch city name: ", error);
        }

        return response.data.navn;
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

        .page-header {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-bottom: 50px;

            h1 {
                margin-top: 80px;
            }

            h3 {
                margin: 0;
            }
        }

        form.registration-container {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
    }
</style>
