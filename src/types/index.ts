export enum Priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
}

export interface Message {
    id: string
    content: string
    priority: Priority
    timestamp: Date
    read: boolean
}

export interface MockMessagesResult {
    messages: Message[]
}
