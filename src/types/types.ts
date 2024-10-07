export interface Message {
  id: string;
  content: string;
  priority: "low" | "medium" | "high";
  timestamp: Date;
  read: boolean;
}

export interface MockMessagesResult {
  messages: Message[];
}
