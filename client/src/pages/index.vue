<script setup lang="ts">
    import WorkoutSumnmary from "../components/WorkoutSummary.vue"
    import { getStoreUser } from "../global/users"

    const userStore = getStoreUser();
</script>

<template>
   <div class="container">
        <div class="columns">
            <div class="column is-one-quarter"></div>
                <div class="column is-half" style="margin: 20px;">
                    <WorkoutSumnmary
                    :title="'Today'"
                    :distance="0"
                    :duration="0"
                    :avgPace="0"
                    :calories="0"
                    />

                    <WorkoutSumnmary
                    :title="'This Week'"
                    :distance="0"
                    :duration="0"
                    :avgPace="0"
                    :calories="0"
                    />

                    <WorkoutSumnmary
                    :title="'All Time'"
                    :distance="0"
                    :duration="0"
                    :avgPace="0"
                    :calories="0"
                    />
                </div>
        </div>
    </div>
</template>

<style scoped>

</style>