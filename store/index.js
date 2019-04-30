import axios from 'axios';

const state = () => ({
    timer: 0,
    formState: "",
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
        email: "",
        fullName: ""
    }
});

const getters = {
    hutName: state => {
        return state.user.hutName;
    },
    username: state => {
        return state.user.username;
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
    formState: state => {
        return state.formState;
    }
}

const mutations = {
    setUser: (state, user) => {
        state.user.username = user.username;
        state.user.hutName = user.hutName;
        state.user.email = user.email;
        state.user.fullName = user.fullName;
    },
    setUsername: (state, username) => {
        state.user.username = username;
    },
    setHutName: (state, hutName) => {
        state.user.hutName = hutName;
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
    setFormState: (state, status) => {
        state.formState = status;
    }
}

const actions = {
    timeoutFormConfigSave: async (context, payload) => {
        clearTimeout(state.timer);
        state.timer = setTimeout(() => {
            try {
                saveForm(payload, context);
            } catch(e) {
                console.log(e);
            }
        }, 600);
    },
    instantSaveFormConfig: async (context, payload) => {
        try {
            saveForm(payload, context);
        } catch(e) {
            console.log(e);
        }
    }

}

export default {
    state,
    getters,
    mutations,
    actions
}

async function saveForm(payload, context) {
    let headers = {
        'Content-type': 'application/json'
    }

    context.commit("setFormState", "saving");
    try {
        await axios.post("http://localhost:4752/forms", payload, { headers });
    } catch(error) {
        console.error("failed to create form: ", error);
        return;
    }

    //The timeout is there to ensure that the user has a chance to see the "saving" message.
    //It will hopefully build up the users trust in the autosave functionality.
    //The timeout should probably be removed when the site goes live
    setTimeout(() => {
        context.commit("setFormState", "saved");
    }, 800);


}