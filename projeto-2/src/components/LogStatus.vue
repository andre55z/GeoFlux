<script setup lang="ts">
defineProps<{
  message: string;
  type: 'sucesso' | 'erro';
}>();
</script>

<template>
  <div
    v-if="message"
    :class="[
      'p-4 rounded mb-4',
      type === 'sucesso' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
    ]"
  >
    {{ message }}
  </div>
</template>
