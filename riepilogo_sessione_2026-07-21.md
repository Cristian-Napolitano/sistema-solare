# Riepilogo sessione — 21 luglio 2026

Ambiente aperto: VS Code sulla cartella del progetto, file `index.html`,
`script.js`, `style.css` negli editor, debug/live preview avviato.
Nessun nuovo commit dall'ultima sessione: si riparte dallo stato del 20 luglio.

---

## Dove eravamo rimasti

Fase **responsive**. Il **mobile verticale** (riferimento 390×844) è definito e
calibrato. Desktop/orizzontale non ancora toccati: tutte le modifiche mobile stanno
in `@media (max-aspect-ratio: 1/1)` o su costanti attive solo quando `VERTICALE` è vero.

Ultimo lavoro fatto (sessione 20/07):
- **Hero verticale** calibrato con costanti in `script.js` (`ALLUNGA_Y_VERTICALE`,
  `FATTORE_SPILL_VERTICALE`, `DIM_PIANETI_VERTICALE`, posizione Sole, ecc.).
- **Zoom overlay mobile** (tap): disco all'80% dello schermo, uniforme; animazione
  `zoomIn` ri-triggerata a ogni tap.
- **Enciclopedia mobile** ridisegnata: selettore 4×2, video protagonista con swipe,
  scheda info a comparsa (`.area-info`) con peek/alzata e blocco scroll pagina.
- Fix zoom hover desktop: ritorno rapido (0.15s) vs zoom-in lento (0.4s).

---

## Fatto (in generale)

- Front-end vanilla sostanzialmente completo: Hero con orbite animate, enciclopedia
  con selettore/frecce/tastiera, dati completi degli 8 pianeti.
- Integrazione video pianeti (Marte + lune, Urano/Nettuno, ecc.) con lezione
  compositing risolta (sfondo nero su `.area-modello`).
- Mobile verticale calibrato (vedi sopra).

---

## Da fare / prossimi punti

1. **Layout orizzontale** (era il "domani" della sessione precedente): definirlo senza
   far regredire il desktop.
2. **Altre risoluzioni**: 360×800, tablet portrait 820×1180, tablet landscape,
   laptop 1440×900, desktop 1920×1080. Verificare che il desktop non sia regredito.
3. Da verificare/tarare: descrizioni lunghe che senza scroll potrebbero tagliarsi;
   `DISCO_FRAC` di Saturno; eventuali lune ancora fuori dal frame.
4. **PARALLASSE** anche sull'hero (`#sistema-solare`), non solo sullo sfondo —
   richiesto da Cristian, da non dimenticare.
5. Idee in sospeso (`IDEE_RESPONSIVE.md`): tastino "ruota schermo" portrait/landscape;
   valutare rimozione header.
