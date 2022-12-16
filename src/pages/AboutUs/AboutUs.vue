<template>
  <div class="bg-dark full-width full-height">
    <q-img class="background-image" src="src/assets/images/soft_coral.jpeg"/>
  </div>
</template>

<script>
export default {
  name: "AboutUs.vue"
}
</script>

<style scoped lang="scss">

.background-image {
  position: absolute;
  height: 100%;
  top: 0;
  bottom: 0;
  filter: contrast(200%) brightness(0.2)
}

</style>
