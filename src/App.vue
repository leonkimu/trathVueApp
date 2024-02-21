<script setup>
import Navbar from './components/Navbar.vue'
import footer from './components/footer.vue'
</script>

<template>
  <v-app>
    <Navbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <footer/>
  </v-app>
</template>