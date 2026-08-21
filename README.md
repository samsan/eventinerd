# Eventi Nerd

Directory statica di eventi tecnologici ricorrenti in Italia.
Si tratta di un progetto che nasce da una esigenza personale.

[Accedi alla pagina](https://samsan.github.io/eventinerd/)

## Come funziona

- [`data/events.js`](data/events.js) contiene tutti gli eventi.
- [`app.js`](app.js) applica ricerca e filtri e genera l'elenco.
- [`index.html`](index.html) e [`styles.css`](styles.css) definiscono la pagina.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) contiene regole e formato dei dati.
- [`docs/event-research.md`](docs/event-research.md) documenta fonti e criteri.

Il catalogo ha una sola fonte da modificare: `data/events.js`.

## Aggiornare gli eventi

1. Verifica il sito ufficiale e la ricorrenza dell'evento.
2. Aggiungi o modifica la voce in `data/events.js` seguendo
   [`CONTRIBUTING.md`](CONTRIBUTING.md).
3. Apri `index.html` nel browser e prova ricerca, mese e regione.
4. Pubblica la modifica con Git.

Non serve installare o eseguire nulla.

## Segnalazioni

Sul sito, **Segnala evento** apre il GitHub Issue Form del repository. Il modulo
richiede sito ufficiale, prova della ricorrenza, luogo, regione, periodo, temi e
una breve descrizione. Può essere usato anche per correggere una voce esistente.

