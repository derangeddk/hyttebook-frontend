<template>
    <main>
        <information-header></information-header>
        <div class="hut-container">
            <no-hut v-if="!registerHut && !hasHuts" @requestRegistration="registerHut = true"></no-hut>
            <hut-registration v-if="registerHut"></hut-registration>
        </div>
    </main>
</template>

<script>
    import InformationHeader from '~/components/information-header';
    import NoHut from '~/components/no-hut';
    import HutRegistration from '~/components/hut-registration';

    export default {
        data() {
            return {
                hasHuts: false,
                registerHut: false,
            }
        },
        components: { InformationHeader, NoHut, HutRegistration }
    }
</script>

<style lang="scss">
    div.hut-container {
        display: flex;
        flex-direction: row;
        height: 100vh;
    }
</style>
