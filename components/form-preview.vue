<template>
    <div class="form-preview">
        <form>
            <div class="form-heading">
                <h1>Book {{ hutName }}</h1>
                <div class="standard-information-wrapper">
                    <div class="standard-information" v-if="anyStandardInformation">
                        <h3>Generel information</h3>
                        <div class="standard-information-text" v-html="prettyStdInformation" v-if="prettyStdInformation"></div>
                        <ul>
                            <li v-if="stdArrivalTime && !showArrivalTimeInputfield">Man har adgang til hytten fra kl. {{ stdArrivalTime }} </li>
                            <li v-if="stdDepartureTime && !showDepartureTimeInputfield">Hytten skal være forladt senest kl. {{ stdDepartureTime }}</li>
                            <li v-if="defaultCleaningIncluded && !showCleaningToggle">Vi står for rengøringen</li>
                            <li v-if="!defaultCleaningIncluded && !showCleaningToggle">Du står selv for rengøringen</li>
                        </ul>

                    </div>
                </div>
                <h2>Udfyld venligst alle felter</h2>
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

            <label v-if="showBankDetails">
                <span>Bank navn</span>
                <input type="text" name="form-bank-name" placeholder="Nordea">
            </label>

            <label v-if="showBankDetails">
                <span>Reg. og kontonummer</span>
                <div class="full-bank-account-number">
                    <input class="bank-account-registration-number" type="text" name="form-reg-number">
                    <input type="text" name="form-acc-number">
                </div>
            </label>

            <label v-if="showEan">
                <span>EAN</span>
                <input type="text" name="form-ean-number">
            </label>

            <label v-if="showCleaningToggle">
                <span>Rengøring ønskes</span>
                <input type="checkbox" name="form-cleaning" :checked="defaultCleaningIncluded">
            </label>

            <label>
                <span>Ankomst dato</span>
                <input type="date" name="form-arrival-date">
            </label>

            <label v-if="showArrivalTime">
                <span>Ankomst tid</span>
                <input type="time" name="form-arrival-time" :value="stdArrivalTime">
            </label>

            <label>
                <span>Afrejse dato</span>
                <input type="date" name="form-departure-date">
            </label>

            <label v-if="showDepartureTime">
                <span>Afrejse tid</span>
                <input type="time" name="form-departure-time" :value="stdDepartureTime">
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
            "showBankDetails",
            "showEan",
            "showCleaningToggle",
            "defaultCleaningIncluded",
            "showArrivalTime",
            "showDepartureTime",
            "stdArrivalTime",
            "stdDepartureTime",
            "stdInformation"
        ],
        computed: {
            showArrivalTimeInputfield: function() {
                if(this.showArrivalTime) {
                    this.stdArrivalTime = "";
                    return true;
                }
            },
            showDepartureTimeInputfield: function() {
                if(this.showDepartureTime) {
                    this.stdDepartureTime = "";
                    return true;
                }
            },
            anyStandardInformation: function() {
                if(this.stdArrivalTime && !this.showArrivalTimeInputfield) {
                    return true;
                }
                if(this.stdDepartureTime && !this.showDepartureTimeInputfield) {
                    return true;
                }
                if(!this.showCleaningToggle) {
                    return true;
                }
                if(this.stdInformation.trim()) {
                    return true;
                }

                return false;
            },
            prettyStdInformation: function() {
                return this.stdInformation.trim().replace(/\n/g, "<br>")
            }
        }
    }
</script>

<style lang="scss">

    .form-preview {
        max-width: 340px;
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

    .standard-information {
        padding-bottom: 0.3em;
        margin-top: 2.5em;
    }

    .standard-information h3 {
        margin-bottom: 5px;
        text-align: left;
        font-size: 1em;
        font-weight: bold;
    }

    .standard-information-text {
        line-height: 125%;
        margin-bottom: 1em;
    }

    .standard-information ul {
        margin: 0;
        margin-bottom: 20px;
        padding-left: 20px;
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

    .full-bank-account-number {
        display: flex;
        flex-direction: row;

        input {
            flex-grow: 3;
            flex-basis: 200px;
            width: 0;

            &.bank-account-registration-number {
                flex-basis: 60px;
                margin-right: 10px;
            }
        }
    }


</style>
