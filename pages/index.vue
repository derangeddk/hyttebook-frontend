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
        components: { InformationHeader, FormPreview },
    }
</script>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css?family=Kanit:100,300,400,400i,500,700');
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,400i,500,700');

    body {
        font-family: 'Kanit', sans-serif;
        color: black;
        background: #FFFFFF;
        margin: 0;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        min-height: 100vh;
    }

    .main-content {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    h1, h2, h3 {
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    }

    .rent-form-interface-container {
        display: flex;
        flex-direction: column;
        min-width: 500px;
        flex-grow: 1;
        align-items: center;
    }

    section.form-and-preview {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    table {
        padding: 40px;
        margin: 30px;
        flex-grow: 1;
        border-collapse: collapse;
        box-shadow: 0 0 3px rgba(0,0,0,0.5), 0 3px 7px rgba(0,0,0,0.3);
    }

    table thead tr th {
        font-weight: normal;
        color: black;
        padding: 5px;
        width: 100px;
        background-color: #D9D9D9;
        text-align: center;
    }

    tbody td:nth-child(1) {
        padding: 5px;
        text-align: left;
        white-space: nowrap;
    }

    tbody tr:last-child td {
        border: none;
    }

    tbody td:nth-child(2) {
        padding: 5px;
        text-align: left;
    }

    table tr td, thead th {
        border-bottom: 1px solid lighten(#353535, 50%);
    }

    table textarea {
        resize: none;
        width: 400px;
        height: 80px;
    }

</style>
