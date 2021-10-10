<template>
  <div class="comp-navbar">
    <b-navbar toggleable="lg" type="light" class="cust-nav">
      <a href="/"><img src="../assets/logo.png" class="brand-img" alt="Kitten"></a>
    <b-navbar-brand href="#"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#/ort">Trauung</b-nav-item>
        <b-nav-item href="#/anmeldung">Anmeldung</b-nav-item>
        <b-nav-item href="#/wunschliste">Wunschliste</b-nav-item>
        <b-nav-item href="#/festbeitrag" >Anmeldung Beitrag</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.brand-img {
  margin-right: 5px;
  margin-bottom: 3px
}

.bg-light {
  background-color: red;
}

</style>
