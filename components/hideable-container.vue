<template>
    <div :class="'hideable-container' + (visible ? ' hideable-container-visible' : '')">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ["visible"],
}
</script>

<style lang="scss">
    .hideable-container {
        display: flex;
        flex-direction: column;
        width: 0;
        overflow: hidden;
        flex-grow: 0;
        transition: width 0.4s;
        justify-content: center;
        align-items: center;
    }

    .hideable-container-visible {
        width: 50vw;
    }
</style>
