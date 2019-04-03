<template>
    <button class="secondary-button" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<style lang="scss">

.secondary-button {
    border: 1px solid lighten(#3C6E71, 20%);
    color: lighten(#3C6E71, 20%);
    background-color: transparent;
    width: 200px;
    padding: 10px;
    margin-top: 60px;
    transition: border 0.4s, color 0.4s;
    cursor: pointer;

    &:hover {
        border: 1px solid darken(#3C6E71, 5%);
        color: darken(#3C6E71, 5%);
    }
}
</style>