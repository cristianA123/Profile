<template>
  
    <div class="rounded-lg border border-gray-200">
      <div class="overflow-x-auto rounded-t-lg">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead class="ltr:text-left rtl:text-right">
            <tr>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Nombre
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Nombre cargo
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Departamento
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Oficina
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Cuenta
              </th>
              <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Acciones
              </th>
            </tr>
          </thead>
    
          <tbody class="divide-y divide-gray-200">
            
            <tr 
              v-for="employeed in employeeds"
              :key="employeed.id"
            >
              <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{{ employeed.nombre }}</td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ employeed.cargo }}</td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ employeed.departamento }}</td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ employeed.oficina }}</td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ employeed.estadoCuenta }}</td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                <div class="w-8 h-7 inline-block px-2 py-1 bg-c_primary rounded-lg mr-1">
                  <font-awesome class="text-white" icon="fa-solid fa-eye" />
                </div>
                <div class="w-8 h-7 inline-block px-2 py-1 bg-blue-500 rounded-lg mr-1">
                  <font-awesome class="text-white" icon="fa-solid fa-pencil" />
                </div>
                <div class="w-8 h-7 inline-block px-2 py-1 bg-red-400 rounded-lg mr-1">
                  <font-awesome class="text-white" icon="fa-solid fa-trash" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    
      <div class="rounded-b-lg border-t border-gray-200 px-4 py-2">
        <ol class="flex justify-end gap-1 text-xs font-medium">
          <li>
            <a
              href="#"
              class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span class="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
    
          <li>
            <a
              href="#"
              class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              1
            </a>
          </li>
    
          <li
            class="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
          >
            2
          </li>
    
          <li>
            <a
              href="#"
              class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              3
            </a>
          </li>
    
          <li>
            <a
              href="#"
              class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
            >
              4
            </a>
          </li>
    
          <li>
            <a
              href="#"
              class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
            >
              <span class="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>
          
        </ol>
      </div>
    </div>
  </template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import API from '../../apis/api';
import { EmployedResponse, Datum } from '../../interfaces/employeed';

export default defineComponent({
    name: 'DataTable',
    setup () {
    const employeeds = ref<Datum[]>([]);

    onMounted(async () => {
      try {
        const response = await API.get<EmployedResponse>('/empleados');
        employeeds.value = response.data.data;
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    });

    return {
      employeeds
    };
  },
})
</script>

<style scoped>

</style>