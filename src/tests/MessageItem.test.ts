import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MessageItem from '../components/MessageItem.vue'
import { Priority } from '@/types'

describe('MessageItem', () => {
  it('renders properly', () => {
    const wrapper = mount(MessageItem, {
      props: {
        message: {
          id: '1',
          content: 'Test message',
          timestamp: new Date(),
          priority: Priority.LOW,
          read: false,
        },
      },
    })
    expect(wrapper.text()).toContain('Test message')
  })

  it('emits markAsRead event when button is clicked', async () => {
    const wrapper = mount(MessageItem, {
      props: {
        message: {
          id: '1',
          content: 'Test message',
          timestamp: new Date(),
          priority: Priority.LOW,
          read: false,
        },
      },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('markAsRead')).toBeTruthy()
    expect(wrapper.emitted('markAsRead')?.[0]).toEqual(['1'])
  })
})