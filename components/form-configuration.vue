<template>
    <div class="main-columns">
        <div class="main-content">
                <div class="rent-form-interface-container">
                    <div class="main-header">
                        <div class="page-header">
                            <h1>Tilpas Bookingformular</h1>
                            <h2>Her konfigureres leje forspørgsel på din hytte</h2>
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
                                            <input
                                                type="checkbox"
                                                @change="toggleShowOrgType"
                                                :checked="showOrgType"
                                            >
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lad lejere indtaste bankoplysinger</td>
                                    <td>
                                        <label>
                                            <input
                                                type="checkbox"
                                                @change="toggleShowBankDetails"
                                                :checked="showBankDetails"
                                            >
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Lad lejere indtaste EAN nummer</td>
                                    <td>
                                        <label>
                                            <input
                                                type="checkbox"
                                                @change="toggleShowEan"
                                                :checked="showEan"
                                            >
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Vis "Rengøring"</td>
                                    <td>
                                        <label>
                                            <input
                                                type="checkbox"
                                                @change="toggleShowCleaningToggle"
                                                :checked="showCleaningToggle"
                                            >
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Standardværdi for "Rengøring"</td>
                                    <td>
                                        <label>
                                            <input
                                                type="checkbox"
                                                @change="toggleDefaultCleaningIncluded"
                                                :checked="defaultCleaningIncluded"
                                            >
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Vis "Ankomst tidspukt"</td>
                                    <td>
                                        <label>
                                            <input
                                                type="checkbox"
                                                @change="toggleShowArrivalTime"
                                                :checked="showArrivalTime"
                                            >
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Standard ankomst tid</td>
                                    <td>
                                        <label>
                                            <input
                                                type="time"
                                                @input="setStdArrivalTime($event.target.value)"
                                                :value="stdArrivalTime"
                                            >
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Vis "Afrejse tidspukt"</td>
                                    <td>
                                        <label>
                                            <input
                                                type="checkbox"
                                                @change="toggleShowDepartureTime"
                                                :checked="showDepartureTime"
                                            >
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Standard afrejse tid</td>
                                    <td>
                                        <label>
                                            <input
                                                type="time"
                                                @input="setStdDepartureTime($event.target.value)"
                                                :value="stdDepartureTime"
                                            >
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Generel information</td>
                                    <td>
                                        <label>
                                            <textarea
                                                @input="setStdInformation($event.target.value)"
                                                :value="stdInformation">
                                            </textarea>
                                        </label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <form-preview></form-preview>
                    </section>

                    <button @click="save();" type="submit" class="submit-button">
                        Gem
                    </button>
                </div>
        </div>
    </div>
</template>

<script>
    import FormPreview from '~/components/form-preview';
    import axios from 'axios';
    import { mapMutations, mapGetters } from 'vuex';

    export default {
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
                setStdInformation: 'stdInformation',
            }),
            async save() {
                let headers = {
                    'Content-type': 'application/json'
                }

                let payload = this.$store.state.formConfig;
                let hutId = this.$store.state.user.hutId;
                try {
                    axios.defaults.withCredentials = true;
                    await axios.put(`http://localhost:4752/forms/${hutId}`, payload, { headers });
                } catch(error) {
                    console.error("failed to create form: ", error);
                    return;
                }
            },
        },
        computed: {
            ...mapGetters([
                'hutName',
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
            ]),
        },
        created() {
            this.$store.dispatch('getHutsFormConfigs');
        },
        components: { FormPreview },
        middleware: "requireUser",
    }
</script>

<style lang="scss">



    .main-columns {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .main-content {
        display: flex;
        flex-direction: row;
        width: 90vw;
    }

    .page-header h1 {
        margin-top: 80px;
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
