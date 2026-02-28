"use client";

import React from 'react';
import { Scale, FileText, Search, ShieldCheck, AlertCircle, Eye, Landmark } from 'lucide-react';
import { CaseFile, PullQuote } from '../components';

export default function SmokArticle() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1a1a1a] selection:bg-yellow-200/50 font-serif flex flex-col">

      <header className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-3 py-1 border border-stone-900 text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
            Służby i Bezpieczeństwo
          </div>

          <h1 className="mb-8 text-stone-900">
            <span className="block text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              SŁUŻBY W CIENIU KOŚCIOŁA
            </span>
            <span className="block text-xl md:text-2xl text-stone-500 italic font-medium mt-6 max-w-3xl mx-auto">
              Nieznane fakty o inwigilacji duchownych i grze teczkami w wolnej Polsce
            </span>
          </h1>

          <div className="max-w-2xl mx-auto border-y border-stone-200 py-8 px-4">
            <p className="text-xl md:text-2xl text-stone-700 leading-relaxed italic">
              Odtajnione akta operacyjne z lat 2010-2015 ujawniają skalę operacji &quot;SMOK&quot;. Ujawniamy, jak agenci pod przykryciem przenikali do struktur diecezjalnych, by zbierać materiały na wpływowych hierarchów. Czy była to ochrona interesów państwa, czy cyniczna gra o wpływy i szantaż finansowy?
            </p>
            <div className="mt-4 text-sm font-sans uppercase tracking-widest text-stone-500">
              Autor: <span className="font-bold text-stone-900">Marek &quot;Cień&quot; Kamiński</span>
            </div>
          </div>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 pt-8 pb-0 flex-grow">

        <div className="prose prose-stone prose-lg max-w-none prose-headings:font-sans prose-headings:font-bold prose-blockquote:not-italic
          prose-a:text-stone-900 prose-a:font-bold prose-a:no-underline prose-a:underline prose-a:decoration-double prose-a:decoration-stone-400 hover:prose-a:bg-stone-100 transition-colors">

          <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-stone-900 leading-relaxed">
            Powszechnie sądzi się, że inwigilacja Kościoła zakończyła się wraz z rozwiązaniem Departamentu IV MSW w 1989 roku. Nic bardziej mylnego. Z dokumentów, do których dotarła &quot;Nasza Gazetka&quot;, wyłania się obraz szeroko zakrojonej akcji służb specjalnych III RP, prowadzonej pod kryptonimem &quot;SMOK&quot;.
          </p>

          <p>
            Celem nie była walka z ideologią, lecz kontrola nad przepływami finansowymi i obsadą kluczowych stanowisk w polskim Kościele. Agenci zbierali informacje o skłonnościach, nałogach i – przede wszystkim – o majątku.
          </p>

          <h2 className="text-3xl mt-16 mb-8 tracking-tight text-stone-900 border-b border-stone-200 pb-2">O.W. &quot;Kamerdyner&quot;</h2>

          <p>
            Kluczowym elementem operacji było pozyskanie osobowych źródeł informacji w najbliższym otoczeniu biskupów. Jeden z nich, zarejestrowany jako O.W. &quot;Kamerdyner&quot;, przez lata dostarczał raporty z prywatnych spotkań na szczycie hierarchii.
          </p>

          <CaseFile title="Notatka Służbowa ABW (Tajne)" type="evidence">
            „Źródło przekazało nagranie rozmowy dotyczącej sprzedaży gruntów kościelnych pod planowaną autostradę. W spotkaniu uczestniczył przedstawiciel lokalnego biznesu, który obiecał darowiznę na fundusz remontowy w zamian za korzystną wycenę nieruchomości przez rzeczoznawcę kurialnego”.
          </CaseFile>

          <PullQuote
            quote="Wiedzieliśmy o nich wszystko. Kto z kim pije, kto ma długi hazardowe, a kto ukrywa nieślubne dziecko. Te teczki nie służyły do wsadzania do więzienia. One służyły do negocjacji."
            author="Emerytowany oficer służb"
            source="Rozmowa w kawiarni"
          />

          <h2 className="text-3xl mt-16 mb-8 tracking-tight text-stone-900 border-b border-stone-200 pb-2">Gospodarcze ramię &quot;Smoka&quot;</h2>

          <p>
            Najciekawszy wątek dotyczy jednak Komisji Majątkowej. Dokumenty wskazują, że służby miały pełną wiedzę o nieprawidłowościach przy zwrotach ziemi, ale informacja ta była dawkowana politykom w zależności od aktualnych potrzeb.
          </p>

          <div className="my-8 flex gap-4 p-5 bg-stone-50 border-l-4 border-stone-400 rounded-r-lg shadow-sm">
             <Eye className="w-8 h-8 text-stone-500 shrink-0 mt-1" />
             <div>
               <strong className="block font-serif text-stone-900 text-lg font-bold mb-3">Metody operacyjne</strong>
               <ul className="list-disc list-outside ml-4 space-y-2 text-stone-800">
                 <li><strong>Podsłuchy kierunkowe</strong> w rezydencjach biskupich podczas wizyt polityków.</li>
                 <li><strong>Prowokacje finansowe</strong> z udziałem podstawionych biznesmenów oferujących &quot;pomoc&quot; w inwestycjach.</li>
                 <li><strong>Inwigilacja elektroniczna</strong> korespondencji e-mailowej kurii (operacja &quot;CYBER-MITRA&quot;).</li>
               </ul>
             </div>
          </div>

          <h2 className="text-3xl mt-16 mb-8 tracking-tight text-stone-900 border-b border-stone-200 pb-2">Dziedzictwo cienia</h2>

          <p>
            Czy operacja &quot;SMOK&quot; nadal trwa? Nasi rozmówcy sugerują, że zmieniła ona tylko nazwę i metody. W dobie cyfryzacji, teczki papierowe zastąpiły bazy danych, ale mechanizm szantażu pozostaje ten sam. &quot;Prawda was wyzwoli&quot; – to hasło w tym kontekście nabiera wyjątkowo gorzkiego smaku.
          </p>

          <div className="my-12 border-y-2 border-stone-900 py-8">
             <h3 className="font-sans font-bold text-lg uppercase tracking-widest text-stone-900 mb-8 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                Dalsze Śledztwo
             </h3>
             <p className="text-sm text-stone-600 font-sans leading-relaxed text-center italic">
               W następnym odcinku: Kto z obecnych ministrów figurował w aktach &quot;Smoka&quot; jako osoba do &quot;szczególnego potraktowania&quot;?
             </p>
          </div>

        </div>

        <footer className="mt-4 pt-8 border-none font-sans pb-16">
           <div className="mt-8 text-center">
              <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
              <p className="text-xs text-stone-500 font-mono uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                NASZA GAZETKA • ARCHIWUM X
              </p>
           </div>
        </footer>
      </article>
    </main>
  );
}
