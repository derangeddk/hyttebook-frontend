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
            <label v-if="showOrgType">
                <span>Organisations type</span>
                <input type="text" name="form-org-type">
            </label>

            <label>
                <span>Organisations navn</span>
                <input type="text" name="form-org-name" placeholder="DDS">
            </label>

            <label>
                <span>Fornavn</span>
                <input type="text" name="form-firstname" placeholder="Birgitte">
            </label>

            <label>
                <span>Efternavn</span>
                <input type="text" name="form-lastname" placeholder="Hansen">
            </label>

            <label>
                <span>Adresse</span>
                <input type="text" name="form-address" placeholder="Vejnavn og nr">
            </label>

            <label>
                <span>Postnummer</span>
                <input type="text" name="form-zipcode" placeholder="2500">
            </label>

            <label>
                <span>By</span>
                <input type="text" name="form-city" placeholder="Valby">
            </label>

            <label>
                <span>Land</span>
                <input type="text" name="form-country" placeholder="Denmark">
            </label>

            <label>
                <span>Telefon</span>
                <input type="text" name="form-phone-number">
            </label>

            <label v-if="showBankName">
                <span>Bank navn</span>
                <input type="text" name="form-bank-name" placeholder="Nordea">
            </label>

            <label v-if="showRegistration">
                <span>Reg</span>
                <input type="text" name="form-reg-number">
            </label>

            <label v-if="showAccount">
                <span>Konto</span>
                <input type="text" name="form-acc-number">
            </label>

            <label v-if="showEan">
                <span>EAN</span>
                <input type="text" name="form-ean-number">
            </label>

            <label v-if="showCleaningToggle">
                <span>Rengøring ønskes</span>
                <input type="checkbox" name="form-cleaning" checked>
            </label>

            <label>
                <span>Ankomst dato</span>
                <input type="date" name="form-arrival-date">
            </label>

            <label v-if="showArrivalTime">
                <span>Ankomst tid</span>
                <input type="time" name="form-arrival-time">
            </label>

            <label>
                <span>Afrejse dato</span>
                <input type="date" name="form-departure-date">
            </label>

            <label v-if="showDepartureTime">
                <span>Afrejse tid</span>
                <input type="time" name="form-departure-time">
            </label>
            <button type="submit" class="submit-button">Send</button>
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

<style lang="scss">
    .form-preview {
        margin: 20px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 0 3px rgba(0,0,0,0.5), 0 3px 7px rgba(0,0,0,0.3);
    }

    .form-preview h1 {
        font-size: 1.6em;
    }

    .form-preview h2 {
        font-size: 1em;
    }

    .form-preview form {
        display: flex;
        flex-direction: column;
    }

    .form-preview input[type=text] {
        font-family: inherit;
    }

    .form-preview button.submit-button {
        background-color: lighten(#3C6E71, 20%);
        color:black;
        width: 100%;
        padding: 20px;
        margin: 0.9em 0;
        border: none;
        font-size: 1em;
        font-family: inherit;
        cursor: pointer;
        transition: background-color 200ms;
    }

    .form-preview button.submit-button:hover {
        background-color: lighten(#3C6E71, 15%);
    }


    .form-preview label {
        display: flex;
        margin: 0.4em 0;
        flex-direction: column;
    }
</style>
