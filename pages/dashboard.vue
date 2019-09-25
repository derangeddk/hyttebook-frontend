<template>
    <div class="dashboard-container">
        <information-header></information-header>
        <div class="dashboard-row">
            <nav class="side-nav">
                <ul>
                    <li :class="{ active: showFormConfiguration}" @click="showFormConfiguration = !showFormConfiguration">Bookingformular</li>
                    <li>Sæsoner</li>
                </ul>
            </nav>
            <showable-container :visible="showFormConfiguration">
                <form-configuration></form-configuration>
            </showable-container>
        </div>
    </div>
</template>

<script>
    import InformationHeader from "~/components/information-header";
    import FormConfiguration from "~/components/form-configuration";
    import ShowableContainer from "~/components/showable-container"

    export default {
        components: { InformationHeader, FormConfiguration, ShowableContainer },
        middleware: ["requireUser", "requireHut"],
        data() {
            return {
                showFormConfiguration: false,
            }
        }
    }
</script>

<style lang="scss">
    .dashboard-container {
        display: flex;
        flex-direction: column;
    }

    .dashboard-row {
        display: flex;
        flex-direction: row;
        min-height: 100vh;
        align-items: stretch;
    }

    .side-nav {
        max-width: 15vw;
        min-width: 200px;
        background-color: #3C6E71;
        background-image: linear-gradient(
                300deg,
                lighten(#3C6E71, 17%) 60%,
                lighten(#3C6E71, 22%)
            );

        ul {
            list-style-type: none;
            padding-left: 0;
            text-align: left;
        }

        li {
            padding: 7px 0;
            font-size: 1.2em;
            font-weight: 400;
            padding-left: 15px;

            &:hover {
                background-color: lighten(#3C6E71, 25%);
                cursor: pointer;
            }

            &.active {
                background-color: lighten(#3C6E71, 25%)
            }
        }
    }



</style>
