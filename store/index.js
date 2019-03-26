import Axios from 'axios';

const state = () => ({
    formConfig: {
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
});

const getters = {
    hutName: state => {
        return state.formConfig.hutName;
    },
    showOrgType: state => {
        return state.formConfig.showOrgType;
    },
    showBankDetails: state => {
        return state.formConfig.showBankDetails;
    },
    showEan: state => {
        return state.formConfig.showEan;
    },
    showCleaningToggle: state => {
        return state.formConfig.showCleaningToggle;
    },
    defaultCleaningIncluded: state => {
        return state.formConfig.defaultCleaningIncluded;
    },
    showArrivalTime: state => {
        return state.formConfig.showArrivalTime;
    },
    showDepartureTime: state => {
        return state.formConfig.showDepartureTime;
    },
    stdArrivalTime: state => {
        return state.formConfig.stdArrivalTime;
    },
    stdDepartureTime: state => {
        return state.formConfig.stdDepartureTime;
    },
    stdInformation: state => {
        return state.formConfig.stdInformation;
    }
}

const mutations = {
    showOrgType: state => {
        state.formConfig.showOrgType = !state.formConfig.showOrgType;
    },
    showBankDetails: state => {
        state.formConfig.showBankDetails = !state.formConfig.showBankDetails;
    },
    showEan: state => {
        state.formConfig.showEan = !state.formConfig.showEan;
    },
    showCleaningToggle: state => {
        state.formConfig.showCleaningToggle = !state.formConfig.showCleaningToggle;
    },
    defaultCleaningIncluded: state => {
        state.formConfig.defaultCleaningIncluded = !state.formConfig.defaultCleaningIncluded;
    },
    showArrivalTime: state => {
        state.formConfig.showArrivalTime = !state.formConfig.showArrivalTime;
    },
    showDepartureTime: state => {
        state.formConfig.showDepartureTime = !state.formConfig.showDepartureTime;
    },
    stdArrivalTime: (state, newValue) => {
        state.formConfig.stdArrivalTime = newValue;
    },
    stdDepartureTime: (state, newValue) => {
        state.formConfig.stdDepartureTime = newValue;
    },
    stdInformation: (state, newValue) => {
        state.formConfig.stdInformation = newValue;
    }
}

const actions = {
    persistFormConfig: async (context, payload) => {
        console.log(payload);
        Axios.post("/form-config", payload, {
            baseURL: 'https://localhost:5000',
            params: {
                ID: 1
            },
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}