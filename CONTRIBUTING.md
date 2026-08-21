# Segnalare un evento

Usa il link **Segnala evento** nel sito: apre un Issue Form già predisposto.

Prima di inviare:

1. verifica che l'evento si svolga in Italia o abbia una serie italiana;
2. indica il sito ufficiale dell'organizzatore;
3. mostra che è ricorrente con almeno due edizioni, un archivio o una dichiarazione ufficiale;
4. aggiungi luogo, regione, periodo abituale e temi principali;
5. scrivi una descrizione breve e fattuale.

Sono benvenute anche correzioni a eventi già presenti. Non vengono normalmente
pubblicati eventi una tantum, pagine senza fonte ufficiale o semplici annunci
commerciali.

## Per i maintainer

L'elenco pubblico è tutto in [`data/events.js`](data/events.js). Per aggiungere
una voce, copia questo modello nell'array `window.EVENTS`:

```js
{
  name: "Nome evento",
  url: "https://sito-ufficiale.example",
  description: "Descrizione breve.",
  location: "Città (Provincia)",
  region: "Veneto",
  months: [10],
  period: "Di solito in ottobre",
  tags: ["Linux", "open source"]
}
```

Campi opzionali:

- `regions`: regioni interessate quando la serie ha più sedi.

Usa `months: []` solo se il mese cambia sensibilmente tra le edizioni.
