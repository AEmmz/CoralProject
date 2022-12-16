<template>
  <q-card class="q-pa-xl flex justify-center text-center">
    <div class="absolute-top-right q-ma-xs">
      <q-btn icon="fas fa-xmark" round flat @click="$emit('closeDialog')"/>
    </div>
    <div>
      <span class="text-h3 text-black dialog-header">Add A Coral</span>
      <q-form @submit="addACoral" @reset="reset" class="q-gutter-y-lg q-mt-md">
        <q-input class="add-coral-input" :model-value="name" v-model="name" label="Name" outlined clearable>
          <template v-slot:prepend>
            <q-icon name="fas fa-water"/>
          </template>
        </q-input>
        <q-input class="add-coral-input" :model-value="price" v-model="price" label="Price" type="number" outlined
                 clearable>
          <template v-slot:prepend>
            <q-icon name="fas fa-dollar-sign"/>
          </template>
        </q-input>
        <q-select class="add-coral-input" :model-value="primaryColor" v-model="primaryColor" :options="colorOptions"
                  label="Primary Color"
                  outlined
        >
          <template v-slot:prepend>
            <q-icon name="fas fa-palette"/>
          </template>
        </q-select>
        <q-select class="add-coral-input" :model-value="secondaryColor" v-model="secondaryColor" :options="colorOptions"
                  label="Secondary Color"
                  outlined
        >
          <template v-slot:prepend>
            <q-icon name="fas fa-palette"/>
          </template>
        </q-select>
        <q-input class="add-coral-input" :model-value="vendor" v-model="vendor" label="Vendor" type="text" outlined
                 clearable>
          <template v-slot:prepend>
            <q-icon name="fas fa-shop"/>
          </template>
        </q-input>
        <q-input class="add-coral-input" :model-value="website" v-model="website" label="Website URL" type="text"
                 outlined
                 clearable>
          <template v-slot:prepend>
            <q-icon name="fas fa-link"/>
          </template>
        </q-input>
        <div class="row justify-center">
          <q-btn label="Submit" type="submit" color="secondary"></q-btn>
          <q-btn label="Reset" type="reset" flat color="negative"></q-btn>
        </div>
      </q-form>
    </div>
  </q-card>
</template>

<script>
import axios from "axios"

export default {
  name: "AddCoralDialog",
  data() {
    return {
      name: '',
      price: null,
      vendor: '',
      primaryColor: '',
      secondaryColor: '',
      website: '',
      colorOptions: [
        "Red", "Pink", "Orange", "Yellow", "Green", "Light Green", "Blue", "Aqua", "Purple", "White", "Black", "Rainbow"
      ]
    }
  },
  methods: {
    reset() {
      this.name = '';
      this.price = null;
      this.vendor = '';
      this.primaryColor = '';
      this.secondaryColor = '';
      this.website = ''
    },
    async addACoral() {
      const coralObject = {
        name: this.name,
        price: this.price,
        primaryColor: this.primaryColor,
        secondaryColor: this.secondaryColor,
        vendor: this.vendor,
        website: this.website,
      }
      const response = await axios.post('https://localhost:7247/coral', coralObject)
      this.$emit('closeDialog');
      this.$emit('addCoral', response.data.coral)
    }
  }
}
</script>

<style scoped>
.dialog-header {
  font-family: "impact", sans-serif
}

.add-coral-input {
  width: 25rem
}

</style>
