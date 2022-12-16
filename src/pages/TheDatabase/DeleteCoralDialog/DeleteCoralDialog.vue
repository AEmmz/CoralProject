<template>
  <q-card class="q-pa-xl">
    <div class="column q-gutter-y-lg items-center">
      <span class="text-h3 text-black">Are You Sure?</span>
      <div class="row q-gutter-x-lg">
        <q-btn label="Confirm" type="submit" color="secondary" rounded size="lg" @click="deleteData"></q-btn>
        <q-btn label="Cancel" type="Reset" color="negative" rounded size="lg" @click="$emit('closeDialog')"/>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "DeleteCoralDialog",
  methods: {
    deleteData() {
      this.$emit('confirmDelete');
      this.$emit('closeDialog')
    }
  }
}
</script>

<style scoped>

</style>
