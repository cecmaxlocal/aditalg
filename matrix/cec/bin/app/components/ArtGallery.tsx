
import React from 'react';
import { ArtPiece } from '../types';
import ArtCard from './ArtCard';

interface ArtGalleryProps {
  artPieces: ArtPiece[];
}

const ArtGallery: React.FC<ArtGalleryProps> = ({ artPieces }) => {
  if (artPieces.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <div className="mx-auto w-24 h-24 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-gray-300">Your Gallery Awaits</h2>
        <p className="mt-2 text-gray-500">
          Use the form above to generate your first piece of digital art.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {artPieces.map(art => (
        <ArtCard key={art.id} artPiece={art} />
      ))}
    </div>
  );
};

export default ArtGallery;
