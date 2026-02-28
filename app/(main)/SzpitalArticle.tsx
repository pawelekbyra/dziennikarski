"use client";

import React from 'react';
import { Scale, FileText, Search, ShieldCheck, AlertCircle, HeartPulse, Stethoscope } from 'lucide-react';
import { CaseFile, PullQuote } from '../components';

export default function SzpitalArticle() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1a1a1a] selection:bg-yellow-200/50 font-serif flex flex-col">

      <header className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-3 py-1 border border-stone-900 text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
            Zdrowie i Etyka
          </div>

          <h1 className="mb-8 text-stone-900">
            <span className="block text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              ZAGADKA ODDZIAŁU 404
            </span>
            <span className="block text-xl md:text-2xl text-stone-500 italic font-medium mt-6 max-w-3xl mx-auto">
              Co działo się za zamkniętymi drzwiami wojewódzkiego szpitala?
            </span>
          </h1>

          <div className="max-w-2xl mx-auto border-y border-stone-200 py-8 px-4">
            <p className="text-xl md:text-2xl text-stone-700 leading-relaxed italic">
              Relacje personelu i pacjentów, którzy przerwali milczenie, odsłaniają wstrząsający obraz. W jednym z wojewódzkich szpitali przez lata funkcjonował system eksperymentalnych terapii, których nie było w żadnych oficjalnych rejestrach. Kto finansował te badania i dlaczego pacjenci nie byli informowani o ryzyku?
            </p>
            <div className="mt-4 text-sm font-sans uppercase tracking-widest text-stone-500">
              Autor: <span className="font-bold text-stone-900">Dr Anna Górska</span>
            </div>
          </div>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 pt-8 pb-0 flex-grow">

        <div className="prose prose-stone prose-lg max-w-none prose-headings:font-sans prose-headings:font-bold prose-blockquote:not-italic
          prose-a:text-stone-900 prose-a:font-bold prose-a:no-underline prose-a:underline prose-a:decoration-double prose-a:decoration-stone-400 hover:prose-a:bg-stone-100 transition-colors">

          <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-stone-900 leading-relaxed">
            Oficjalnie był to oddział geriatrii o podwyższonym standardzie. Nieoficjalnie nazywano go &quot;Oddziałem 404&quot; – jak błąd w przeglądarce, którego nie powinno być. Znajdował się w skrzydle, do którego dostępu nie mieli nawet lekarze z innych oddziałów.
          </p>

          <p>
            Nasze śledztwo, oparte na zeznaniach pielęgniarek i dokumentacji medycznej wyniesionej ze szpitala tuż przed jej rzekomym &quot;zniszczeniem w pożarze archiwum&quot;, rzuca nowe światło na działalność prof. Zygmunta W.
          </p>

          <h2 className="text-3xl mt-16 mb-8 tracking-tight text-stone-900 border-b border-stone-200 pb-2">Pacjent jako surowiec</h2>

          <p>
            Proceder był prosty i okrutny. Pacjenci w zaawansowanym stadium chorób otępiennych, często bez rodzin, byli włączani do programów &quot;innowacyjnej opieki&quot;. W rzeczywistości podawano im substancje będące we wczesnej fazie testów klinicznych, finansowanych przez zagraniczne korporacje biotechnologiczne.
          </p>

          <CaseFile title="Wypis ze szpitala (Kopia nieoficjalna)" type="evidence">
            „Pacjentka lat 82. Po podaniu preparatu X-21 zaobserwowano nagły wzrost pobudzenia i poprawę funkcji kognitywnych, po których nastąpił gwałtowny zapaść wielonarządowa. Zgon stwierdzono o 4:15. Przyczyna oficjalna: niewydolność krążenia związana z wiekiem”.
          </CaseFile>

          <p>
            Podpisywałyśmy dokumenty o zachowaniu tajemnicy, bo pensje na tym oddziale były trzy razy wyższe. Ale kiedy zobaczyłam, że ci ludzie umierają w męczarniach tylko po to, by jakaś firma mogła sprawdzić skutki uboczne, nie mogłam już milczeć.
          </p>

          <PullQuote
            quote="Podpisywałyśmy dokumenty o zachowaniu tajemnicy, bo pensje na tym oddziale były trzy razy wyższe. Ale kiedy zobaczyłam, że ci ludzie umierają w męczarniach tylko po to, by jakaś firma mogła sprawdzić skutki uboczne, nie mogłam już milczeć."
            author="Była pielęgniarka oddziałowa"
            source="Zeznanie przed prokuratorem"
          />

          <h2 className="text-3xl mt-16 mb-8 tracking-tight text-stone-900 border-b border-stone-200 pb-2">Ścieżka pieniędzy</h2>

          <p>
            Gdzie trafiały miliony z grantów? Nasza analiza wskazuje na sieć fundacji &quot;wspierających rozwój nauki&quot;, których zarządy składały się z członków rodzin dyrekcji szpitala i urzędników resortu zdrowia.
          </p>

          <div className="my-8 flex gap-4 p-5 bg-stone-50 border-l-4 border-stone-400 rounded-r-lg shadow-sm">
             <HeartPulse className="w-8 h-8 text-stone-500 shrink-0 mt-1" />
             <div>
               <strong className="block font-serif text-stone-900 text-lg font-bold mb-3">Statystyki Oddziału 404</strong>
               <ul className="list-disc list-outside ml-4 space-y-2 text-stone-800">
                 <li><strong>300% wyższa śmiertelność</strong> niż na standardowych oddziałach geriatrycznych.</li>
                 <li><strong>Brak zgód</strong> pacjentów lub ich opiekunów prawnych na udział w eksperymentach w 80% badanych przypadków.</li>
                 <li><strong>Darowizny od firm farmaceutycznych</strong> sięgające 15 mln PLN rocznie, księgowane jako &quot;sprzęt biurowy&quot;.</li>
               </ul>
             </div>
          </div>

          <h2 className="text-3xl mt-16 mb-8 tracking-tight text-stone-900 border-b border-stone-200 pb-2">Mur milczenia</h2>

          <p>
            Pomimo dowodów, sprawa &quot;Oddziału 404&quot; jest systematycznie wyciszana. Prof. Zygmunt W. przebywa obecnie na emeryturze w Szwajcarii, a dyrekcja szpitala twierdzi, że wszelkie oskarżenia to &quot;atak na dobre imię polskich medyków&quot;. My jednak nie odpuścimy, dopóki każda ofiara tego procederu nie zostanie upamiętniona, a winni – ukarani.
          </p>

          <div className="my-12 border-y-2 border-stone-900 py-8 text-center">
             <Stethoscope className="w-10 h-10 text-stone-300 mx-auto mb-4" />
             <p className="text-sm text-stone-500 font-sans italic">
               Posiadasz informacje o podobnych praktykach? Skontaktuj się z nami przez szyfrowany formularz na stronie. Gwarantujemy pełną anonimowość.
             </p>
          </div>

        </div>

        <footer className="mt-4 pt-8 border-none font-sans pb-16">
           <div className="mt-8 text-center">
              <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
              <p className="text-xs text-stone-500 font-mono uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                NASZA GAZETKA • DZIAŁ ŚLEDCZY
              </p>
           </div>
        </footer>
      </article>
    </main>
  );
}
