<template>
  <ul class="w-full grid grid-cols-1 gap-2">
    <MessageItem
      v-for="message in messages"
      :key="message.id"
      :message="message"
      @markAsRead="$emit('markAsRead', $event)"
    />
  </ul>
</template>

<script setup lang="ts">
import MessageItem from "./MessageItem.vue";
import type { Message } from "@/types";

defineProps<{
  messages: Message[];
}>();

defineEmits(["markAsRead"]);
</script>
