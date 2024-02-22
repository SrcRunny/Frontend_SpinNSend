<script setup lang="ts">
import HomepageCarousel from '@/components/HomepageCarousel.vue'
</script>
<template>
    <div class="body">
      <HomepageCarousel></HomepageCarousel>
    </div>
    <div class="full-screen-image">
      <img src="https://cdn.thewirecutter.com/wp-content/media/2021/04/52things-2048px-8670-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024" alt="">
    </div>
  </template>
  
  <style scoped>
  .full-screen-image {
    width: 100%;
    height: 100vh; /* Set height to 100% of the viewport height */
  }
  
  .full-screen-image img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio while covering the container */
  }
  </style>