<script setup lang="ts">
import { ref } from 'vue';
import AcionamentoButton from './components/AcionamentoButton.vue';
import LogStatus from './components/LogStatus.vue';
import HistoricoTable from './components/HistoricoTable.vue';

const statusMsg = ref('');
const statusType = ref<'sucesso' | 'erro'>('sucesso');
const tabelaRef = ref();

function mostrarSucesso(msg: number) {
  statusMsg.value = msg.toString();
  statusType.value = 'sucesso';
  tabelaRef.value?.carregar();
  setTimeout(() => statusMsg.value = '', 5000);
}

function mostrarErro(msg: string) {
  statusMsg.value = msg;
  statusType.value = 'erro';
  setTimeout(() => statusMsg.value = '', 5000);
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">Sistema de Validação</h1>
      
      <div class="mb-6 flex flex-row gap-2">
        <AcionamentoButton @sucesso="mostrarSucesso" @erro="mostrarErro" />
        <button class="rounded-[5px] bg-yellow-600 p-3">
          <a href="#final">
              Final
          </a>
        </button>
      </div>
      
      <LogStatus v-if="statusMsg" :message="statusMsg" :type="statusType" />
      
      <HistoricoTable ref="tabelaRef"  />
      <section id="final">
        .
      </section>
    </div>
  </div>
</template>
