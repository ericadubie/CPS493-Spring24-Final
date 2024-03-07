<script setup lang="ts">
import ActivityCard from '../components/ActivityCard.vue'

</script>

<template>
    <div class="container">
        <h1 class="title">My Activity</h1>
        <div class="columns is-centered">
            <div class="column is-half media">
                <button class="button is-primary is-fullwidth">Add Workout</button>
                <ActivityCard 
                    name="Erica Dubie" 
                    username="edubz" 
                    location="SUNY New Paltz" 
                    duration="10" 
                    distance="5"
                    title="Just went to a spin class"
                    pictureURL="https://bulma.io/images/placeholders/128x128.png" />
                <ActivityCard />
                <ActivityCard />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>