export default function({store, redirect, app}) {
    try {
        store.commit('initialiseCachedUser');
    } catch (error) {
        return redirect("/hut-management");
    }

    if(!store.getters.hutName) {
        return redirect("/hut-management");
    }
};
