<template>
  <div class="p-4 bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-bold mb-4 text-blue-600">Organization Messages</h1>
    <div v-if="loading" class="text-gray-600">Loading messages...</div>
    <div v-else-if="error" class="text-red-600">{{ error }}</div>
    <div v-else-if="messages.length === 0" class="text-gray-600">
      No messages
    </div>
    <ul v-else>
      <li
        v-for="message in messages"
        :key="message.id"
        class="mb-4 p-3 bg-white rounded shadow"
      >
        <div class="flex justify-between items-center">
          <span :class="{ 'font-bold': !message.read }">{{
            message.content
          }}</span>
          <button
            @click="markAsRead(message.id)"
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
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Message } from "./types/types";

const messages = ref<Message[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(() => {
  loadMessages();
});

function loadMessages() {
  loading.value = true;
  error.value = null;
  chrome.storage.local.get("messages", (data) => {
    if (chrome.runtime.lastError) {
      error.value = "Error loading messages";
    } else {
      messages.value = data.messages || [];
    }
    loading.value = false;
  });
}

function markAsRead(id: string) {
  const updatedMessages = messages.value.map((msg) =>
    msg.id === id ? { ...msg, read: true } : msg
  );
  chrome.storage.local.set({ messages: updatedMessages }, () => {
    if (chrome.runtime.lastError) {
      error.value = "Error updating message";
    } else {
      messages.value = updatedMessages;
      // Trigger badge update
      chrome.runtime.sendMessage({ action: "updateBadge" });
    }
  });
}
</script>
