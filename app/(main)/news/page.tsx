"use client";

import React, { useState } from 'react';
import NewsFeed from '../NewsFeed';
import ChmurkaArticle from '../ChmurkaArticle';
import StypulkowskaArticle from '../StypulkowskaArticle';
import ElixirArticle from '../../eliksir/ElixirArticle';
import { ChevronLeft, Construction } from 'lucide-react';

const ComingSoon = () => (
  <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-8 text-center font-serif">
    <Construction className="w-16 h-16 text-stone-300 mb-6" />
    <h1 className="text-4xl font-bold text-stone-900 mb-4 uppercase tracking-tighter">Materiał w przygotowaniu</h1>
    <p className="text-xl text-stone-600 max-w-md italic">
      Nasi dziennikarze śledczy pracują nad pełną dokumentacją tego tematu. Zapraszamy wkrótce.
    </p>
  </div>
);

export default function NewsPage() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const renderArticle = () => {
    switch (selectedArticle) {
      case 'chmurka':
        return <ChmurkaArticle />;
      case 'stypulkowska':
        return <StypulkowskaArticle />;
      case 'elixir':
        return <ElixirArticle />;
      case 'panczenko':
      case 'smok':
      case 'szpital':
        return <ComingSoon />;
      default:
        return null;
    }
  };

  if (selectedArticle) {
    return (
      <div className="relative">
        <button
          onClick={() => setSelectedArticle(null)}
          className="fixed top-6 left-6 z-[100] flex items-center gap-2 px-4 py-2 bg-stone-900 text-white rounded-full shadow-lg hover:bg-stone-800 transition-colors font-sans text-sm font-bold uppercase tracking-wider"
        >
          <ChevronLeft className="w-4 h-4" />
          Powrót do Wiadomości
        </button>
        {renderArticle()}
      </div>
    );
  }

  return <NewsFeed onUnlock={setSelectedArticle} />;
}
