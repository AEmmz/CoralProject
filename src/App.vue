<template>
  <q-layout view="hHh lpR fFf" class="bg-black">

    <q-header class="toobar-header">
      <q-toolbar class="q-pa-lg">
        <q-toolbar-title class="toolbar-title">
          <div class="text-h4 q-mx-lg toolbar-title">CoralDB</div>
        </q-toolbar-title>

        <q-tabs class="q-mx-xl row text-subtitle1" v-model="tabs">
          <q-route-tab class="menu-tab" name="home" label="Home" to="/"></q-route-tab>
          <q-route-tab class="menu-tab" name="database" label="Database" to="/database"></q-route-tab>
          <q-route-tab class="menu-tab" name="about us" label="About Us" to="/about-us"></q-route-tab>
        </q-tabs>

        <div class="q-mx-xl">
          <q-btn label="See the Database" rounded outline size="md" to="/database"/>
          ;
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view v-slot="{Component}">
        <transition name="fade">
          <component :is="Component"/>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      tabs: 'home'
    }
  }
}
</script>

<style scoped lang="scss">
.toolbar-title {
  font-family: "impact", sans-serif;
}

.toobar-header {
  background-color: transparent;
}

.menu-tab {
  min-width: 150px;
}
</style>
