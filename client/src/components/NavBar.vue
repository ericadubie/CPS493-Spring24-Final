<script setup lang="ts">
import { ref, computed } from 'vue';
import { getStoreUser } from '../global/users'

const storeUser = getStoreUser()
const users = storeUser.users

let isActive = ref(false);
let isDropdown = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}

function toggleDropdown() {
  isDropdown.value = !isDropdown.value;
}

const loggedInUser = computed(() => {
  return storeUser.showLogin();
  console.log("Logged In User: ", loggedInUser);
});


const isAdmin = computed(() => {
  return loggedInUser.value?.isAdmin;
});

</script>

<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <RouterLink to="/" class="navbar-item"> 
                    <img src="../assets/logo.svg" width="112" height="28">
                </RouterLink>
                

                <a role="button" @click="toggleMenu" :class="{ 'is-active': isActive }" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" :class=" { 'is-active': isActive } " class="navbar-menu">
                <div class="navbar-start">
                    <RouterLink to="/activity" class="navbar-item" v-if="storeUser.showLogin() !== undefined"> 
                        <span class="icon is-small"><i class="fas fa-running"></i></span>
                        My Activity
                    </RouterLink>

                    <RouterLink to="/login" class="navbar-item" v-else> 
                        <span class="icon is-small"><i class="fas fa-running"></i></span>
                        My Activity
                    </RouterLink>

                    <RouterLink to="/statistics" class="navbar-item"> 
                        <span class="icon is-small"><i class="fas fa-chart-line"></i></span>
                        Statistics
                    </RouterLink>

                    <RouterLink to="/friends" class="navbar-item"> 
                        <span class="icon is-small"><i class="fas fa-users"></i></span>
                        Friends
                    </RouterLink>

                    <RouterLink to="/search" class="navbar-item"> 
                        <span class="icon is-small"><i class="fas fa-search"></i></span>
                        Search
                    </RouterLink>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Admin
                        </a>

                        <div class="navbar-dropdown">
                            <RouterLink to="/login" class="navbar-item" v-if="storeUser.showLogin() === undefined || !isAdmin"> 
                                Users
                            </RouterLink>
                            <RouterLink to="/users" class="navbar-item" v-else> 
                                Users
                            </RouterLink>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <RouterLink to="/signup" class="button is-primary" v-if="storeUser.showLogin() === undefined">
                                <strong>Sign up</strong>
                            </RouterLink> 

                            <div class="user-info" v-else>
                                <figure class="image is-48x48" style="margin-right: 8px;">
                                    <img :src=" storeUser.showLogin()?.profilePic || 'default-profile.png'">
                                </figure>
                                <strong>{{ storeUser.showLogin()?.name }}</strong>
                            </div>

                            <div class="dropdown" :class=" { 'is-active': isDropdown }" v-if="storeUser.showLogin() === undefined">
                                <div class="dropdown-trigger" @click="toggleDropdown">
                                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" style="margin-right: 8px">
                                    <span> Log in</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                    </button>
                                </div>
                                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                    <a href="#" class="dropdown-item" v-for="(user, index) in users" @click.prevent="storeUser.userLogin(user.username)">
                                        {{ user.name }}
                                    </a>
                                    <hr class="dropdown-divider" />
                                        <RouterLink to="/login" class="dropdown-item"> Other Account </RouterLink>
                                    </div>
                                </div>
                            </div>
                            <div @click="storeUser.userLogout()" class="button is-primary is-light" v-else>
                                <span>Log out</span>
                            </div>
                            
                            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                                <span class="icon">
                                    <i class="fab fa-twitter"></i>
                                </span>
                                <span>
                                    Tweet
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.user-info {
    display: flex;
    align-items: center;
    margin-right: 15px;
    margin-bottom: 5px;
}

.image.is-48x48 img {
    height: 48px; /* Adjust the height to match the width for a square appearance */
    width: 48px;
    object-fit: cover;
    border-radius: 5%;
    max-height: max-content;
}

.navbar-item .icon {
  margin-right: 0.25rem; /* Increase the right margin */
}

</style>