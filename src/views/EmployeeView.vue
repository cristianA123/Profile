<template>
    <div class="mx-4 mt-6 bg-white p-4 rounded-xl">

      <div class="mb-5 flex justify-between">
        <div>
          <h3 class="text-3xl font-bold">Empleados</h3>
          <p class="text-gray-500">Gestiona tus empleados</p>
        </div>
        <div>
          <div class="flex gap-3">
            <button class="border border-black rounded-lg px-4 py-2 font-semibold"><font-awesome icon="fa-solid fa-download" class="pr-2" />Descargar</button>
            <button class="border bg-black text-white rounded-lg px-4 py-2 font-semibold"><font-awesome icon="fa-solid fa-plus" class="pr-2" />Nuevo</button>
          </div>
        </div>

      </div>

      <div class="flex pb-5 gap-2">
        <div class="border rounded-lg flex justify-between items-center pr-2 w-2/3">
          <input placeholder="Buscar empleado" class="custum_input px-3 py-2  w-full" type="text" />
          <font-awesome icon="fa-solid fa-search" />
        </div>
        <select class="border rounded-lg w-1/3 px-3 py-2 ">
          <option value="uno">Nombre de cargo</option>
          <option value="dos">dos</option>
        </select>
      </div>

      <DataTable />
    </div>
  </template>

<script lang="ts">
import { defineComponent } from 'vue';

import DataTable from './../components/data-table/DataTable.vue';


export default defineComponent({
  name: 'EmployeeView',
  components: {
    DataTable

  },

});
</script>

<style scoped>

.custum_input:focus {
  outline: none;
}

</style>
  