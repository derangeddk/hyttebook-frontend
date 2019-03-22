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
    setFormConfig(state, newFormConfig) {
        state.formConfig = newFormConfig;
    },
    changeFormConfigValue(state, {config, value: newValue}) {
        state.formConfig[config] = newValue;
    }
}

export default {
    state,
    getters,
    mutations
}