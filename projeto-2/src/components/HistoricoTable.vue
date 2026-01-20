<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { buscarHistorico} from '@/services/api';
import type { HistoricoItem } from '@/types';

const historico = ref();
const loading = ref(false);
const status = ref();

async function carregar() {
  loading.value = true;
  try {
    const content = await buscarHistorico()
    historico.value = content.json;
    historico.value.reverse();
    status.value = content.status;
    
  } catch (error) {
    console.error('Erro ao carregar histórico:', error);
  } finally {
    loading.value = false;
  }
}

function limpar(){
  historico.value = [];
}

onMounted(() => {
  carregar();
});

defineExpose({ carregar });


</script>

<template>
  <div class="bg-white rounded-lg shadow overflow-hidden">
    <div class="px-4 py-3 border-b">
      <h2 class="text-lg font-semibold">Histórico de Validações</h2>
      <div class="flex flex-row items-center gap-2">
        <button @click="limpar" class="p-2 rounded-[10px] bg-red-200 hover:bg-red-400 transition-all duration-300">
          Limpar
        </button>
        <button @click="carregar" class="p-2 rounded-[10px] bg-blue-200 hover:bg-blue-400 transition-all duration-300 mb-[5px]">
          Atualizar Histórico
        </button>

      </div>
    </div>
    
    <div v-if="loading" class="p-4 text-center text-gray-500">
      Carregando...
    </div>
    
    <table v-else class="w-full">

      <thead class="bg-gray-50">

        <tr>
          <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
          <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Data/Hora</th>
          <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Status Histórico</th>
          <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Status Validação</th>
          <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">ID_IBGE</th>
        </tr>
      </thead>
      
      <tbody class="divide-y">
        <tr v-for="item in historico" :key="item.id" class="hover:bg-gray-50">
          <td class="px-4 py-3 text-sm">{{ item.id }}</td>
          <td class="px-4 py-3 text-sm">{{ item.dataHora }}</td>
          <td class="px-4 py-3">
            <span
              :class="[
                'px-2 py-1 text-xs rounded',
                status === 200 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              ]"
            >
              {{ status  }}
            </span>
          </td>
          <td class="px-4 py-3">
            <span
              :class="[
                'px-2 py-1 text-xs rounded',
                item.status === 200 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              ]"
            >
              {{ item.mensagem == "0" ?  404 : item.status}}
            </span>
          </td>
          <td class="px-4 py-3 text-sm text-gray-600">{{ item.mensagem }}</td>
        </tr>
      </tbody>
    </table>


  </div>
</template>