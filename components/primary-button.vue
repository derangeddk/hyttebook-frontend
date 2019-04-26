<template>
    <button :type="type" class="primary-button" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: [ "type" ]
}
</script>

<style lang="scss">

.primary-button {
    background-color: lighten(#3C6E71, 20%);
    color:black;
    padding: 20px;
    margin: 0.9em 0;
    width: 250px;
    border: none;
    font-size: 1em;
    font-family: "Kanit";
    cursor: pointer;
    transition: background-color 200ms;

    &:hover {
        background-color: lighten(#3C6E71, 15%);
    }
}
</style>
