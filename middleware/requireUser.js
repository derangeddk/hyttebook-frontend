export default function({store, redirect, app}) {
    store.commit('initialiseCachedUser');

    if(!store.getters.username) {
        return redirect("/");
    }
};
