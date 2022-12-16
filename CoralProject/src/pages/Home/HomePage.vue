<template>
  <div class="home-container full-width">

    <q-img class="background-image" src="src/assets/images/homebanner.jpg"/>

    <div class="full-width absolute-center column items-center">
      <div class="header-text text-white text-h1">Welcome to CoralDB</div>
      <p class="text-h6 text-white">The place for information about popular aquarium coral species</p>
      <q-btn label="See the Database" color="secondary" size="lg" rounded class="q-px-xl q-my-xl" to="/database"/>
    </div>

    <div class="full-width absolute-bottom items-center column q-py-xl">
      <div class="justify-center row">
        <q-btn round class="q-pa-md q-ma-sm" icon="fab fa-twitter" color="" size="md" href="https://twitter.com/" target="_blank"><q-tooltip>Twitter</q-tooltip></q-btn>
        <q-btn round class="q-pa-md q-ma-sm" icon="fab fa-instagram" color="" size="md" href="https://instagram.com/" target="_blank"><q-tooltip>Instagram</q-tooltip></q-btn>
        <q-btn round class="q-pa-md q-ma-sm" icon="fab fa-youtube" color="" size="md" href="https://youtube.com/" target="_blank"><q-tooltip>Youtube</q-tooltip></q-btn>
        <q-btn round class="q-pa-md q-ma-sm" icon="fab fa-patreon" color="" size="md" href="https://patreon.com/" target="_blank"><q-tooltip>Patreon</q-tooltip></q-btn>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomePage.vue"
}
</script>

<style scoped lang="scss">
.header-text {
  font-family: "impact", sans-serif;
}
.background-image{
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  filter: contrast(200%) brightness(0.3)}

</style>
