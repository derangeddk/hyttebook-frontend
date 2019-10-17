export default function({store, redirect, app}) {
    if(!store.getters.hutName) {
        return redirect("/hut-management");
    }
};
