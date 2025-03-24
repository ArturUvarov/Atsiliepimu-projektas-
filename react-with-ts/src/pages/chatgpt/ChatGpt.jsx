import { useState } from "react";

export function ChatGpt() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  async function sendMessage(message) {
    const response = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    return data.reply;
  }

  const handleSend = async () => {
    if (!input.trim()) return;
    const reply = await sendMessage(input);
    setMessages([
      ...messages,
      { role: "user", content: input },
      { role: "assistant", content: reply },
    ]);
    setInput("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="border rounded-lg p-4 bg-gray-100">
        {messages.map((msg, i) => (
          <p key={i} className={msg.role === "user" ? "text-blue-600" : "text-green-600"}>
            <strong>{msg.role}:</strong> {msg.content}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded w-full mt-4"
      />
      <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Send
      </button>
    </div>
  );
}

export default ChatGpt;
