<template>
    <main>
        <!-- <information-header></information-header> -->
        <!-- <nav-menu></nav-menu> -->
        <div class="page-header">
            <h1>Formular</h1>
        </div>
        <div class="rent-form-interface-container">
            <table>
                <thead>
                    <tr>
                        <th>Felter</th>
                        <th>Synlighed</th>
                        <th>standard værdi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Organistions type</td>
                        <td>
                            <input type="checkbox" id="org-type" v-model="showOrgType">
                            <label for="org-type"></label>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Organistions navn</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Fornavn</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Efternavn</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Adresse</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Postnummer</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>By</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Land</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Tlf nummer</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Bank navn</td>
                        <td>
                            <input type="checkbox" id="bank-name" v-model="showBankName">
                            <label for="bank-name"></label>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Registrerings nummer</td>
                        <td>
                            <input type="checkbox" id="reg-number" v-model="showRegistration">
                            <label for="reg-number"></label>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Konto nummer</td>
                        <td>
                            <input type="checkbox" id="acc-number" v-model="showAccount">
                            <label for="acc-number"></label>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EAN nummer</td>
                        <td>
                            <input type="checkbox" id="ean-number" v-model="showEan">
                            <label for="ean-number"></label>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Rengøring</td>
                        <td>
                            <input type="checkbox" id="cleaning" v-model="showCleaningToggle">
                            <label for="cleaning"></label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="cleaning-default-message"
                                placeholder="Rengøringen er inkluderet"
                                v-model="standardCleaningText"
                            >
                        </td>
                    </tr>
                    <tr>
                        <td>Ankomst dato</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Ankomst tidspukt</td>
                        <td>
                            <input type="checkbox" id="arrival-time" v-model="showArrivalTime">
                            <label for="arrival-time"></label>
                        </td>
                        <td>
                            <input type="time" name="arrival-default-time" placeholder="17:00" id="" v-model="standardArrivalTimeText">
                        </td>
                    </tr>
                    <tr>
                        <td>Afrejse dato</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Afrejse tidspukt</td>
                        <td>
                            <input type="checkbox" id="depature-time" v-model="showDepartureTime">
                            <label for="depature-time"></label>
                        </td>
                        <td>
                            <input type="time" name="departure-default-time" placeholder="15:00" id="" v-model="standardDepartureTimeText">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <form-preview
            :hutName="hutName"
            :showOrgType="showOrgType"
            :showBankName="showBankName"
            :showRegistration="showRegistration"
            :showAccount="showAccount"
            :showEan="showEan"
            :showCleaningToggle="showCleaningToggle"
            :showArrivalTime="showArrivalTime"
            :showDepartureTime="showDepartureTime"
            :standardArrivalTimeText="standardArrivalTimeText"
            :standardDepartureTimeText="standardDepartureTimeText"
            :standardCleaningText="standardCleaningText">
        </form-preview>
    </main>

</template>

<script>
    import InformationHeader from '~/components/information-header';
    import NavMenu from '~/components/nav-menu';
    import FormPreview from '~/components/form-preview';

    export default {
        data() {
            return {
                hutName: process.env.hutName,
                showOrgType: false,
                showBankName: false,
                showRegistration: false,
                showAccount: false,
                showEan: false,
                showCleaningToggle: false,
                showArrivalTime: false,
                showDepartureTime: false,
                standardArrivalTimeText: "",
                standardDepartureTimeText: "",
                standardCleaningText: ""
            }
        },
        components: { InformationHeader, NavMenu, FormPreview },
    }
</script>

<style>

    @import url('https://fonts.googleapis.com/css?family=Kanit');
    @import url('https://fonts.googleapis.com/css?family=Roboto');

    body {
        font-family: 'Kanit', sans-serif;
        color: black;
        background: #FFFFFF;
    }

    .page-header {
        display: inline-block;
    }

    h1, h2, h3 {
        text-align: center;
        font-weight: bolder;
        font-family: 'Roboto', sans-serif;
    }

    .rent-form-interface-container {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        min-height: 100vh;
        flex-wrap: wrap;
    }

    table {
        padding: 40px;
        margin: 30px;
        flex-grow: 1;
        border-collapse: collapse;
        min-width: 500px;
    }

    thead th:nth-child(1) {
        width: 40%;
    }

    thead th:nth-child(2) {
        width: 10%;
    }

    thead th:nth-child(3) {
        width: 50%;
    }

    table thead tr th {
        color: black;
        padding: 5px;
        width: 100px;
        background-color: #D0CDD7;
        text-align: center;
        border-bottom: 1px solid #353535;
    }

    table body tr {
        border-bottom: 1px solid #353535;
    }

    tbody td:nth-child(1) {
        padding: 5px;
        text-align: left;
    }

    tbody td:nth-child(2) {
        padding: 5px;
        text-align: center;
    }

    table tr td, th {
        border-bottom: 1px solid #353535;
    }

    table tfoot td {
        border-bottom: 0;
    }

    /* Form preview */

    .form-preview {
        margin: 20px;
        padding: 20px;
        min-height: 200px;
        min-width: 400px;
        flex-wrap: wrap;
        color: black;
        background: white;
        display: inline-block;
    }

    .form-preview form {
        display: flex;
        flex-direction: column;
    }

    .form-preview form label {
        margin-left: 40px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .form-preview form button {
        height: 40px;
        width: 70px;
        margin-left: 40%;
    }

</style>
