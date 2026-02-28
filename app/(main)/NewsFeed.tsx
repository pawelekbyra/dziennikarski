"use client";

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

const ARTICLES: Article[] = [
  {
    id: 'elixir',
    title: "Eliksir Wiedźmina. Mroczna tajemnica twórców CD Projekt",
    excerpt: "Ayahuasca, policyjne naloty i tragedia, o której nikt się miał nie dowiedzieć. W cieniu głośnego procesu dziennikarskie śledztwo ujawnia, jak twórcy gry 'Wiedźmin' finansowali szamańskie podziemie.",
    image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=1200",
    category: "ŚLEDZTWO"
  },
  {
    id: 'stypulkowska',
    title: "PROKURATOR PONAD PRAWEM. Jak szefowa jednostki fabrykowała proces",
    excerpt: "Antydatowane pisma, ukrywane dowody niewinności i forsowanie więzienia dla człowieka, którego sądy uznały za niepoczytalnego. Ujawniamy kulisy sprawy, która właśnie runęła w Sądzie Okręgowym w Świdnicy.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    category: "WYMIAR SPRAWIEDLIWOŚCI"
  },
  {
    id: 'chmurka',
    title: "OGRABIONY ZE SPADKU I SKAZANY ZA UPOMINANIE SIĘ O PRAWDĘ",
    excerpt: "Zginęły dokumenty i testament. Kiedy Paweł Perfect zgłosił kradzież, prokuratura umorzyła sprawę. Kiedy zaczął domagać się zwrotu, system zrobił z niego stalkera. Dziś składa wniosek o wznowienie śledztwa.",
    image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=800",
    category: "INTERWENCJA"
  },
  {
    id: 'panczenko',
    title: "OPERACJA: PRZECHWYCENIE MAJĄTKU. Kto stoi za bankructwem dewelopera?",
    excerpt: "Analiza dokumentów finansowych i powiązań kapitałowych. Jak seria zaplanowanych przejęć doprowadziła do upadku prężnie działającej firmy, zostawiając setki rodzin bez mieszkań i oszczędności życia.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    category: "GOSPODARKA"
  },
  {
    id: 'smok',
    title: "SŁUŻBY W CIENIU KOŚCIOŁA. Nieznane fakty o inwigilacji duchownych",
    excerpt: "Odtajnione akta operacyjne z lat 2010-2015. Ujawniamy, jak agenci pod przykryciem przenikali do struktur diecezjalnych, by zbierać materiały na wpływowych hierarchów. Czy to była ochrona państwa czy szantaż?",
    image: "https://images.unsplash.com/photo-1548625361-195fe613083e?auto=format&fit=crop&q=80&w=800",
    category: "BEZPIECZEŃSTWO"
  },
  {
    id: 'szpital',
    title: "ZAGADKA ODDZIAŁU 404. Co działo się za zamkniętymi drzwiami?",
    excerpt: "Relacje personelu i pacjentów, którzy przerwali milczenie. W jednym z wojewódzkich szpitali przez lata funkcjonował system eksperymentalnych terapii, których nie było w żadnych oficjalnych rejestrach.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    category: "ZDROWIE"
  }
];

interface NewsFeedProps {
  onUnlock: (articleId: string) => void;
}

