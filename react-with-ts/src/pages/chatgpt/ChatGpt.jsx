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
    <div className="flex h-screen flex-col bg-gray-100">
      <div className="flex flex-1 items-center justify-center overflow-y-auto p-4">
        <div className="mx-auto w-full max-w-3xl space-y-4">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center space-y-8">
              <div className="flex h-32 w-32 transform items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-600 shadow-lg transition-transform duration-300 hover:scale-105"></div>
              <div className="max-w-md text-center">
                <h1 className="mb-4 text-4xl font-bold text-gray-800">
                 Sveiki atvykę į ChatGPT
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
        <div className="mx-auto flex max-w-3xl gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Įveskite žinutę..."
            className="flex-1 rounded-full border px-6 py-3 focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="rounded-full bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
          >
            Siųsti
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatGpt;
