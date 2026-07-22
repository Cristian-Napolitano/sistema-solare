# Riepilogo sessione — 22 luglio 2026

Ambiente aperto: VS Code sulla cartella del progetto, file `index.html`,
`script.js`, `style.css` negli editor, debug avviato (Launch Chrome against
localhost / live preview).
Nessun nuovo commit dall'ultima sessione (ultimo: `e8812b3` — video Urano/Nettuno,
scala comparativa pianeti, rimozione preview obsolete): si riparte dallo stato del 21 luglio.

---

## Dove eravamo rimasti

Fase **responsive**, ben avanzata. NOTA: i file sono molto più avanti dei riepiloghi
precedenti — tutto il lavoro responsive (~1500 righe) è **non committato** (git fermo
al commit `e8812b3` del 7 luglio).

Stato reale del codice:
- **Mobile verticale** (390×844): definito e calibrato (costanti `*_VERTICALE`,
  `SCALA`, posizione Sole, `ALLUNGA_Y_VERTICALE`, ecc.).
- **Layout orizzontale / landscape mobile**: GIÀ IMPLEMENTATO e in fase di
  calibrazione. Costanti dedicate in `script.js`: `FATTORE_SPILL_ORIZZONTALE`,
  `DIM_PIANETI_ORIZZONTALE`, `COMPRESSIONE_ORIZZONTALE`, `PROSPETTIVA_ORIZZ_MOBILE`,
  `ZOOM_FRAC_ORIZZ_MOBILE`, `ALT_LANDSCAPE_MOBILE`; flag `ORIZZ_MOBILE` che rimpicciolisce
  per far entrare tutte le orbite (Urano/Nettuno cliccabili).
- **Tasto "ruota schermo" (`#ruota-manuale`)**: IMPLEMENTATO (non più solo un'idea).
  Overlay di transizione nero (`gira-sx`/`gira-dx`, `eseguiTransizione`), rotazione
  automatica su `resize` con `orientamentoCorrente`, toggle manuale col tasto.
- Zoom overlay mobile (tap) ed enciclopedia mobile (selettore 4×2, video con swipe,
  scheda `.area-info` a comparsa) già a posto.

---

## Fatto (in generale)

- Front-end vanilla sostanzialmente completo: Hero con orbite animate, enciclopedia
  con selettore/frecce/tastiera, dati completi degli 8 pianeti.
- Integrazione video pianeti (Marte + lune, Urano/Nettuno, ecc.) con lezione
  compositing risolta (sfondo nero su `.area-modello`).
- Mobile verticale calibrato (vedi sopra).

---

## Da fare / prossimi punti

1. **PARALLASSE sull'hero** (`#sistema-solare`), non solo sullo sfondo — richiesto
   da Cristian, ancora NON presente nel codice. Priorità.
2. **Taratura landscape mobile**: rifinire a occhio le costanti `*_ORIZZONTALE`
   (dimensioni pianeti, compressione, prospettiva) e la transizione ruota.
3. **Altre risoluzioni**: 360×800, tablet portrait 820×1180, tablet landscape,
   laptop 1440×900, desktop 1920×1080. Verificare che il desktop non sia regredito.
4. Da verificare/tarare: descrizioni lunghe che senza scroll potrebbero tagliarsi;
   `DISCO_FRAC` di Saturno; eventuali lune ancora fuori dal frame.
5. **Committare il lavoro responsive** (~1500 righe non salvate; git fermo al 7 luglio).
6. Idea in sospeso (`IDEE_RESPONSIVE.md`): valutare rimozione header.
