<script setup lang="ts">
    const props = defineProps<{
    distance: number;
    duration: number;
    avgPace: number;
    calories: number;
}>();

</script>

<template>
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-half media">
                <div class="box summary" style="margin: 5px;">
                    <h2 class="title" style="text-align: center;"> Today </h2>
                    <div class="columns">
                        <div class="column is-multiline">
                            <div class="column is-half">
                                <h3 class="value">{{ distance }}</h3>
                                <caption class="caption">
                                Distance
                                </caption>
                            </div>
                            <div class="column is-half">
                                <h3 class="value">{{ duration }}</h3>
                                <caption class="caption">
                                Duration
                                </caption>
                            </div>
                            <div class="column is-half">
                                <h3 class="value">{{ avgPace }}</h3>
                                <caption class="caption">
                                Avg Pace
                                </caption>
                            </div>
                            <div class="column is-half">
                                <h3 class="value">{{ calories }}</h3>
                                <caption class="caption">
                                Calories
                                </caption>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box" style="margin: 5px;">
                    hey
                </div>
                <div class="box" style="margin: 5px;">
                    hey
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>