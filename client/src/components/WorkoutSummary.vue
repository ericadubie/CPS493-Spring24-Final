<script setup lang="ts">
const props = defineProps<{
    title: string;
    distance: number;
    duration?: number | string;
    avgPace: number;
    calories: number;
}>();
</script>

<template>
    <div class="box has-text-centered has-text-success summary">
        <h2 class="title is-3">{{ title }}</h2>
        <div class="columns is-mobile is-multiline is-centered">
            <div class="column is-half-mobile">
                <p class="value">{{ distance }} km</p>
                <p class="caption"><span class="icon is-small"><i class="fas fa-road"></i></span> Distance</p>
                <p class="value">{{ avgPace ? avgPace : 0 }} mph</p>
                <p class="caption"><span class="icon is-small"><i class="fas fa-tachometer-alt"></i></span> Avg Pace</p>
            </div>
            <div class="column is-half-mobile">
                <p class="value">{{ duration }} </p>
                <p class="caption"><span class="icon is-small"><i class="fas fa-hourglass-half"></i></span> Duration</p>
                <p class="value">{{ calories }}</p>
                <p class="caption"><span class="icon is-small"><i class="fas fa-fire"></i></span> Calories</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.summary {
  background-color: #f0fbf8;
  border-left: 5px solid var(--bulma-primary, #00d1b2);
  padding: 1.5rem;
}

.summary:hover {
  background-color: #bdffec; 
  transition: background-color 0.3s ease; 
}

.summary .caption {
  color: #48746c;
}

.summary .value {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem; 
}
.summary .caption {
  font-size: 1rem; 
  margin-bottom: 1.5rem; 
}

.summary .caption .icon {
  margin-right: 0.5rem;
}

</style>