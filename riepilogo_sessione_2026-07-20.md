# Riepilogo sessione — 20 luglio 2026

Fase: **responsive**. Oggi definito il **mobile verticale** (riferimento 390×844).
Il desktop/orizzontale non è stato toccato: tutte le modifiche stanno in
`@media (max-aspect-ratio: 1/1)` o su costanti usate solo quando `VERTICALE` è vero.

---

## Fatto oggi

### Fix zoom hover (desktop, non responsive)
Il ritorno del pianeta alla dimensione naturale era lento come lo zoom-in.
- `mouseenter` (ramo desktop): `transition: transform 0.4s ease` (zoom-in resta lento)
- `mouseleave`: `transition: transform 0.15s ease` (ritorno veloce)

### Hero verticale — calibrazione (costanti in `script.js`)
- `ALLUNGA_Y_VERTICALE = 1.1` — orbite quasi circolari (rapporto altezza/larghezza; 1.0 = cerchio). Sostituisce il vecchio `0.85` fisso in `update()` e `setup()`.
- `FATTORE_SPILL_VERTICALE = 2.7` — orbite più grandi/distanziate
- `DIM_PIANETI_VERTICALE = 2.3` — dimensione pianeti
- `COMPRESSIONE_VERTICALE = 0` — proporzioni reali (Mercurio piccolo, così non tocca i vicini)
- `BOOST_FUORI_SCHERMO = 10` — riduce i "momenti morti" (pianeti accelerano fuori schermo)
- Sole: `SOLE_X_VERTICALE = 0.5`, `SOLE_Y_VERTICALE = 0.15` (centrato in alto)

### Zoom overlay mobile (tap)
- `ZOOM_LARGH_VERTICALE = 0.8` — il **disco** occupa l'80% dello schermo, uniforme per tutti
- `DISCO_FRAC` (mappa) — quanto il disco riempie ciascun PNG, per rendere i dischi uguali. Saturno `0.64` include gli anelli → da tarare a occhio.
- `PAD_SOTTO` (mappa) — margine trasparente sotto il disco: abbassa l'overlay così è il disco (non il bordo immagine) ad arrivare sopra la barra info
- `ZOOM_SOVRAPP_BARRA = 25` — l'overlay scavalca leggermente la barra info
- Animazione `@keyframes zoomIn` ri-triggerata a ogni tap → transizione fluida cambiando pianeta

### Enciclopedia mobile — ridisegnata (CSS media query + JS)
- **Selettore**: griglia 4×2 (niente scroll), nomi opacità 0.72, indicatore nascosto, tap-highlight/outline off
- **Video protagonista**: `#video-pianeta` scalato al `105%` (ritaglia i bordi neri del frame). Frecce nascoste, cambio pianeta con **swipe** sul video o dal selettore.
  - Saturno (`.con-anelli`): video 100% (frame intero, anelli interi)
  - Urano (`.anelli-urano`): box alta `56vh`, video fitta l'altezza e ritaglia i lati
  - Le lune orbitano nei margini del frame → video tenuto piccolo per non tagliarle
- **Sfondo** sezione/contenuto uniformato a `#0a0e2a` (come l'area video desktop)
- **Scheda a comparsa** (`.area-info`, `position: absolute` → compare solo nella 2ª sezione):
  - altezza `85vh`, peek = `translateY(calc(85vh - 275px))`, `contenuto-scheda` ha `padding-bottom: 275px` (spinge il video su)
  - **peek (chiusa)**: maniglia + nome + misuratore + note lune (`#lune-mobile`)
  - **alzata**: solo la descrizione, centrata (`margin: auto 0`), niente scroll (`overflow: hidden`); misuratore e lune spariscono
  - JS `apriSlide()`/`chiudiSlide()` **bloccano lo scroll della pagina** (`body overflow hidden`) così lo swipe giù chiude senza scappare nella Hero
  - Misuratore nella scheda è un **duplicato mobile** (id `mis-*-m`), quindi il desktop resta intatto

---

## Da fare (prossime sessioni)
1. **Layout orizzontale** (domani).
2. **Altre risoluzioni**: 360×800, tablet portrait 820×1180, tablet landscape, laptop 1440×900, desktop 1920×1080. Verificare che il **desktop non sia regredito**.
3. Da verificare/tarare: descrizioni lunghe che senza scroll potrebbero tagliarsi; `DISCO_FRAC` di Saturno; eventuali lune ancora fuori dal frame.
4. Idee in sospeso → `IDEE_RESPONSIVE.md` (tastino "ruota schermo", forse togliere l'header).
