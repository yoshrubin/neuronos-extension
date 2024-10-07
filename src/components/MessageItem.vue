<template>
    <li class="mb-4 p-3 bg-white rounded shadow">
        <div class="flex justify-between items-center gap-2">
            <span
                :class="[{ 'font-bold': !message.read }, 'truncate text-lg']"
                >{{ message.content }}</span
            >
            <button
                class="text-blue-500 hover:text-blue-700"
                @click="$emit('markAsRead', message.id)"
            >
                Mark as read
            </button>
        </div>
        <div class="text-xs text-gray-500 mt-1">
            Priority:
            <span :class="priorityColor(message.priority)">{{
                message.priority
            }}</span>
            | {{ formatDate(message.timestamp) }}
        </div>
    </li>
</template>

<script setup lang="ts">
import { Message, Priority } from '@/types'

defineProps<{
    message: Message
}>()

defineEmits(['markAsRead'])

const priorityColor = (priority: Priority) => {
    switch (priority) {
        case Priority.HIGH:
            return 'text-red-500'
        case Priority.LOW:
            return 'text-green-500'
        case Priority.MEDIUM:
            return 'text-yellow-500'
    }
}

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
