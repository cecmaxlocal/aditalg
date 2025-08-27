
import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface PromptFormProps {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

const PromptForm: React.FC<PromptFormProps> = ({ onGenerate, isLoading }) => {
  const [prompt, setPrompt] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      onGenerate(prompt);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-700">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., A neon hologram of a cat driving at top speed..."
          className="w-full h-28 p-3 bg-gray-900/70 border border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors placeholder-gray-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="mt-4 w-full flex items-center justify-center font-bold py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {isLoading ? (
            <>
              <LoadingSpinner className="w-6 h-6 mr-2" />
              Generating...
            </>
          ) : (
            'Generate Art'
          )}
        </button>
      </form>
    </div>
  );
};

export default PromptForm;
