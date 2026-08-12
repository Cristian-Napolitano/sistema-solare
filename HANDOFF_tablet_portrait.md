# Handoff — Sistema Solare, fase responsive

Front-end vanilla HTML/CSS/JS in `B:/progetti/sistema_solare/`. Fase: responsive.
Regole: italiano diretto, un passo alla volta con OK, non far regredire telefono/desktop/laptop.
Layout scelto in `setup()` di `script.js` per orientamento/altezza/tocco.

## Distinzione dispositivi (chiave di tutto)
- Telefono verticale -> ramo VERTICALE (tarato 390px).
- Telefono coricato (`innerHeight < 600`) -> ramo ORIZZ_MOBILE.
- Tablet/mini-tablet verticale (`innerWidth >= 520`, es. Surface Duo 540, ancora VERTICALE) -> `TABLET_VERT`.
- Tablet landscape (touch = `hover:none`, non telefono) -> `TABLET_LAND`.
- Laptop / desktop (mouse = `hover:hover`) -> `SCALA = 1`, esperienza piena identica tra loro.
La distinzione tablet vs laptop è fatta sul **tocco** (`hover:none`), non sulla larghezza.

## Fatto — tablet PORTRAIT 820×1180
Set dedicato nel ramo VERTICALE, commutato da `TABLET_VERT`. Costanti in `script.js`:
`FATTORE_SPILL_TABLET 1.9`, `ALLUNGA_Y_TABLET 1.0`, `DIM_PIANETI_TABLET 2.5`, `DIM_SOLE_TABLET 1.3`,
`ZOOM_LARGH_TABLET 0.62`, `RIMPICC_TABLET {terra:0.85, giove:0.85}` (per-pianeta, si toccavano).
Variabili attive `V*` commutate in `setup()`. Finestra info ingrandita + testi sezione 2 ingranditi
in `style.css`, blocco `@media (max-aspect-ratio:1/1) and (min-width:700px)` (descrizione 1.55rem).
Hitbox: area di tocco = 85% del disco reale (min 56px), solo tablet.

## Fatto — tablet LANDSCAPE 1180×820
Nuovo ramo `TABLET_LAND` in `setup()`: `SCALA = min(1, innerWidth / LARGH_RIFERIMENTO)` con
`LARGH_RIFERIMENTO = 1500` (più basso = pianeti più grandi). Mostra la stessa scena del desktop, scalata.
Tap: esteso a `TABLET_LAND` il freno velocità (`VEL_MAX_LINEARE`) + l'area di tocco uniforme
(CSS `@media (hover:none) and (min-aspect-ratio:1/1) and (min-height:600px)`), così Nettuno è toccabile.
Tasto rotazione `#ruota-manuale`: ora compare su tutto il touch (`hover:none`), nascosto su mouse.
Sezione 2 (blocco tablet-landscape): video `#video-pianeta` 560px, frecce nascoste (swipe/selettore),
asterisco spostato in alto sopra il pianeta e apribile al tap, descrizione `.area-info { overflow-y:auto }`.

Manopole a occhio: le costanti sopra. Sintassi JS verificata (`node --check`).

## Da fare (prossima sessione)
1. **Verifica su device reali/aspect ratio vari**: telefoni piccoli (360×640), tablet diversi
   (iPad 810×1080, iPad Pro 1024/1366), pieghevoli. Controllare che nessuno cada nel ramo sbagliato.
   - ⚠️ **375×667 (iPhone SE / 8) — DA SISTEMARE**: Cristian ha notato delle lacune a questa
     risoluzione. Aspect ratio 0.562, ramo VERTICALE tarato su 390px → più stretto e più corto,
     probabile causa dei problemi di layout. Da verificare e correggere.
2. **Deploy** gratuito online (GitHub Pages / Netlify / Vercel).
