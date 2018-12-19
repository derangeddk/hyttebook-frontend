<template>
    <label class="labelled-input-field">
        <span>{{ label }}</span>
        <input type="text" :placeholder="placeholder" :value="value" @input="onValueChange" :required="required">
    </label>
</template>

<script>
export default {
    props: ["label", "placeholder", "value", "required"],
    methods: {
        onValueChange(event) {
            this.$emit("input", event.target.value);
        }
    }
};
</script>

<style>
.labelled-input-field input {
    font-family: inherit;
}
</style>