# Progetto "Sistema Solare" — Stato

Sito enciclopedia del sistema solare. Front-end vanilla (HTML/CSS/JS, niente framework) con
video pre-renderizzati dei pianeti embeddati. Workstream parallelo in Blender produce le sfere
dei pianeti come video MP4 in loop.

- Cartella progetto: `B:/progetti/sistema_solare/` (Windows, VS Code + Live Server)
- File: `index.html`, `style.css`, `script.js`, `immagini/`, `video/`
- UI Blender in **italiano** (menu e istruzioni in terminologia italiana)
- Stile di lavoro: risposte dirette e minime; un passo alla volta in Blender con OK esplicito
  prima di agire; decisioni finali su testo/tono/design sempre a Cristian.

---

## Front-end web — stato

Sostanzialmente completo.

- **Hero (#sistema-solare)**: animazione orbite con `requestAnimationFrame`, ellissi, scala
  prospettica, `zIndex` dinamico, hover-zoom sul pianeta + tooltip con dati, freccia "scopri".
- **Enciclopedia (#enciclopedia)**: selettore pianeti, frecce avanti/indietro, navigazione da
  tastiera (← →), indicatore attivo scorrevole, note-lune con effetto typewriter.
- **Dati**: tutti gli 8 pianeti in `datiPianeti` con descrizioni IT finalizzate
  (~130–145 parole, corpo fattuale + singolo twist "Eppure", tono neutro, niente rimandi).

### Integrazione video (in corso)
- `<video id="video-pianeta" class="video-pianeta" loop muted playsinline>` dentro
  `.placeholder-video`.
- Classe `.ha-video` su `.placeholder-video` quando il pianeta ha un video (sfondo trasparente,
  niente bordo).
- `mostraPianeta(indice)`: se `dato.video` esiste → setta `videoPianeta.src` + `play()`;
  altrimenti pausa e mostra il nome.
- Campo `video: 'video/marte.mp4'` aggiunto al pianeta Marte.

### LEZIONE COMPOSITING (importante)
I render hanno **sfondo nero puro**.
- `mix-blend-mode: screen` toglie il nero **ma** tinge di blu le zone scure quando il pannello
  dietro è blu/navy → **sbagliato** per i pianeti (es. lato in ombra di Marte diventa bluastro).
- **Soluzione corretta**: sfondo di `.area-modello` **nero (#000)**. Così il nero del render si
  fonde col pannello, senza blend né maschera: colori veri, lune visibili.
- Maschera a cerchio: ok solo per pianeti **senza** lune. Con lune/anelli serve il quadrato →
  lo sfondo nero è la soluzione universale.

---

## Blender / Marte — stato

Sfera di Marte completa: texture `2k_mars.jpg`, tilt asse 25°, displacement dalla mappa lasciato
com'è (la heightmap disegna già il rilievo; niente Olympus Mons a mano).

### Video Marte + lune (velocità RISOLTA)
- Marte: 2 rotazioni asse Z (0→720°).
- Deimos: 2 orbite (0→720°).
- **Phobos: rallentato da 6 a 4 orbite** (0→1440°).
- **Tutte** le rotazioni Z portate da BEZIER a **LINEARE** (critico: loop pulito senza scatti;
  con bezier il loop "respira" alla giunzione).
- **Phobos rimpicciolito**: scala 0.0697 → **0.064**, per centrare il rapporto reale **1,8×** su
  Deimos (prima era 1,96×).
- Empties orbita: `orbita_phobos` (z≈1.735), `orbita_deimos` (z≈2.335); lune imparentate
  (orbita + tidal lock gratis).
- **Inquadratura**: Marte occupa ~62% del frame, centrato; le due lune orbitano nel margine nero
  e restano in frame per tutti i 600.

### Render
- 600 PNG `f_0001.png … f_0600.png` in `C:\Users\cris\Pictures\render_marte\`, 1080×1080, 24fps,
  EEVEE.
- Conversione:
  ```
  cd C:\Users\cris\Pictures\render_marte
  ffmpeg -y -framerate 24 -start_number 1 -i f_%04d.png -c:v libx264 -pix_fmt yuv420p -crf 18 -movflags +faststart marte.mp4
  ```
- Mettere `marte.mp4` in `B:/progetti/sistema_solare/video/`.

---

## Prossimi passi
1. Finire il test di Marte nel sito: sfondo `.area-modello` nero, togliere `mix-blend-mode`,
   verificare che `marte.mp4` sia l'export aggiornato (Marte disco + 2 lune, non un primo test
   ravvicinato).
2. Calibrazione finale della scala del video nella scheda (riquadro non troppo grande).
3. **PARALLASSE**: applicare l'effetto parallasse **anche al sistema solare** (animazione
   orbite dell'hero, `#sistema-solare`), non solo all'immagine di sfondo dietro. Da affrontare
   insieme alla fase responsive. — RICHIESTO DA CRISTIAN, DA NON DIMENTICARE.
