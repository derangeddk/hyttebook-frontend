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
                                <td>Vis "Organistions type"</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="showOrgType">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Lad lejere indtaste bankoplysinger</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="showBankDetails">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Lad lejere indtaste EAN nummer</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="showEan">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Vis "Rengøring"</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="showCleaningToggle">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Standardværdi for "Rengøring"</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="defaultCleaningIncluded">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Vis "Ankomst tidspukt"</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="showArrivalTime">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Standard ankomst tid</td>
                                <td>
                                    <label>
                                        <input type="time" v-model="stdArrivalTime">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Vis "Afrejse tidspukt"</td>
                                <td>
                                    <label>
                                        <input type="checkbox" v-model="showDepartureTime">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Standard afrejse tid</td>
                                <td>
                                    <label>
                                        <input type="time" v-model="stdDepartureTime">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Generel information</td>
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
                        :showBankDetails="showBankDetails"
                        :showEan="showEan"
                        :showCleaningToggle="showCleaningToggle"
                        :showArrivalTime="showArrivalTime"
                        :showDepartureTime="showDepartureTime"
                        :stdArrivalTime="stdArrivalTime"
                        :stdDepartureTime="stdDepartureTime"
                        :stdInformation="stdInformation"
                        :defaultCleaningIncluded="defaultCleaningIncluded">
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
        head: {
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        },
        data() {
            return {
                hutName: process.env.hutName,
                showOrgType: false,
                showBankDetails: false,
                showEan: false,
                showCleaningToggle: false,
                defaultCleaningIncluded: true,
                showArrivalTime: false,
                showDepartureTime: false,
                stdArrivalTime: "",
                stdDepartureTime: "",
                stdInformation: ""
            }
        },
        components: { InformationHeader, FormPreview }
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

    .page-header h1 {
        margin-top: 100px;
    }

    .rent-form-interface-container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        align-items: center;
    }

    section.form-and-preview {
        display: flex;
        flex-direction: row;

        @media (max-width: 800px) {
            flex-wrap: wrap;
        }
    }

    table {
        margin: 20px;
        flex-grow: 1;
        border-collapse: collapse;
        box-shadow: 0 0 3px rgba(0,0,0,0.5), 0 3px 7px rgba(0,0,0,0.3);
    }

    table thead tr th {
        font-weight: normal;
        color: black;
        padding: 5px;
        background-color: #D9D9D9;
        text-align: center;
    }

    tbody td:nth-child(1) {
        padding: 5px;
        text-align: left;
        white-space: nowrap;
        vertical-align: top;
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
        width: 100%;
        max-width: 320px;
        height: 80px;
        font-family: inherit;
        font-size: 1em;
    }

</style>
