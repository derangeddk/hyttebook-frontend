<template>
    <main>
        <information-header></information-header>
        <div class="main-content">
            <div class="rent-form-interface-container">
                <div class="main-header">
                    <div class="page-header">
                        <h1>Formular</h1>
                    </div>
                </div>
                <section class="form-and-preview">
                    <table>
                        <thead>
                            <tr>
                                <th>Indsti&shy;lling</th>
                                <th>Værdi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Organistions type</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="showOrgType">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Bank navn</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="showBankName">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Registrerings nummer</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="showRegistration">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Konto nummer</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="showAccount">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>EAN nummer</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="showEan">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Rengøring</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="showCleaningToggle">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Ankomst tidspukt</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="showArrivalTime">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Standard Ankomst tid</td>
                                <td>
                                    <label>
                                        <input type="time" v-model="stdArrivalTime">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Afrejse tidspukt</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="showDepartureTime">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Standard Afrejse tid</td>
                                <td>
                                    <label>
                                        <input type="time" v-model="stdDepartureTime">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Standard Information</td>
                                <td>
                                    <label>
                                        <textarea v-model="stdInformation"></textarea>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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
                </section>
            </div>
        </div>
        <footer>&copy; 8ISH</footer>
    </main>
</template>

<script>
    import InformationHeader from '~/components/information-header';
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
