"use client";

import React from 'react';
import { Scale, FileText, Search, ShieldCheck, AlertCircle, TrendingDown, Landmark } from 'lucide-react';
import { CaseFile, PullQuote } from '../components';

export default function PanczenkoArticle() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1a1a1a] selection:bg-yellow-200/50 font-serif flex flex-col">

      <header className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-3 py-1 border border-stone-900 text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
            Śledztwo Gospodarcze
          </div>

          <h1 className="mb-8 text-stone-900">
            <span className="block text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              OPERACJA: PRZECHWYCENIE MAJĄTKU
            </span>
            <span className="block text-xl md:text-2xl text-stone-500 italic font-medium mt-6 max-w-3xl mx-auto">
              Kto naprawdę stoi za bankructwem dewelopera i rozpaczą setek rodzin?
            </span>
          </h1>

          <div className="max-w-2xl mx-auto border-y border-stone-200 py-8 px-4">
            <p className="text-xl md:text-2xl text-stone-700 leading-relaxed italic">
              Analiza tysięcy stron dokumentów finansowych i skomplikowanych powiązań kapitałowych ujawnia mechanizm, który doprowadził do upadku prężnie działającej firmy. To nie był pech rynkowy – to była precyzyjna, wielomiesięczna operacja przejęcia aktywów, która zostawiła setki rodzin bez mieszkań i oszczędności całego życia.
            </p>
            <div className="mt-4 text-sm font-sans uppercase tracking-widest text-stone-500">
              Autor: <span className="font-bold text-stone-900">Zespół Śledczy Naszej Gazetki</span>
            </div>
          </div>
        </div>
      </header>

      <article className="max-w-2xl mx-auto px-4 pt-8 pb-0 flex-grow">

        <div className="prose prose-stone prose-lg max-w-none prose-headings:font-sans prose-headings:font-bold prose-blockquote:not-italic
          prose-a:text-stone-900 prose-a:font-bold prose-a:no-underline prose-a:underline prose-a:decoration-double prose-a:decoration-stone-400 hover:prose-a:bg-stone-100 transition-colors">

          <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-stone-900 leading-relaxed">
            Deweloper &quot;Panczenko &amp; Syn&quot; przez dekadę był synonimem solidności na dolnośląskim rynku nieruchomości. Budowali szybko, nowocześnie i – co najważniejsze – terminowo. Wszystko zmieniło się w połowie 2023 roku, kiedy na konta spółki wszedł komornik, a zarząd ogłosił upadłość układową.
          </p>

          <p>
            Oficjalna wersja: wzrost kosztów materiałów i stóp procentowych. Prawda? Znacznie bardziej mroczna. Nasze śledztwo wskazuje na celowe działanie grupy inwestycyjnej z kapitałem z rajów podatkowych, która krok po kroku &quot;zamykała powietrze&quot; deweloperowi.
          </p>

          <h2 className="text-3xl mt-16 mb-8 tracking-tight text-stone-900 border-b border-stone-200 pb-2">Mechanizm osaczenia</h2>

          <p>
            Wszystko zaczęło się od niewinnie wyglądającej pożyczki pomostowej. Kiedy główny bank finansujący inwestycję nagle wycofał się z kredytowania (powołując się na niejasne &quot;ryzyko reputacyjne&quot;), Panczenko musiał szukać kapitału ratunkowego.
          </p>

          <CaseFile title="Raport Audytora (Internal)" type="evidence">
            „Umowa pożyczki z funduszem &apos;Blue Horizon&apos; zawierała klauzule o natychmiastowej wymagalności w przypadku jakiegokolwiek opóźnienia, nawet o jeden dzień, w dostarczeniu dokumentacji technicznej. Odsetki karne ustalono na poziomie 1% dziennie”.
          </CaseFile>

          <p>
            Okazało się, że фонд &apos;Blue Horizon&apos; jest powiązany z tą samą grupą, która... odkupiła wierzytelności dewelopera od podwykonawców za ułamek wartości, a następnie złożyła wniosek o upadłość.
          </p>

          <PullQuote
            quote="Oni nie chcieli odzyskać pieniędzy. Oni chcieli naszych gruntów i wpłaconych przez ludzi zaliczek. To było wrogie przejęcie przebrane w szaty procedury upadłościowej."
            author="Były prezes spółki"
            source="Wywiad anonimowy"
          />

          <h2 className="text-3xl mt-16 mb-8 tracking-tight text-stone-900 border-b border-stone-200 pb-2">Ludzkie dramaty</h2>

          <p>
            Za tabelkami w Excelu kryją się tragedie rodzin. Państwo Nowaccy wpłacili 450 tysięcy złotych – oszczędności życia i spadek po rodzicach. Dziś mają tylko dziurę w ziemi i kredyt, który muszą spłacać.
          </p>

          <div className="my-8 flex gap-4 p-5 bg-stone-50 border-l-4 border-stone-400 rounded-r-lg shadow-sm">
             <Landmark className="w-8 h-8 text-stone-500 shrink-0 mt-1" />
             <div>
               <strong className="block font-serif text-stone-900 text-lg font-bold mb-3">Bilans strat</strong>
               <ul className="list-disc list-outside ml-4 space-y-2 text-stone-800">
                 <li><strong>420 rodzin</strong> bez mieszkań i bez szans na odzyskanie pełnych wpłat.</li>
                 <li><strong>120 mln PLN</strong> długu wobec małych i średnich firm budowlanych.</li>
                 <li><strong>Główny majątek</strong> (grunty w centrum miasta) przejęty przez fundusz za 30% wartości rynkowej.</li>
               </ul>
             </div>
          </div>

          <h2 className="text-3xl mt-16 mb-8 tracking-tight text-stone-900 border-b border-stone-200 pb-2">Gdzie był nadzór?</h2>

          <p>
            Pytania o rolę KNF i prokuratury pozostają otwarte. Pomimo licznych zawiadomień o możliwości popełnienia przestępstwa działania na szkodę wierzycieli, śledztwo toczy się w żółwim tempie. W tym samym czasie majątek spółki jest wyprowadzany do kolejnych podmiotów zależnych.
          </p>

          <div className="my-12 border-y-2 border-stone-900 py-8">
             <h3 className="font-sans font-bold text-lg uppercase tracking-widest text-stone-900 mb-8 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                Stanowisko Redakcji
             </h3>
             <p className="text-sm text-stone-600 font-sans leading-relaxed">
               Będziemy kontynuować to śledztwo, dopóki osoby odpowiedzialne za ten proceder nie usłyszą zarzutów. Dokumentacja finansowa, którą posiadamy, została przekazana niezależnym biegłym rewidentom do ostatecznej analizy.
             </p>
          </div>

        </div>

        <footer className="mt-4 pt-8 border-none font-sans pb-16">
           <div className="mt-8 text-center">
              <div className="w-24 h-px bg-stone-300 mx-auto mb-6"></div>
              <p className="text-xs text-stone-500 font-mono uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                NASZA GAZETKA • DZIAŁ GOSPODARCZY
              </p>
           </div>
        </footer>
      </article>
    </main>
  );
}
