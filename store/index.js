import axios from 'axios';

const state = () => ({
    formConfig: {
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
    },
    user: {
        username: "",
        hutName: "",
        hutId: "",
    }
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
    initialiseCachedUser: (state) => {
        if(!process.server) {
            let user = JSON.parse(localStorage.getItem("user"));
            if(user.username) {
                state.user = user;
            }
        }
    },
    setUser: (state, user) => {
        state.user.username = user.username;
        state.user.email = user.email;
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

export default {
    state,
    getters,
    mutations
}
