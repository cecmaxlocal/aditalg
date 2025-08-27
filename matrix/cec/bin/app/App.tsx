
import React, { useState } from 'react';
import Header from './components/Header';
import PromptForm from './components/PromptForm';
import ArtGallery from './components/ArtGallery';
import { ArtPiece } from './types';
import { generateImage } from './services/geminiService';

const App: React.FC = () => {
  const [artPieces, setArtPieces] = useState<ArtPiece[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateArt = async (prompt: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const imageUrl = await generateImage(prompt);
      const newArtPiece: ArtPiece = {
        id: new Date().toISOString(),
        prompt,
        imageUrl,
      };
      setArtPieces(prevPieces => [newArtPiece, ...prevPieces]);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white selection:bg-purple-500 selection:text-white">
      <main className="container mx-auto px-4 py-8">
        <Header />
        <section className="mt-8">
          <PromptForm onGenerate={handleGenerateArt} isLoading={isLoading} />
          {error && (
            <div className="mt-4 text-center bg-red-900/50 border border-red-700 text-red-300 p-3 rounded-lg max-w-2xl mx-auto">
              <p><strong>Error:</strong> {error}</p>
            </div>
          )}
        </section>
        <section className="mt-16">
          <ArtGallery artPieces={artPieces} />
        </section>
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm">
        <p>Powered by Gemini. Created for Aditalg.</p>
      </footer>
    </div>
  );
};

export default App;
