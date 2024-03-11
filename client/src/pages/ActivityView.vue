<script setup lang="ts">
import ActivityCard from '../components/ActivityCard.vue'
import { type User, getUsers } from '../model/users'
import { ref } from 'vue'

const users = ref([] as User[])

users.value = getUsers()

let isVisible = ref(false)

function toggleForm() {
    isVisible.value = !isVisible.value
}

const workout = ref({
    title: "",
    date: "",
    duration: "",
    location: "",
    picture: "",
    type: "",
})

function addWorkout() {
    users.value.unshift({
        name: "EXAMPLE",
        username: "EXAMPLE",
        profilePic: "EXAMPLE",
        title: workout.value.title,
        pictureURL: workout.value.picture,
        location: workout.value.location,
        distance: "0",
        duration: workout.value.duration ,
        timePosted: "Just now" 
    })

    workout.value = {
        title: "",
        date: "",
        duration: "",
        location: "",
        picture: "",
        type: ""
    }

    toggleForm()
}

</script>

<template>
    <div class="container">
        <h1 class="title">My Activity</h1>
        <div class="columns is-centered">
            <div class="column is-half media">
                <button @click="toggleForm" class="button is-primary is-fullwidth">Add Workout</button>
                <form>
                    <div class="modal is-active" v-show="isVisible">
                        <div class="modal-background"></div>
                            <div class="modal-card">
                                <header class="modal-card-head">
                                    <p class="modal-card-title">Add a Workout</p>
                                    <button @click.prevent="toggleForm" class="delete" aria-label="close"></button>
                                </header>
                                <section class="modal-card-body">
                                    <div class="field">
                                        <label class="label">Title</label>
                                        <div class="control">
                                            <input class="input" v-model="workout.title" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Date</label>
                                        <div class="control">
                                            <input class="input" v-model="workout.date" type="date" placeholder="">
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Duration</label>
                                        <div class="control">
                                            <input class="input" v-model="workout.duration" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Location</label>
                                        <div class="control">
                                            <input class="input" v-model="workout.location" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Picture</label>
                                        <div class="control">
                                            <input class="input" v-model="workout.picture" type="text" placeholder="">
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Type</label>
                                        <div class="control">
                                            <div class="select is-fullwidth">
                                                <select v-model="workout.type">
                                                    <option selected disabled hidden></option>
                                                    <option>Run</option>
                                                    <option>Bike</option>
                                                    <option>Walk</option>
                                                    <option>Cardio</option>
                                                    <option>Strength</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <footer class="modal-card-foot">
                                    <button @click.prevent="addWorkout" class="button is-success">Save changes</button>
                                    <button @click.prevent="toggleForm" class="button">Cancel</button>
                                </footer>
                            </div>
                    </div>
                </form>

                        <div v-for="(user, index) in users" :key="index">
                            <ActivityCard 
                                :name= 'user.name'
                                :username= 'user.username'
                                :location= 'user.location'
                                :duration= 'user.duration' 
                                :distance= 'user.distance'
                                :title= 'user.title'
                                :pictureURL= 'user.pictureURL'
                                :profilePic= 'user.profilePic' 
                                :timePosted="user.timePosted"/>
                        </div>
                    </div>
        </div>
    </div>
</template>

<style scoped>

</style>