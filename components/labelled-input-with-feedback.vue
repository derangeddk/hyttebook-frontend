<template>
    <label class="labelled-input" :for="name">
        <span>
            {{ label }}
            <span class="error-message" v-show="errorMessage">
                {{ errorMessage }}
            </span>
            <span class="guidance-message" v-show="guidanceMessage">
                {{ guidanceMessage }}
            </span>
        </span>
        <input
            v-bind:class="{correct: inputCorrectness}"
            :name="name"
            :type="type"
            :value="value"
            autocomplete="new-password"
            @input="$emit('input', $event.target.value)"
            @change="$emit('change')"
        >
    </label>
</template>

<script>
export default {
    computed: {
        inputCorrectness: function() {
            if(this.value !== "" && !this.errorMessage && !this.guidanceMessage) {
                return true;
            }
            return false;
        }
    },
    props: [ "name", "type", "label", "value", "errorMessage", "guidanceMessage" ],
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

            .guidance-message {
                display: inline;
                color: inherit;
            }
        }

        input {
            height: 30px;
            width: 250px;
            font-weight: 400;
            font-family: "Kanit";
            padding: 3px 4px;
            font-size: 1.2em;

            &.correct {
                border: 1px solid rgb(0, 179, 0);
            }
        }
    }

</style>
