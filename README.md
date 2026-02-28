# NASZA GAZETKA - Niezależny Serwis Śledczy

Platforma dedykowana dziennikarstwu śledczemu, ujawnianiu nadużyć władzy i dokumentowaniu spraw, o których inni milczą.

## Główne Funkcjonalności

- **System Artykułów Śledczych**: Estetyka portalu śledczego z wykorzystaniem komponentów takich jak `CaseFile`, `PullQuote`, `LegalNote`.
- **Multi-domain Routing**: Obsługa wielu domen (np. `eliksir-wiedzmina.pl`, `polutek.pl`) za pomocą Middleware Next.js.
- **Weryfikowalność**: Integracja z zewnętrznymi bazami danych (Katastr, InfoSoud) oraz archiwizacja w sieciach zdecentralizowanych (IPFS, Arweave).
- **Interaktywność**: Moduły wideo (HLS), galerie dowodowe i dowody audio.

## Główne Śledztwa

- **Eliksir Wiedźmina**: Ujawnienie powiązań twórców CD Projekt z szamańskim podziemiem i tragedią w Janowie.
- **Prokurator Ponad Prawem**: Śledztwo w sprawie nadużyć w Prokuraturze Rejonowej w Środzie Śląskiej.
- **Operacja: Przechwycenie Majątku**: Analiza upadku dewelopera "Panczenko & Syn".
- **Służby w Cieniu Kościoła**: Odtajnienie operacji inwigilacji hierarchów kościelnych.

## Rozwój

Projekt oparty na **Next.js 14**, **Tailwind CSS**, **Prisma** i **TypeScript**.

### Budowa i Uruchomienie

```bash
yarn install
yarn build
yarn start
```

### Weryfikacja Brandingowa

Przed każdym commitem należy uruchomić skrypt weryfikujący branding:

```bash
npx ts-node scripts/verify_branding.ts
```

## Misja

Wierzymy, że prawda jest najcenniejszym towarem. Nasza Gazetka dostarcza ją bez reklam, bez cenzury i bez kompromisów.
