<template>
    <li class="mb-4 p-3 bg-white rounded shadow">
        <div class="flex justify-between items-center gap-2">
            <span :class="[{ 'font-bold': !message.read }, 'truncate']">{{
                message.content
            }}</span>
            <button
                class="text-blue-500 hover:text-blue-700"
                @click="$emit('markAsRead', message.id)"
            >
                Mark as read
            </button>
        </div>
        <div class="text-sm text-gray-500 mt-1">
            Priority: {{ message.priority }} |
            {{ formatDate(message.timestamp) }}
        </div>
    </li>
</template>

<script setup lang="ts">
import { Message } from '@/types'

defineProps<{
    message: Message
}>()

defineEmits(['markAsRead'])

const formatDate = (timestamp: Date) => {
    const date = new Date(timestamp)
    return date.toLocaleString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}
</script>
