export default function({store, redirect, app}) {
    store.commit('initialiseCachedUser');

    if(!store.getters.hutName) {
        return redirect("/hut-management");
    }
};
