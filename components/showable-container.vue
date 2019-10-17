<template>
    <div :class="'showable-container' + (visible ? ' showable-container-visible' : '')">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ["visible"],
}
</script>

<style lang="scss">
    .showable-container {
        display: flex;
        flex-direction: column;
        width: 0;
        overflow: hidden;
        flex-grow: 0;
        transition: width 0.4s;
        justify-content: center;
        align-items: center;
    }

    .showable-container-visible {
        width: 100vw;
    }
</style>
