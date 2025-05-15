import { Send } from 'lucide-react';

interface WelcomeScreenProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
}

export const WelcomeScreen = ({
  input,
  setInput,
  handleSubmit,
  isLoading,
}: WelcomeScreenProps) => (
  <div className="flex flex-col items-center justify-center flex-1 px-4">
    <div className="w-full max-w-xl text-center space-y-6">
      <h1 className="text-5xl font-semibold text-white tracking-tight">Welcome to Chat</h1>
      <p className="text-gray-400 text-base">
        Ask anything. I may not have all the answers, but I’ll do my best.
      </p>

      <form onSubmit={handleSubmit} className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          placeholder="Type your message..."
          className="w-full px-4 py-3 pr-12 text-sm text-white bg-gray-800 border border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows={2}
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="absolute right-3 top-3 text-orange-500 hover:text-orange-400 disabled:text-gray-500"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  </div>
);
