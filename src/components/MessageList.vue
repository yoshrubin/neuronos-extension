<template>
  <ul v-else>
    <MessageItem
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
  </ul>
</template>

<script setup lang="ts">
import { Message } from "@/types";

defineProps<{
  messages: Message[];
}>();
</script>
