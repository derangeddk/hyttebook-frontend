<template>
    <label class="labelled-input" :for="name">
        <span>
            {{ label }}
            <span class="error-message" v-show="errorMessage">
                {{ errorMessage }}
            </span>
        </span>
        <input :name="name" :type="type" :value="value" autocomplete="new-password" @input="$emit('input', $event.target.value)" @change="$emit('change')">
    </label>
</template>

<script>
export default {
    props: [ "name", "type", "label", "value", "errorMessage" ],
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
            font-size: 0.95em;
            font-family: "Roboto";

            .error-message {
                display: inline;
                color: red;
            }
        }

        input {
            height: 30px;
            width: 250px;
            font-weight: 400;
            font-family: "Kanit";
            padding: 3px 4px;
            font-size: 1.2em;
        }
    }

</style>