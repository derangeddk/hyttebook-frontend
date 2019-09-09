<template>
    <div>
        <information-header></information-header>
    </div>
</template>

<script>
import InformationHeader from "~/components/information-header";
export default {
    components: { InformationHeader },
    middleware: ["requireUser", "requireHut"],
}
</script>
