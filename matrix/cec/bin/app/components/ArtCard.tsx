
import React from 'react';
import { ArtPiece } from '../types';

interface ArtCardProps {
  artPiece: ArtPiece;
}

const ArtCard: React.FC<ArtCardProps> = ({ artPiece }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700 group transform transition-transform duration-300 hover:-translate-y-2">
      <div className="aspect-square w-full overflow-hidden">
        <img 
          src={artPiece.imageUrl} 
          alt={artPiece.prompt} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <p className="text-gray-300 text-sm">{artPiece.prompt}</p>
      </div>
    </div>
  );
};

export default ArtCard;
