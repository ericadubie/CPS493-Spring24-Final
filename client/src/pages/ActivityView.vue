<script setup lang="ts">
import ActivityCard from '../components/ActivityCard.vue'
import { type User, getUsers } from '../model/users'
import { ref } from 'vue'

const users = ref([] as User[])

users.value = getUsers()

</script>

<template>
    <div class="container">
        <h1 class="title">My Activity</h1>
        <div class="columns is-centered">
            <div class="column is-half media">
                <button class="button is-primary is-fullwidth">Add Workout</button>
                <div v-for="(user, index) in users" :key="index">
                    <ActivityCard 
                        :name= 'user.name'
                        :username= 'user.username'
                        :location= 'user.location'
                        :duration= 'user.duration' 
                        :distance= 'user.distance'
                        :title= 'user.title'
                        :pictureURL= 'user.pictureURL'
                        :profilePic= 'user.profilePic' />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>