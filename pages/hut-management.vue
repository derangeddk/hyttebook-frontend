<template>
    <main>
        <information-header></information-header>
        <div class="hut-container">
            <no-hut
                v-if="!registerHut && !hasHuts"
                @requestRegistration="registerHut = true">
            </no-hut>
            <hut-registration
                v-if="registerHut">
            </hut-registration>
        </div>
    </main>
</template>

<script>
    import InformationHeader from '~/components/information-header';
    import NoHut from '~/components/no-hut';
    import HutRegistration from '~/components/hut-registration';
    import { mapMutations } from "vuex";
    import axios from 'axios';

    export default {
        data() {
            return {
                hasHuts: false,
                registerHut: false,
            }
        },
        methods: {
            ...mapMutations([
                "setHutName",
                "setHutId"
            ])
        },
        async beforeCreate() {
            let headers = {
                "Content-type": "application/json"
            }

            let response;
            try {

                response = await axios.get(
                    'http://localhost:4752/huts',
                    {
                        headers,
                        withCredentials: true
                    }
                )
            } catch(error) {
                //no idea what error might pop up at this point
                console.log(error);
            }

            if(response.status == 204) return;

            //This will need to change in future. The endpoint does return a list.
            let usersHuts = response.data[0];

            if(!usersHuts) return;

            this.setHutName(usersHuts.name);
            this.setHutId(usersHuts.hut_id);

            this.$router.push("/dashboard");
        },
        components: { InformationHeader, NoHut, HutRegistration },
        middleware: "requireUser",
    }
</script>

<style lang="scss">
    div.hut-container {
        display: flex;
        flex-direction: row;
        height: 100vh;
    }
</style>
