export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md mb-4">
        <h2 className="text-xl font-bold mb-2">Chat History</h2>
        <div className="flex flex-col space-y-2">
          {/* Example chat messages */}
          <div className="p-2 bg-gray-200 rounded">
            Hello, how can I help you?
          </div>
          <div className="p-2 bg-blue-200 rounded self-end">
            I need some assistance.
          </div>
        </div>
      </div>

      <input
        type="text"
        placeholder="Send message to GPT"
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Send
      </button>
    </div>
  );
}
