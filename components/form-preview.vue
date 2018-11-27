<template>
    <div class="form-preview">
        <form>
            <div class="form-heading">
                <h1>Book {{ hutName }}</h1>
                <h2>Udfyld venligst alle felter</h2>
            </div>

            <div class="standard-information-wrapper">
                <div class="standard-information-text" v-if="standardArrivalTimeText || standardDepartureTimeText || standardCleaningText">
                    <h3>Standard information</h3>
                    <ul>
                        <li v-if="standardCleaningText">{{ standardCleaningText }}</li>
                        <li v-if="standardArrivalTimeText">Man har adgang til hytten fra kl. {{ standardArrivalTimeText }} </li>
                        <li v-if="standardDepartureTimeText">Hytten skal være forladt senest kl. {{ standardDepartureTimeText }}</li>
                    </ul>

                </div>
            </div>

            <label for="form-org-type" v-if="showOrgType">
                Organisations type
                <input type="text" id="form-org-type">
            </label>

            <label for="form-org-name">
                Organisations navn
                <input type="text" id="form-org-name" placeholder="DDS">
            </label>

            <label for="form-firstname">
                Fornavn
                <input type="text" id="form-firstname" placeholder="Birgitte">
            </label>

            <label for="form-lastname">
                Efternavn
                <input type="text" id="form-lastname" placeholder="Hansen">
            </label>

            <label for="form-address">
                Adresse
                <input type="text" id="form-address" placeholder="Vejnavn og nr">
            </label>

            <label for="form-zipcode">
                Postnummer
                <input type="text" id="form-zipcode" placeholder="2500">
            </label>

            <label for="form-city">
                By
                <input type="text" id="form-city" placeholder="Valby">
            </label>

            <label for="form-country">
                Land
                <input type="text" id="form-country" placeholder="Denmark">
            </label>

            <label for="form-phone-number">
                Telefon
                <input type="text" id="form-phone-number">
            </label>

            <label for="form-bank-name" v-if="showBankName">
                Bank navn
                <input type="text" id="form-bank-name" placeholder="Nordea">
            </label>

            <label for="form-reg-number" v-if="showRegistration">
                Reg
                <input type="text" id="form-reg-number">
            </label>

            <label for="form-acc-number" v-if="showAccount">
                Konto
                <input type="text" id="form-acc-number">
            </label>

            <label for="form-ean-number" v-if="showEan">
                EAN
                <input type="text" id="form-ean-number">
            </label>

            <label for="form-cleaning" v-if="showCleaningToggle">
                Rengøring ønskes
                <input type="checkbox" id="form-cleaning" checked>
            </label>

            <label for="form-arrival-date">
                Ankomst dato
                <input type="date" id="form-arrival-date">
            </label>

            <label for="form-arrival-time" v-if="showArrivalTime">
                Ankomst tid
                <input type="time" id="form-arrival-time">
            </label>

            <label for="form-departure-date">
                Afrejse dato
                <input type="date" id="form-departure-date">
            </label>

            <label for="form-departure-time" v-if="showDepartureTime">
                Afrejse tid
                <input type="time" id="form-departure-time">
            </label>

            <button type="submit">SEND</button>
        </form>
    </div>
</template>

<script>
    export default {
        props: [
            "hutName",
            "showOrgType",
            "showBankName",
            "showRegistration",
            "showAccount",
            "showEan",
            "showCleaningToggle",
            "showArrivalTime",
            "showDepartureTime",
            "standardArrivalTimeText",
            "standardDepartureTimeText",
            "standardCleaningText"
        ],
        computed: {
            showCleaningInputfield: function() {
                if(this.showCleaningToggle) {
                    this.standardCleaningText = "";
                }
                return true;
            },
            showArrivalTimeInputfield: function() {
                if(this.showArrivalTime) {
                    this.standardArrivalTimeText = "";
                    return true;
                }
            },
            showDepartureTimeInputfield: function() {
                if(this.showDepartureTime) {
                    this.standardDepartureTimeText = "";
                    return true;
                }
            }
        }
    }
</script>
