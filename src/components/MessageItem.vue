<template>
  <li class="mb-4 p-3 bg-white rounded shadow">
    <div class="flex justify-between items-center">
      <span :class="{ 'font-bold': !message.read }">{{ message.content }}</span>
      <button
        @click="$emit('markAsRead', message.id)"
        class="text-blue-500 hover:text-blue-700"
      >
        Mark as read
      </button>
    </div>
    <div class="text-sm text-gray-500 mt-1">
      Priority: {{ message.priority }} |
      {{ new Date(message.timestamp).toLocaleString() }}
    </div>
  </li>
</template>

<script setup lang="ts">
import { Message } from "@/types";

defineProps<{
  message: Message;
}>();

defineEmits(["markAsRead"]);
</script>
