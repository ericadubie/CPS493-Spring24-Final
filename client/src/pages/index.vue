<script setup lang="ts">
    import { computed } from "vue"
    import WorkoutSumnmary from "../components/WorkoutSummary.vue"
    import { getStoreUser } from "../global/users"
    import { getActivities } from "../model/activity"
    import { isToday, isThisWeek, parseISO } from "date-fns";

    const userStore = getStoreUser();

    const activities = getActivities();

    // Utility Functions
    function parseDuration(duration: string) {
        const [hours, minutes] = duration.split(":").map(Number);
        return hours * 60 + minutes;
    }
    // Computed Properties
    function formatDuration(totalMinutes: number) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
            2,
            "0"
        )}`;
    }

    // Filters for Day and Week
    const todayActivities = activities.filter((activity) =>
        isToday(parseISO(activity.date))
    );
    const thisWeekActivities = activities.filter((activity) =>
        isThisWeek(parseISO(activity.date), { weekStartsOn: 1 })
    );

    // Computed Properties for All Time
    const totalDistanceAllTime = computed(() =>
        activities.reduce((acc, activity) => acc + activity.distance, 0)
    );
    const totalDurationMinutesAllTime = computed(() =>
        activities.reduce(
            (sum, activity) => sum + parseDuration(activity.duration),
            0
         )
    );
    const totalCaloriesAllTime = computed(() =>
        activities.reduce(
            (total, activity) =>
            total + activity.distance * 100 + parseDuration(activity.duration) * 2,
            0
        )
    );

    // Computed Properties for Today
    const totalDistanceToday = computed(() =>
        todayActivities.reduce((acc, activity) => acc + activity.distance, 0)
    );
    const totalDurationMinutesToday = computed(() =>
        todayActivities.reduce(
            (sum, activity) => sum + parseDuration(activity.duration),
            0
        )
    );
    const totalCaloriesToday = computed(() =>
        todayActivities.reduce(
            (total, activity) =>
            total + activity.distance * 100 + parseDuration(activity.duration) * 2,
            0
        )
    );

    // Computed Properties for This Week
    const totalDistanceThisWeek = computed(() =>
        thisWeekActivities.reduce((acc, activity) => acc + activity.distance, 0)
    );
    const totalDurationMinutesThisWeek = computed(() =>
        thisWeekActivities.reduce(
            (sum, activity) => sum + parseDuration(activity.duration),
            0
        )
    );
    const totalCaloriesThisWeek = computed(() =>
        thisWeekActivities.reduce(
            (total, activity) =>
            total + activity.distance * 100 + parseDuration(activity.duration) * 2,
            0
        )
    );

    // Calculate the average pace
    const avgPace = (durationMinutes: number, distance: number) => {
        const hours = durationMinutes / 60;
        return Number((distance / hours).toFixed(2));
    };

</script>

<template>
   <div class="container">
        <div class="columns">
            <div class="column is-one-quarter"></div>
                <div class="column is-half" style="margin: 20px;">
                    <WorkoutSumnmary
                    title="Today"
                    :distance="totalDistanceToday"
                    :duration="formatDuration(totalDurationMinutesToday)"
                    :avgPace="avgPace(totalDurationMinutesToday, totalDistanceToday)"
                    :calories="totalCaloriesToday"
                    />

                    <WorkoutSumnmary
                    :title="'This Week'"
                    :distance="totalDistanceThisWeek"
                    :duration="formatDuration(totalDurationMinutesThisWeek)"
                    :avgPace="avgPace(totalDurationMinutesThisWeek, totalDistanceThisWeek)"
                    :calories="totalCaloriesThisWeek"
                    />

                    <WorkoutSumnmary
                    title="All Time"
                    :distance="totalDistanceAllTime"
                    :duration="formatDuration(totalDurationMinutesAllTime)"
                    :avgPace="avgPace(totalDurationMinutesAllTime, totalDistanceAllTime)"
                    :calories="totalCaloriesAllTime"
                    />
                </div>
        </div>
    </div>
    <div class="column is-one-quarter"></div>
</template>

<style scoped>

</style>