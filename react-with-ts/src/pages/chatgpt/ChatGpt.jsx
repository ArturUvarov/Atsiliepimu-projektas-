import { useState, useRef, useEffect } from "react";

export function ChatGpt() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
      { role: "ChatGpt", content: reply },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 p-4 overflow-y-auto flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              </div>
              <div className="text-center max-w-md">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  Welcome to ChatGPT
                </h1>
              </div>
            </div>
          ) : (
            <>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-sm rounded-2xl px-4 py-2 ${
                      msg.role === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-white shadow-md"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t bg-white p-4">
        <div className="max-w-3xl mx-auto flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="flex-1 rounded-full px-6 py-3 border focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatGpt;