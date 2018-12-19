<template>
    <label class="labelled-input-field">
        <span>
            {{ label }}
            <span class="labelled-input-field-required" v-if="typeof required !== 'undefined'">(påkrævet)</span>
        </span>
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
.labelled-input-field-required {
    font-size: 0.7em;
}
</style>