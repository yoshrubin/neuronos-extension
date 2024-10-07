<template>
  <div class="p-4 bg-gray-100 min-h-screen min-w-max">
    <h1 class="text-2xl font-bold mb-4 text-blue-600">Organization Messages</h1>
    <Messages
      :messages="messages"
      :loading="loading"
      :error="error"
      @markAsRead="markAsRead"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Message } from "@/types";
import Messages from "./components/Messages.vue";

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
