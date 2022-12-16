<template>
  <div>
    <q-img class="background-image" src="src/assets/images/orange_acro.jpg"/>

    <div class="full-width absolute main-body">
      <h2 class="text-white text-center table-header">The Database</h2>
      <q-separator inset dark/>
      <div class=" q-ma-xl">
        <div class="row text-white">
          <div class="col-3 flex q-gutter-x-md">
            <q-btn icon="fas fa-plus" round color="secondary" @click="addDialog = true">
              <q-tooltip>Add Coral</q-tooltip>
            </q-btn>
            <q-btn icon="fas fa-minus" round color="negative" @click="deleteDialog = true">
              <q-tooltip>Delete Coral</q-tooltip>
            </q-btn>
          </div>
          <div class="col-9 row justify-end">
            <q-input class="col-4" model-value="searchInput" type="search" v-model="searchInput" dark outlined rounded
                     dense
                     label="Search">
              <template v-slot:prepend>
                <q-icon name="fas fa-magnifying-glass"/>
              </template>
            </q-input>
          </div>
        </div>
        <q-table
          table-style="font-size:20px"
          class="data-table q-pa-md text-dark q-mt-lg"
          :loading="loading"
          :rows="filteredRows"
          :columns="columns"
          row-key="name"
          selection="multiple"
          v-model:selected="selected"
          separator="horizontal"
          :rows-per-page-options="[10,25,50,100,0]"
          rows-per-page-label="Per Page">
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td class="flex justify-center">
                <q-checkbox v-model="props.selected"/>
              </q-td>
              <q-td key="name" :props="props">{{ props.row.name }}</q-td>
              <q-td key="price" :props="props">$ {{ props.row.price.toFixed(2) }}</q-td>
              <q-td key="primaryColor" :props="props">{{ props.row.primaryColor }}</q-td>
              <q-td key="secondaryColor" :props="props">{{ props.row.secondaryColor }}</q-td>
              <q-td key="vendor" :props="props">{{ props.row.vendor }}</q-td>
              <q-td key="website" :props="props">
                <q-btn rounded outline color="primary" icon="fas fa-link" :href="props.row.website"
                       target="_blank"></q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>

    <q-dialog v-model="addDialog">
      <add-coral-dialog @closeDialog="addDialog=false" @addCoral="addCoralToRows"></add-coral-dialog>
    </q-dialog>
    <q-dialog v-model="deleteDialog">
      <delete-coral-dialog @closeDialog="deleteDialog=false" @confirmDelete="deleteData"></delete-coral-dialog>
    </q-dialog>
  </div>
</template>

<script>
import axios from "axios"
import AddCoralDialog from "./AddCoralDialog/AddCoralDialog.vue"
import DeleteCoralDialog from "./DeleteCoralDialog/DeleteCoralDialog.vue"

export default {
  name: "TheDatabase.vue",
  components: {AddCoralDialog, DeleteCoralDialog},
  mounted() {
    this.getData().then(data => {
      this.rows = data
    });
  },
  watch: {
    rows() {
      this.loading = false
    }
  },
  data() {
    return {
      addDialog: false,
      deleteDialog: false,
      searchInput: "",
      loading: false,
      rows: [],
      selected: [],
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: 'name',
          sortable: true,
          style: 'width: 30%',
        },
        {
          name: 'price',
          align: 'center',
          label: 'Price',
          field: 'price',
          format: (val, row) => `${val}%`,
          sortable: true,
          style: 'width: 10%'
        },
        {
          name: 'primaryColor',
          align: 'center',
          label: 'Primary Color',
          field: 'primaryColor',
          sortable: false,
          style: 'width: 15%'
        },
        {
          name: 'secondaryColor',
          align: 'center',
          label: 'Secondary Color',
          field: 'secondaryColor',
          sortable: false,
          style: 'width: 15%'
        },
        {
          name: 'vendor', align: 'center', label: 'Vendor', field: 'vendor', sortable: true, style: 'width: 20%'
        },
        {name: 'website', align: 'center', label: 'Website', field: 'website', sortable: false, style: 'width: 5%'},
      ],
    }
  },
  computed: {
    filteredRows() {
      return this.rows.filter(data => {
        return data.name.toLowerCase().includes(this.searchInput.toLowerCase());
      })
    }
  },
  methods: {
    async getData() {
      this.loading = true;
      const rawData = await axios.get('https://localhost:7247/coral')
      const data = rawData.data;
      data.forEach(entry => {
        for (const key in entry) {
          if (typeof entry[key] == 'string') {
            const wordArray = entry[key].split(' ')
            for (let i = 0; i < wordArray.length; i++) {
              wordArray[i] = wordArray[i][0].toUpperCase() + wordArray[i].substring(1)
            }
            entry[key] = wordArray.join(" ");
          }
        }
      })
      return data
    },
    async deleteData() {
      this.loading = true;
      const deletionArray = [];
      this.selected.forEach(item => {
        deletionArray.push(item.id);
        this.rows = this.rows.filter(row => {
          return row.id !== item.id;
        })
      })
      const deletionItem = await axios.delete('https://localhost:7247/coral', {data: {id: deletionArray}})
      this.selected = []
      this.loading = false;
    },
    addCoralToRows(newCoral) {
      this.rows.push(newCoral)
    }
  }
}
</script>

<style scoped lang="scss">

.background-image {
  position: fixed;
  height: 100%;
  top: 0;
  bottom: 0;
  filter: contrast(200%) brightness(0.2)
}

.main-body {
  z-index: 2;
}

.data-table {
  background: rgba(255, 255, 255, 0.8)
}


.data-table :deep(.q-table tbody td), .data-table :deep(.q-table th) {
  font-size: 1rem;
}

.table-header {
  font-family: "impact", sans-serif
}

</style>
