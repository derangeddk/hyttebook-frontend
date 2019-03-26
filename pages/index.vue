<template>
    <main>
        <information-header></information-header>
        <div class="main-content">
            <div class="rent-form-interface-container">
                <state-status-indicator></state-status-indicator>
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
                                        <input type="checkbox" @change="toggleShowOrgType" :checked="showOrgType">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Lad lejere indtaste bankoplysinger</td>
                                <td>
                                    <label>
                                        <input type="checkbox" @change="toggleShowBankDetails" :checked="showBankDetails">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Lad lejere indtaste EAN nummer</td>
                                <td>
                                    <label>
                                        <input type="checkbox" @change="toggleShowEan" :checked="showEan">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Vis "Rengøring"</td>
                                <td>
                                    <label>
                                        <input type="checkbox" @change="toggleShowCleaningToggle" :checked="showCleaningToggle">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Standardværdi for "Rengøring"</td>
                                <td>
                                    <label>
                                        <input type="checkbox" @change="toggleDefaultCleaningIncluded" :checked="defaultCleaningIncluded">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Vis "Ankomst tidspukt"</td>
                                <td>
                                    <label>
                                        <input type="checkbox" @change="toggleShowArrivalTime" :checked="showArrivalTime">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Standard ankomst tid</td>
                                <td>
                                    <label>
                                        <input type="time" @input="setStdArrivalTime($event.target.value)" :value="stdArrivalTime">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Vis "Afrejse tidspukt"</td>
                                <td>
                                    <label>
                                        <input type="checkbox" @change="toggleShowDepartureTime" :checked="showDepartureTime">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Standard afrejse tid</td>
                                <td>
                                    <label>
                                        <input type="time" @input="setStdDepartureTime($event.target.value)" :value="stdDepartureTime">
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>Generel information</td>
                                <td>
                                    <label>
                                        <textarea @input="setStdInformation($event.target.value)" :value="stdInformation"></textarea>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <form-preview></form-preview>
                </section>

                <button type="submit" class="submit-button">Gem</button>
            </div>
        </div>
        <footer>&copy; 8ISH</footer>
    </main>
</template>

<script>
    import InformationHeader from '~/components/information-header';
    import StateStatusIndicator from '~/components/state-status-indicator';
    import FormPreview from '~/components/form-preview';
    import { mapMutations, mapGetters } from 'vuex';

    export default {
        head: {
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        },
        data() {
            return {

            }
        },
        methods: {
            ...mapMutations({
                toggleShowOrgType: 'showOrgType',
                toggleShowBankDetails: 'showBankDetails',
                toggleShowEan: 'showEan',
                toggleShowCleaningToggle: 'showCleaningToggle',
                toggleDefaultCleaningIncluded: 'defaultCleaningIncluded',
                toggleShowArrivalTime: 'showArrivalTime',
                toggleShowDepartureTime: 'showDepartureTime',
                setStdArrivalTime: 'stdArrivalTime',
                setStdDepartureTime: 'stdDepartureTime',
                setStdInformation: 'stdInformation'
            }),
        },
        computed: {
            ...mapGetters([
                'showOrgType',
                'showBankDetails',
                'showEan',
                'showCleaningToggle',
                'defaultCleaningIncluded',
                'showArrivalTime',
                'showDepartureTime',
                'stdArrivalTime',
                'stdDepartureTime',
                'stdInformation'
            ])
        },
        mounted() {
            this.$store.subscribe((mutation, state) => {
                this.$store.dispatch('persistFormConfig', state.formConfig);
            });
        },
        components: { InformationHeader, FormPreview, StateStatusIndicator }
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
        width: 96%;
        max-width: 320px;
        height: 80px;
        font-family: inherit;
        font-size: 1em;
    }

    .submit-button {
        background-color: lighten(#3C6E71, 20%);
        color:black;
        width: 30%;
        padding: 20px;
        margin: 0.9em 0;
        border: none;
        font-size: 1em;
        font-family: inherit;
        cursor: pointer;
        transition: background-color 200ms;
    }

    .submit-button:hover {
        background-color: lighten(#3C6E71, 15%);
    }

</style>
