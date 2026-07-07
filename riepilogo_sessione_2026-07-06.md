# Sistema Solare — Riepilogo sessione 6 luglio 2026

## Contesto
Tornati sul front-end dopo aver completato modelli e video dei pianeti in Blender.

## 1. Revisione della lista "cose da fare"
Letti i file reali (`index.html`, `script.js`, `style.css`): la lista iniziale era basata su memoria vecchia ed era superata. In realtà erano **già fatti**: Marte, il supporto multi-pianeta (`forEach` + array `pianeti[]`), i tooltip, l'hover che ferma l'animazione, l'enciclopedia, la navigazione da tastiera, i video collegati.

**Lista aggiornata del front-end:**
1. ~~Bug nota-lune~~ ✅ fatto (vedi sotto)
2. Misuratore di grandezza (estetico, non funzionale)
3. Responsive design
4. Calibrazione finale scala pianeti (Saturno 150 > Giove 110)

Tolti dalla lista: parallasse (inutile con lo scroll corto a due sezioni) e test video (già ok).

## 2. Fix bug nota-lune ✅
Problema: i testi lunghi dei satelliti (Giove, Urano) venivano tagliati a destra invece di andare a capo; asterisco e testo si muovevano.

Modifiche in `style.css`:
- `.testo-lune`: `white-space: normal`, `flex: 1`, rivelazione con sola `opacity` (rimosso lo slide `max-width`), `line-height: 1.5`
- `.note-lune`: `align-items: flex-start` (asterisco fermo), `width: calc(100% - 48px)` (va a capo prima del cambio colore, resta nel pannello navy), `min-height: 1.4rem` (regolata insieme da 2.4rem → 1.4rem; coincide bene con Urano)

Risultato: il testo va a capo dentro la metà sinistra, asterisco e scritta restano fermi.

## 3. Vincolo di design fissato
La nota-lune può allungarsi ma **non deve superare la metà pagina** (il confine dove cambia colore tra pannello navy e pannello info). Lo spazio a destra è riservato al futuro misuratore di grandezza.

## 4. Prossimo punto: misuratore di grandezza
Da decidere (Cristian sceglie con calma):
- **Forma**: dischi affiancati in scala / barra-righello / cerchio + etichetta moltiplicatore
- **Riferimento**: Terra / Giove (tetto) / pianeta più grande in vista
- **Posizione**: sopra la nota-lune, nel pannello sinistro

Nessun codice ancora scritto per il misuratore: si parte quando forma e riferimento sono decisi.
