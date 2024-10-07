import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MessageList from '../components/MessageList.vue'
import MessageItem from '../components/MessageItem.vue'
import { Message } from '@/types'

describe('MessageList', () => {
  it('renders messages properly', () => {
    const messages = [
      { id: '1', content: 'Message 1', timestamp: new Date(), priority: 'low', read: false },
      { id: '2', content: 'Message 2', timestamp: new Date(), priority: 'low', read: false },
    ] as Message[]
    const wrapper = mount(MessageList, {
      props: { messages },
      global: {
        components: { MessageItem },
      },
    })
    expect(wrapper.findAllComponents(MessageItem)).toHaveLength(2)
  })

  it('emits markAsRead event when a message is marked as read', async () => {
    const messages = [
      { id: '1', content: 'Message 1', timestamp: new Date(), priority: 'low', read: false },
    ] as Message[]
    const wrapper = mount(MessageList, {
      props: { messages },
      global: {
        components: { MessageItem },
      },
    })
    await wrapper.findComponent(MessageItem).vm.$emit('markAsRead', '1')
    expect(wrapper.emitted('markAsRead')).toBeTruthy()
    expect(wrapper.emitted('markAsRead')?.[0]).toEqual(['1'])
  })
})