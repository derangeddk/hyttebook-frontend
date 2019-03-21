const state = {
    formConfig: {
        hutName,
        showOrgType,
        showBankDetails,
        showEan,
        showCleaningToggle,
        defaultCleaningIncluded,
        showArrivalTime,
        showDepartureTime,
        stdArrivalTime,
        stdDepartureTime,
        stdInformation
    }
}

const getters = {
    formConfig: state => {
        return state.formConfig;
    },
    hutName: state => {
        return state.formConfig.hutName;
    },
    showOrgType: state => {
        return state.formConfig.showOrgType;
    }
}

const mutations = {
    setFormConfig(state, newFormConfig) {
        state.formConfig = newFormConfig;
    },
    changeFormConfigValue(state, configToChange, newValue) {
        state.formConfig[configToChange] = newValue;
    }
}

export default {
    getters,
    mutations
}