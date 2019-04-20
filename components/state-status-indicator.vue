<template>
    <div>
        Status: {{ saveStatus }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            saveStatus: 'formState'
        })
    },

}
</script>


