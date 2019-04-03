<template>
    <label class="labelled-input" :for="name">
        <span>{{ label }}</span>
        <input :type="type" :value="value" @input="$emit('input', value)">
    </label>
</template>

<script>
export default {
    props: [ "name", "type", "label", "value" ]
}
</script>

<style lang="scss">

    label.labelled-input {
        margin-bottom: 10px;

        input, span {
            display:block;
        }

        span {
            font-weight: normal;
            font-size: 0.80em;
            font-family: "Roboto";
        }

        input {
            height: 30px;
            width: 200px;
            font-weight: 400;
            font-family: "Kanit";
            padding: 3px 4px;
            font-size: 1.2em;
        }
    }

</style>