"use client";

import React, { useState } from 'react';
import NewsFeed from './NewsFeed';
import ChmurkaArticle from './ChmurkaArticle';
import StypulkowskaArticle from './StypulkowskaArticle';
import PanczenkoArticle from './PanczenkoArticle';
import SmokArticle from './SmokArticle';
import SzpitalArticle from './SzpitalArticle';
import ElixirArticle from '../eliksir/ElixirArticle';
import { ChevronLeft } from 'lucide-react';

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
        return <PanczenkoArticle />;
      case 'smok':
        return <SmokArticle />;
      case 'szpital':
        return <SzpitalArticle />;
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
