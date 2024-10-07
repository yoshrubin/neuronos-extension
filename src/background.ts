import { getMockMessages } from './mockData'
import { Message, MockMessagesResult } from './types'

const ALARM_NAME = 'checkMessages'

async function checkAlarmState() {
    const alarm = await chrome.alarms.get(ALARM_NAME)
    if (!alarm) {
        chrome.alarms.create(ALARM_NAME, { periodInMinutes: 5 })
    }
}

// Listen for the alarm
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === ALARM_NAME) {
        checkForNewMessages()
    }
})

async function checkForNewMessages() {
    console.log('Alarm triggered at:', new Date().toISOString())
    const result = (await getMockMessages()) as MockMessagesResult
    await chrome.storage.local.set({ messages: result.messages })
    updateBadge()
}

function updateBadge() {
    console.log('Checking for new messages')
    chrome.storage.local.get('messages', (data) => {
        const unreadCount = data.messages.filter(
            (msg: Message) => !msg.read
        ).length
        if (unreadCount > 0) {
            chrome.action.setBadgeText({ text: unreadCount.toString() })
            chrome.action.setBadgeBackgroundColor({ color: '#FF0000' })
        } else {
            chrome.action.setBadgeText({ text: '' })
        }
    })
}

checkAlarmState()

// Initial check for messages
checkForNewMessages()

// Listen for message to update badge (e.g., when marking as read)
chrome.runtime.onMessage.addListener((request) => {
    if (request.action === 'updateBadge') {
        updateBadge()
    }
})
