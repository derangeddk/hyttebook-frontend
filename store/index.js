import axios from 'axios';

const state = () => ({
    formConfig: {
        showOrgType: false,
        showBankDetails: false,
        showEan: false,
        showCleaningToggle: false,
        defaultCleaningIncluded: false,
        showArrivalTime: false,
        showDepartureTime: false,
        stdArrivalTime: "",
        stdDepartureTime: "",
        stdInformation: ""
    },
    user: {
        username: "",
        hutName: "",
        hutId: "",
    },
});

const getters = {
    hutName: state => {
        if(state.user.hutName) return state.user.hutName;
    },
    hutId: state => {
        if(state.user.hutId) return state.user.hutId;
    },
    username: state => {
        if(state.user.username) return state.user.username;
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
    },
}

const mutations = {
    setUser: (state, user) => {
        state.user.username = user.username;
    },
    setFormConfig: (state, formConfig) => {
        state.formConfig = formConfig;
    },
    setUsername: (state, username) => {
        state.user.username = username;
    },
    setHutName: (state, hutName) => {
        state.user.hutName = hutName;
    },
    setHutId: (state, hutId) => {
        state.user.hutId = hutId;
    },
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
    stdInformation: (state, text) => {
        state.formConfig.stdInformation = text;
    },
}

const actions = {
    async getHutsFormConfigs ({ state, commit }) {
        let headers = {
            'Content-type': 'application/json'
        }

        let result;
        try {
            result = await axios.get(
                `http://localhost:4752/forms/${state.user.hutId}`,
                {
                    headers,
                    withCredentials: true
                }
            );
        } catch(error) {
            console.error("failed to create form: ", error);
            return;
        }
        commit('setFormConfig', result.data);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
