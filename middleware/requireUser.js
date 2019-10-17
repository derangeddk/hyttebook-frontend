export default function({store, redirect, app}) {
    if(!store.getters.username) {
        return redirect("/");
    }
};
