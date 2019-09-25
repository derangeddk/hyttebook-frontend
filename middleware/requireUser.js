export default function({store, redirect, app}) {

    try {
        store.commit('initialiseCachedUser');
    } catch (error) {
        console.log(error);
        return redirect("/");
    }

    if(!store.getters.username) {
        return redirect("/");
    }
};
