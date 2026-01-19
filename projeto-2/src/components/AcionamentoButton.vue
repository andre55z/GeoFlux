<script setup lang="ts">
import { ref } from 'vue';
import { dispararValidacao } from '@/services/api';

const emit = defineEmits<{
  sucesso: [message: number];
  erro: [message: string];
}>();

const loading = ref(false);

async function acionar() {
  loading.value = true;
  try {
    const result = await dispararValidacao();
    emit('sucesso', result);
  } catch (error) {
    emit('erro', 'Erro ao disparar validação');
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <button
    @click="acionar"
    :disabled="loading"
    class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
  >
  
    {{ loading ? 'Processando...' : 'Disparar Validação' }}
  </button>
</template>

