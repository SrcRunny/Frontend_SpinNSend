<script setup lang="ts">
import Laundrystation from '@/views/LaundryStation.vue'
import HomePage from './views/HomePage.vue'
</script>
<template>
  <section id="Navbar" class="fixed top-0 w-full z-50">
    <div class="navbar bg-base-100 " :style="{ backgroundColor: 'rgba(255, 255, 255, 0)' }">
      <div class="navbar-start">
        <a class="btn btn-ghost text-2xl">daisyUI</a>
      </div>
      <div class="navbar-end">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-70 right-0 left-auto"
          >
            <router-link to="/"
              ><li><a>Homepage</a></li></router-link
            >
            <router-link to="/laundrystation"
              ><li><a>Laundry Station</a></li></router-link
            >
            <li><a>Delivery</a></li>
            <li><a>Contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <RouterView></RouterView>
</template>

<style>
</style>