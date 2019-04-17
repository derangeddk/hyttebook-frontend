<template>
    <div>
        Status: {{ saveStatus }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            saveStatus: "saved",
            lastSaved: "",
        }
    },
}

function getTimeStamp() {
    let timeNow = new Date(Date.now());
    return timeNow.toLocaleTimeString('da-DK');
}
</script>


