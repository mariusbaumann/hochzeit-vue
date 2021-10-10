<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row no-gutters">
        <div class="col-12">
          <Navbar />

       

          <router-view></router-view>
        </div>
      </div>
    </div><!-- Container-fluid -->
  </div>
</template>

<script>

import Navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
   
    Navbar
  }
}
</script>

<style>


</style>
