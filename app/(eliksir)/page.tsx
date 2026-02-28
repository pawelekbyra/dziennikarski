import React from 'react';
import type { Metadata } from 'next';
import ElixirArticle from '@/app/eliksir/ElixirArticle';

export const metadata: Metadata = {
  title: "Eliksir Wiedźmina – Śledztwo: Michał Kiciński i tajemnica Janova",
  description: "Pełna dokumentacja śledztwa: Michał Kiciński, Jarosław Kordys i prokurator Jolanta Świdnicka. Ayahuasca, Janov i tragiczna śmierć uczestniczki.",
  keywords: "Michał Kiciński, Jarosław Kordys, prokurator Jolanta Świdnicka, Janov, Ayahuasca, Eliksir Wiedźmina, śledztwo dziennikarskie",
};

export default function Page() {
  return <ElixirArticle />;
}
