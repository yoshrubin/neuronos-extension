export const mockMessages = [
  {
    id: "msg123",
    content: "Team meeting at 3 PM today 🙂",
    priority: "high",
    timestamp: "2024-09-30T15:00:00Z",
    read: false,
  },
  {
    id: "msg124",
    content: "Remember to submit your timesheets",
    priority: "medium",
    timestamp: "2024-09-30T10:00:00Z",
    read: false,
  },
  {
    id: "msg125",
    content: "New project kickoff next week",
    priority: "low",
    timestamp: "2024-10-01T09:00:00Z",
    read: false,
  },
];

export function getMockMessages() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ messages: mockMessages });
    }, 500); // Simulate network delay
  });
}
