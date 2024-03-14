<script setup lang="ts">
import { defineProps, type DefineProps } from 'vue'
import { ref } from 'vue'

let isVisible = ref(true)

function toggleVisiblity() {
  isVisible.value = !isVisible.value
}

const props = defineProps<{
  name: string;
  username: string;
  profilePic: string | undefined;
  title: string;
  distance: number;
  duration: string;
  location: string;
  pictureURL: string;
  timePosted: string;
}>();
</script>

<template>
    <div class="box" v-show="isVisible">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img :src="profilePic" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ name }}</strong> <small>@{{username}}</small> <small>{{timePosted}}</small>
          <br>
          {{ title }} - {{ location }}
        </p>

        <div class="columns">
                <div class="column has-text-centered">
                    <div class="title"> {{ distance }} mi </div>
                    <div class="heading"> DISTANCE </div>
                </div>
                <div class="column has-text-centered">
                    <div class="title">{{ duration ? duration : "00:00" }}</div>
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
    <div class="media-right">
      <button @click="toggleVisiblity" class="delete"></button>
    </div>

  </article>
</div>
</template>

<style scoped>

</style>