export default function NewsFeed({ onUnlock }: NewsFeedProps) {
  const [heroArticle, ...remainingArticles] = ARTICLES;
  const investigativeArticles = remainingArticles.slice(0, 2);
  const latestArticles = remainingArticles.slice(2);

  return (
    <div className="min-h-screen bg-white font-serif text-stone-900">
      {/* Top Banner / Breaking */}
      <div className="bg-red-700 text-white py-2 px-6 overflow-hidden whitespace-nowrap">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <span className="font-bold bg-white text-red-700 px-2 py-0.5 text-xs uppercase animate-pulse">Na żywo</span>
          <p className="text-sm font-sans font-medium">Trwa śledztwo w sprawie Eliksiru Wiedźmina. Nowe fakty wychodzą na jaw co godzinę...</p>
        </div>
      </div>

      {/* Main Navigation/Header */}
      <header className="border-b-4 border-double border-stone-200 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-2">POLUTEK</h1>
          <div className="flex flex-col md:flex-row justify-between items-center border-y border-stone-300 py-3 mt-6">
            <div className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2 md:mb-0">
              Niezależny Serwis Dziennikarski • {new Date().toLocaleDateString('pl-PL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <nav className="flex gap-6 font-sans text-xs font-bold uppercase tracking-wider">
              <a href="#" className="hover:text-red-700 transition-colors">Kraj</a>
              <a href="#" className="hover:text-red-700 transition-colors">Świat</a>
              <a href="#" className="hover:text-red-700 transition-colors">Gospodarka</a>
              <a href="#" className="hover:text-red-700 transition-colors">Opinie</a>
              <a href="#" className="text-red-700">Śledztwa</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">

        {/* Hero Section */}
        <section className="mb-16 group cursor-pointer" onClick={() => onUnlock(heroArticle.id)}>
          <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-sm shadow-xl">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
            <img
              src={heroArticle.image}
              alt={heroArticle.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <span className="inline-block px-2 py-1 bg-yellow-500 text-stone-900 text-xs font-bold uppercase tracking-widest mb-3">
                {heroArticle.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-sm">
                {heroArticle.title}
              </h1>
              <p className="text-stone-200 text-lg md:text-xl max-w-3xl leading-relaxed drop-shadow-sm line-clamp-3 md:line-clamp-none">
                {heroArticle.excerpt}
              </p>
              <div className="mt-6 flex items-center text-yellow-400 font-sans text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                Czytaj dalej <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </section>

        {/* Investigation Grid */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black uppercase tracking-tight text-red-700 italic border-l-8 border-red-700 pl-4">Raporty Specjalne</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {investigativeArticles.map((article) => (
              <article
                key={article.id}
                className="group cursor-pointer border-b border-stone-200 pb-8"
                onClick={() => onUnlock(article.id)}
              >
                <div className="aspect-video overflow-hidden mb-6 bg-stone-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <span className="text-red-700 text-xs font-bold uppercase tracking-widest block mb-2">{article.category}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4 leading-tight group-hover:underline decoration-2">
                  {article.title}
                </h3>
                <p className="text-stone-600 leading-relaxed line-clamp-3 font-sans text-sm">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Latest News Feed */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t pt-12 border-stone-200">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-black uppercase tracking-widest mb-8 border-b-2 border-stone-900 inline-block">Najnowsze</h2>
            <div className="space-y-12">
              {latestArticles.map((article) => (
                <article
                  key={article.id}
                  className="flex flex-col md:flex-row gap-6 group cursor-pointer"
                  onClick={() => onUnlock(article.id)}
                >
                  <div className="w-full md:w-1/3 aspect-video md:aspect-square shrink-0 bg-stone-100 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">{article.category}</span>
                    <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-red-700 transition-colors italic">
                      {article.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed font-sans line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="bg-stone-50 p-6 border border-stone-200">
            <h2 className="text-xs font-black uppercase tracking-widest mb-6 text-stone-400">Opinie & Komentarze</h2>
            <div className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[10px] font-bold text-red-700 uppercase">Felieton</span>
                <p className="text-sm font-bold mt-1 leading-tight hover:underline cursor-pointer">Paweł Perfect: Dlaczego prawda jest dziś najdroższym towarem?</p>
              </div>
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[10px] font-bold text-red-700 uppercase">List do Redakcji</span>
                <p className="text-sm font-bold mt-1 leading-tight hover:underline cursor-pointer">Czy państwo chroni swoich obywateli? Głos z głębi systemu.</p>
              </div>
              <div>
                <span className="text-[10px] font-bold text-red-700 uppercase">Analiza</span>
                <p className="text-sm font-bold mt-1 leading-tight hover:underline cursor-pointer">Sztuczna inteligencja w służbie propagandy czy wolności?</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-stone-300">
              <h3 className="text-xs font-black uppercase mb-4">Wesprzyj nas</h3>
              <p className="text-xs text-stone-500 font-sans leading-relaxed mb-4">Jesteśmy niezależni dzięki Waszemu wsparciu. Żadnych reklam, żadnej cenzury.</p>
              <button className="w-full py-2 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-red-700 transition-colors">Wpłać na fundusz śledczy</button>
            </div>
          </aside>
        </section>

      </main>

      <footer className="bg-stone-900 text-stone-400 py-8 px-6 mt-12 font-sans text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Wiadomości Śledcze. Wszelkie prawa zastrzeżone.</p>
        <p className="mt-2 text-xs text-stone-600 font-mono">Zasoby niezależne (IPFS/Web3)</p>
      </footer>
    </div>
  );
}
