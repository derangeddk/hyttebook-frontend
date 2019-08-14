<template>
    <main>
        <information-header></information-header>
        <div class="hut-price-container">
            <hut-price></hut-price>
        </div>
    </main>
</template>

<script>
    import InformationHeader from '~/components/information-header';
    import HutPrice from '~/components/hut-price';

    export default {
        data() {
            return {
            }
        },
        components: { InformationHeader, HutPrice }
    }
</script>

<style lang="scss">
    div.hut-price-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
</style>
