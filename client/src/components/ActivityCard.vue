<script setup lang="ts">
import { defineProps, type DefineProps } from 'vue';

const props = defineProps({
  name: String,
  username: String,
  profilePic: String,
  title: String,
  pictureURL: String,
  location: String,
  distance: Number,
  duration: Number
})
</script>

<template>
    <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{name}}</strong> <small>@{{username}}</small> <small>31m</small>
          <br>
          {{ title }} - {{ location }}
        </p>

        <div class="columns">
                <div class="column has-text-centered">
                    <div class="title"> {{ distance }} mi </div>
                    <div class="heading"> DISTANCE </div>
                </div>
                <div class="column has-text-centered">
                    <div class="title"> {{ duration }} </div>
                    <div class="heading"> DURATION </div>
                </div>
                <div class="column has-text-centered">
                  <img :src="pictureURL" alt="Image Unavailable">
                </div>
        </div>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</div>
</template>

<style scoped>

</style>