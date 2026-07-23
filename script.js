window.addEventListener('load', () =>{
    const sole = document.querySelector('.sole');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const section = document.querySelector('#sistema-solare');
    const tooltip = document.querySelector('#tooltip');
    const indicatore = document.querySelector('.indicatore-attivo');
    const testoLune = document.querySelector('#testo-lune');
    const contenitoreVideo = document.querySelector('.placeholder-video');
    const videoPianeta = document.querySelector('#video-pianeta');


const datiPianeti = [
    {
        nome: 'mercurio', raggioX: 180, raggioY: 35, velocita: 0.012, dimensione: 28,
        nomeEsteso: 'Mercurio',
        distanza: '57,9 milioni di km',
        diametro: '4.879 km',
        anno: '88 giorni',
        lune: '0',
        luneNotevoli: 'Satelliti — nessuno',
        curiosita: 'Il pianeta più piccolo e veloce del sistema solare.',
        descrizione : `Mercurio è il pianeta più vicino al Sole e il più piccolo del sistema solare, più piccolo persino di lune come Ganimede e Titano. Compie un'orbita completa in appena 88 giorni, mentre per ruotare su sé stesso ne impiega 59: una giornata mercuriana dura quasi quanto due dei suoi anni. È anche il pianeta più veloce, e per la sua rapidità i romani lo intitolarono al messaggero degli dèi. Senza atmosfera, è un mondo di contrasti estremi: nelle zone illuminate si raggiungono i 430°C, in quelle in ombra si scende a -180°C. Sotto la superficie nasconde un enorme nucleo di ferro che lo rende quasi denso quanto la Terra, nonostante le dimensioni ridotte. Eppure, nei crateri polari in ombra perpetua, le sonde hanno trovato ghiaccio d'acqua: persino nel forno del sistema solare c'è un angolo dove la luce non è mai arrivata.`,
        video: 'video/mercurio.mp4',
    },
    {
        nome: 'venere', raggioX: 270, raggioY: 60, velocita: 0.009, dimensione: 50,
        nomeEsteso: 'Venere',
        distanza: '108,2 milioni di km',
        diametro: '12.104 km',
        anno: '225 giorni',
        lune: '0',
        luneNotevoli: 'Satelliti — nessuno',
        curiosita: 'Il pianeta più caldo, ruota al contrario.',
        descrizione: `Venere è il secondo pianeta dal Sole, e per dimensioni e composizione è quasi un gemello della Terra. Eppure dietro questa somiglianza si nasconde il mondo più inospitale del sistema solare: con i suoi 470°C di superficie è il pianeta più caldo in assoluto. La colpa è di un'atmosfera densissima di anidride carbonica, che intrappola il calore in un effetto serra senza ritorno, e di nuvole di acido solforico che lo avvolgono in una foschia color ocra. A rendere tutto più straniante, Venere ruota al contrario rispetto a quasi tutti gli altri pianeti, e così lentamente che un suo giorno dura più di un suo anno. Eppure sono proprio quelle nuvole soffocanti a rimandare indietro gran parte della luce solare, rendendo Venere il terzo oggetto più luminoso del nostro cielo dopo il Sole e la Luna.`,
        video: 'video/venere.mp4' ,
    },
    {
        nome: 'terra', raggioX: 380, raggioY: 90, velocita: 0.007, dimensione: 55,
        nomeEsteso: 'Terra',
        distanza: '149,6 milioni di km',
        diametro: '12.742 km',
        anno: '365 giorni',
        lune: '1',
        luneNotevoli: 'Satelliti — la Luna',
        curiosita: 'L\'unico pianeta conosciuto a ospitare la vita.',
        descrizione: `La Terra è il terzo pianeta dal Sole e, per quanto ne sappiamo, l'unico a ospitare forme di vita. La sua distanza dal Sole permette all'acqua di restare liquida sulla superficie, che ne copre oltre due terzi: un caso unico nel sistema solare. Il nucleo genera un campo magnetico che devia il vento solare e limita l'erosione dell'atmosfera. È inoltre l'unico pianeta noto con una crosta spezzata in placche in lento movimento: scorrono l'una contro l'altra a una velocità impercettibile, eppure sufficiente a non lasciare mai alla superficie una forma definitiva. Ha un solo satellite naturale, la Luna, grande rispetto al pianeta e legata alla stabilità del suo asse. Una particolarità riguarda l'atmosfera: l'ossigeno che ne fa parte non era presente in origine, ma è il prodotto dell'attività degli organismi viventi nel corso di miliardi di anni.`, 
        video: 'video/terra.mp4' ,
    },
    {
        nome: 'marte', raggioX: 490, raggioY: 120, velocita: 0.006, dimensione: 38,
        nomeEsteso: 'Marte',
        distanza: '227,9 milioni di km',
        diametro: '6.779 km',
        anno: '687 giorni',
        lune: '2',
        luneNotevoli: 'Satelliti — Phobos e Deimos (piccole e irregolari)',
        curiosita: 'Il "pianeta rosso", ospita il vulcano più alto del sistema solare.',
        descrizione: `Marte è il quarto pianeta dal Sole, grande circa la metà della Terra. È chiamato "pianeta rosso" perché la sua superficie è ricoperta di ossido di ferro, cioè ruggine. Un suo giorno dura poco più di 24 ore, ma l'anno è lungo quasi il doppio del nostro: 687 giorni. Pur essendo piccolo, ospita i rilievi più estremi del sistema solare: l'Olympus Mons, un vulcano alto circa 22 chilometri — due volte e mezzo l'Everest — e le Valles Marineris, un sistema di canyon lungo oltre quattromila chilometri. L'atmosfera è molto sottile e le temperature medie restano sotto i -60°C, con tempeste di polvere che possono coprire l'intero pianeta per settimane. Lo accompagnano due piccole lune, Phobos e Deimos, probabilmente asteroidi catturati. Eppure la sua superficie conserva i segni di antichi fiumi e bacini prosciugati: la prova che, miliardi di anni fa, su Marte l'acqua scorreva allo stato liquido.`,
        video: 'video/marte.mp4' ,
    },
    {
        nome: 'giove', raggioX: 640, raggioY: 160, velocita: 0.004, dimensione: 110,
        nomeEsteso: 'Giove',
        distanza: '778,5 milioni di km',
        diametro: '139.820 km',
        anno: '12 anni',
        lune: '95',
        luneNotevoli: 'Satelliti — Io (vulcanica), Europa (oceano sotterraneo), Ganimede (la più grande), Callisto (craterizzata)',
        curiosita: 'Il gigante del sistema solare, con la famosa Grande Macchia Rossa.',
        descrizione: `Giove è il quinto pianeta dal Sole e il più grande del sistema solare: ha una massa superiore a quella di tutti gli altri pianeti messi insieme, e al suo interno ci starebbero oltre milletrecento Terre. Non ha una superficie solida — è una sfera di idrogeno ed elio avvolta da bande di nubi in perenne movimento. Nonostante le dimensioni enormi, ruota più in fretta di ogni altro pianeta: un suo giorno dura meno di dieci ore. La sua caratteristica più nota è la Grande Macchia Rossa, una tempesta più larga della Terra che gli astronomi osservano da almeno tre secoli. Eppure la sua scoperta più importante non riguarda il pianeta in sé: nel 1610 Galileo Galilei vide quattro punti di luce girargli attorno — i primi mondi mai osservati orbitare qualcosa che non fosse la Terra, una prova che contribuì a smontare l'idea che tutto ruotasse intorno a noi.`,
        video: 'video/giove.mp4' ,
    },
    {
        nome: 'saturno', raggioX: 800, raggioY: 200, velocita: 0.003, dimensione: 150, zoomScala: 2.3,
        nomeEsteso: 'Saturno',
        distanza: '1,4 miliardi di km',
        diametro: '116.460 km',
        anno: '29 anni',
        lune: '146',
        luneNotevoli: 'Satelliti — Titano (atmosfera densa), Encelado (geyser di ghiaccio)',
        curiosita: 'Famoso per i suoi spettacolari anelli di ghiaccio e roccia.',
        descrizione: `Saturno è il sesto pianeta dal Sole e il secondo per dimensioni del sistema solare. È un gigante gassoso di idrogeno ed elio, ed è anche il meno denso in assoluto. La sua caratteristica più riconoscibile sono gli anelli, una distesa larga centinaia di migliaia di chilometri ma spessa, in media, solo poche decine di metri, composta da ghiaccio e roccia. Più sorprendente ancora è ciò che si trova su uno dei suoi poli: una corrente atmosferica che, vista dall'alto, traccia un esagono quasi perfetto, con sei lati di circa 13.000 chilometri ciascuno, in rotazione costante da almeno quarant'anni — un'anomalia geometrica così rigida e duratura che ancora oggi non ha una spiegazione definitiva. Eppure quegli stessi anelli, su scala astronomica, sono recenti e probabilmente destinati a scomparire: la gravità di Saturno li sta lentamente attirando verso di sé, e si stima che fra qualche centinaio di milioni di anni non saranno più visibili.`,
        video: 'video/saturno.mp4' ,
    },
    {
        nome: 'urano', raggioX: 940, raggioY: 240, velocita: 0.010, dimensione: 58,
        nomeEsteso: 'Urano',
        distanza: '2,9 miliardi di km',
        diametro: '50.724 km',
        anno: '84 anni',
        lune: '28',
        luneNotevoli: 'Satelliti — Miranda (canyon enormi), Titania (la più estesa), Oberon (craterizzata, la più esterna)',
        curiosita: 'Inclinato di 98°, ruota letteralmente "sdraiato" sul suo fianco.',
        descrizione: `Urano è il settimo pianeta dal Sole, il primo dei due giganti di ghiaccio. È composto soprattutto da acqua, metano e ammoniaca, allo stato di fluidi densi sotto enormi pressioni. È proprio il metano dell'atmosfera ad assorbirne la luce rossa e a dargli l'inconfondibile colore azzurro-verde. La sua caratteristica più strana, però, è l'inclinazione dell'asse: 98 gradi, quasi adagiato sul piano dell'orbita, probabilmente in seguito a un'antica collisione con un corpo grande quanto la Terra. Questa posizione produce stagioni estreme: ai poli, estate e inverno durano 42 anni ciascuno. A tutto questo si aggiunge un dettaglio storico: Urano è il primo pianeta scoperto col telescopio, individuato da William Herschel nel 1781. Prima di allora, nessuno sospettava che oltre Saturno potesse esistere altro.`, 
        video: 'video/urano.mp4' ,
    },
    {
        nome: 'nettuno', raggioX: 1080, raggioY: 280, velocita: 0.012, dimensione: 65,
        nomeEsteso: 'Nettuno',
        distanza: '4,5 miliardi di km',
        diametro: '49.244 km',
        anno: '165 anni',
        lune: '16',
        luneNotevoli: 'Satelliti — Tritone (orbita retrograda)',
        curiosita: 'Ha i venti più veloci del sistema solare, fino a 2.100 km/h.',
        descrizione: `Nettuno è l'ottavo e ultimo pianeta dal Sole, e a questa distanza riceve meno dell'uno per cento della luce che raggiunge la Terra. Si distingue per un blu profondo e intenso, dovuto al metano della sua atmosfera, percorsa da enormi tempeste come la Grande Macchia Scura, un vortice grande quanto la Terra che appare e svanisce nel giro di pochi anni. Eppure, pur essendo il pianeta più lontano e più freddo, ospita i venti più veloci del sistema solare: raffiche supersoniche fino a 2.000 km/h, la cui energia resta in gran parte un mistero. La sua luna maggiore, Tritone, orbita in senso retrogrado, al contrario della rotazione del pianeta: probabilmente un corpo ghiacciato catturato. Fu anche il primo pianeta scoperto con il calcolo: nel 1846 la matematica ne predisse la posizione, e il telescopio lo trovò proprio lì.`, 
        video: 'video/nettuno.mp4' ,
    }
]


let soleCentroX;
let soleCentroY;
let pianetaEvidenziato = null;
const ZOOM_FOCUS = 350;
const ZOOM_FRAC_ORIZZ_MOBILE = 0.6;  // disco al focus = frazione dell'altezza schermo, solo landscape mobile
let raggioFocus = ZOOM_FOCUS;         // raggio effettivo del focus corrente (per posizionare la finestra info)
const RAGGIO_MAX = 1080;
const FATTORE_SPILL_VERTICALE = 2.7;
const FATTORE_SPILL_ORIZZONTALE = 0.95; // <=1: tutte le orbite entrano nello schermo (Urano/Nettuno cliccabili); >1 = sbordano
const ALT_LANDSCAPE_MOBILE = 600;       // sotto quest'altezza (px) è un telefono in landscape: si scala. Sopra (desktop/tablet) resta SCALA=1
const DIM_PIANETI_ORIZZONTALE = 1.9;    // ingrandimento dei pianeti solo in landscape mobile (da tarare a occhio)
const COMPRESSIONE_ORIZZONTALE = 0.6;   // 0 = taglie reali (Giove enorme), 1 = tutti uguali; avvicina le dimensioni in landscape mobile
const PROSPETTIVA_ORIZZ_MOBILE = 0.5;   // quanto conta l'effetto profondità in landscape mobile: 1 = come desktop (davanti 2×), 0 = piatto
const SOLE_X_VERTICALE = 0.5;   // 0.5 = centro, 0.28 = alto-sinistra
const SOLE_Y_VERTICALE = 0.15;  // più basso = più in alto (0.5 = centro)
const ALLUNGA_Y_VERTICALE = 1.1; // rapporto altezza/larghezza orbite: 1.0 = cerchio, >1 = ellisse verticale (era 0.85)
const DIM_PIANETI_VERTICALE = 2.3;  // ingrandimento pianeti solo in verticale
const DIM_SOLE_VERTICALE = 1.3;     // ingrandimento Sole solo in verticale
const COMPRESSIONE_VERTICALE = 0; // 0 = dimensioni reali, 1 = tutti uguali (piccoli più grandi)
const MEDIA_DIM = 70;               // dimensione media di riferimento per la compressione
const BOOST_FUORI_SCHERMO = 10;     // quanto accelerano i pianeti quando escono dallo schermo (solo verticale)
const VEL_MAX_LINEARE = 2.0;        // px/frame max sullo schermo: rallenta i pianeti esterni (Urano/Nettuno) così sono toccabili
const DIAM_TAP = 56;                // diametro (px schermo) dell'area di tocco circolare, uguale per tutti i pianeti su mobile
const ZOOM_LARGH_VERTICALE = 0.8;   // frazione di schermo occupata dal DISCO del pianeta allo zoom (uguale per tutti)
const ZOOM_SOVRAPP_BARRA = 25;      // px di sovrapposizione dell'overlay sopra la barra info
// quanto il disco opaco riempie ciascun PNG (misurato): serve a rendere i dischi
// tutti della stessa grandezza allo zoom, compensando l'inquadratura diversa dei file.
// Saturno (0.639) include gli anelli -> valore da tarare a occhio a parte.
const DISCO_FRAC = {
    mercurio: 0.92, venere: 0.91, terra: 1.0, marte: 1.0,
    giove: 0.86, saturno: 0.64, urano: 0.82, nettuno: 0.87,
};
// margine trasparente sotto il disco in ciascun PNG (frazione della larghezza immagine):
// serve ad abbassare l'overlay così è il disco, non il bordo immagine, ad arrivare sopra la barra
const PAD_SOTTO = {
    mercurio: 0.039, venere: 0.043, terra: 0, marte: 0,
    giove: 0.094, saturno: 0.180, urano: 0.100, nettuno: 0.061,
};
const MARGINE_BOOST = 90;           // quanto oltre il bordo deve stare il centro prima di accelerare (px)
let SCALA = 1;
let VERTICALE = false;
let ORIZZ_MOBILE = false;   // true = telefono in landscape (orizzontale piccolo)
// orientamento corrente della pagina (true = verticale). Sorgente unica: la segue il dispositivo
// oppure la forza il tasto di rotazione manuale.
let orientamentoCorrente = window.innerWidth < window.innerHeight;

class Pianeta{
    constructor(elemento, raggioX, raggioY, velocita, angoloIniziale, dimensioneBase){
    this.elemento = elemento;
    this.raggioX = raggioX;
    this.raggioY = raggioY;
    this.velocita = velocita;
    this.angolo = angoloIniziale;
    this.dimensioneBase = dimensioneBase;
    }



    update() {

        if (pianetaEvidenziato === this){
            return;
        }

        const sinA = Math.sin(this.angolo);
        const rY = VERTICALE ? this.raggioX * ALLUNGA_Y_VERTICALE : this.raggioY;
        const x = Math.cos(this.angolo) * this.raggioX * SCALA;
        const y = sinA * rY * SCALA;

        const px = soleCentroX + x;
        const py = soleCentroY + y;

        if (pianetaEvidenziato === null) {
            let v = this.velocita;
            if (VERTICALE) {
                // cap velocità lineare: i pianeti con orbita grande (Urano/Nettuno) sfrecciano troppo per essere toccati
                const raggioPx = this.raggioX * SCALA;
                const vMax = VEL_MAX_LINEARE / raggioPx;
                if (v > vMax) v = vMax;
                const fuori = px < -MARGINE_BOOST || px > window.innerWidth + MARGINE_BOOST || py < -MARGINE_BOOST || py > window.innerHeight + MARGINE_BOOST;
                if (fuori) v *= BOOST_FUORI_SCHERMO;
            }
            this.angolo -= v;
        }

        let perspettiva = VERTICALE ? 1 : (0.6 + ((sinA + 1) / 2) * 1.4);
        if (ORIZZ_MOBILE) perspettiva = 1 + (perspettiva - 1) * PROSPETTIVA_ORIZZ_MOBILE;  // profondità attenuata sul telefono

        let dimFatt = 1;
        if (VERTICALE) {
            const dimEff = this.dimensioneBase * (1 - COMPRESSIONE_VERTICALE) + MEDIA_DIM * COMPRESSIONE_VERTICALE;
            dimFatt = DIM_PIANETI_VERTICALE * (dimEff / this.dimensioneBase);
        } else if (ORIZZ_MOBILE) {
            // compressione: avvicina le taglie alla media, così Giove/Saturno non dominano
            const dimEff = this.dimensioneBase * (1 - COMPRESSIONE_ORIZZONTALE) + MEDIA_DIM * COMPRESSIONE_ORIZZONTALE;
            dimFatt = DIM_PIANETI_ORIZZONTALE * (dimEff / this.dimensioneBase);
        }

        this.elemento.style.left = `${px}px`;
        this.elemento.style.top = `${py}px`;
        const scalaFinale = perspettiva * SCALA * dimFatt;
        this.elemento.style.transform = `translate(-50%, -50%) scale(${scalaFinale})`;
        // area di tocco: la ::after è scalata dal div, quindi la dimensiono all'inverso
        // così a schermo resta sempre DIAM_TAP px per ogni pianeta (uniforme, centrata sul disco)
        this.elemento.style.setProperty('--hit', `${DIAM_TAP / scalaFinale}px`);
        this.elemento.style.zIndex = y > 0 ? 20 : 5;
    }

}


const pianeti =[];

const zoomOverlay = document.createElement('img');
zoomOverlay.className = 'zoom-overlay';
document.body.appendChild(zoomOverlay);

// modalità tap: telefoni (niente hover) OPPURE schermo in verticale/basso (stesso
// trigger del layout mobile). Controllata a ogni evento così reagisce al resize live.
function modalitaTap() {
    return window.matchMedia('(hover: none)').matches
        || window.matchMedia('(max-aspect-ratio: 1/1)').matches;
}

function deseleziona() {
    pianetaEvidenziato = null;
    zoomOverlay.classList.remove('visibile');
    tooltip.className = 'tooltip-nascosto';
}

// in modalità tap: tap sullo sfondo per deselezionare
section.addEventListener('click', () => {
    if (modalitaTap() && pianetaEvidenziato) deseleziona();
});

datiPianeti.forEach((dato, indice)=> {
    const div = document.createElement('div');
    div.className = 'pianeta';

    const img = document.createElement('img');
    img.src = `immagini/${dato.nome}.png`;
    img.alt = dato.nome;
    img.style.width = `${dato.dimensione}px`;
    
    div.appendChild(img);
    section.appendChild(div);

    const angoloIniziale = (indice / datiPianeti.length) * Math.PI * 2; 
    const p = new Pianeta(div, dato.raggioX, dato.raggioY, dato.velocita, angoloIniziale, dato.dimensione);
    pianeti.push(p);

    const attivaPianeta = () => {
        pianetaEvidenziato = p;
        // larghezza overlay tarata sul disco (uniforme per tutti), con tetto di sicurezza
        const larghOverlay = Math.min(window.innerWidth * 1.8, window.innerWidth * ZOOM_LARGH_VERTICALE / (DISCO_FRAC[dato.nome] || 1));
        if (VERTICALE) {
            zoomOverlay.src = `immagini/${dato.nome}.png`;
            zoomOverlay.style.width = `${larghOverlay}px`;
            zoomOverlay.classList.add('visibile');
            // ri-triggera l'animazione d'ingresso a ogni attivazione: così cambiando pianeta
            // c'è una transizione fluida invece di uno scambio istantaneo
            zoomOverlay.style.animation = 'none';
            void zoomOverlay.offsetWidth;
            zoomOverlay.style.animation = 'zoomIn 0.28s cubic-bezier(0.22, 1, 0.36, 1)';
        } else {
            div.style.transition = 'transform 0.4s ease'
            raggioFocus = ORIZZ_MOBILE ? Math.min(ZOOM_FOCUS, window.innerHeight * ZOOM_FRAC_ORIZZ_MOBILE) : ZOOM_FOCUS;
            const fattoreZoom = raggioFocus / dato.dimensione;
            div.style.transform = `translate(-50%, -50%) scale(${fattoreZoom})`;
            div.style.zIndex = 100;
        }

        tooltip.innerHTML = `
            <h2>${dato.nomeEsteso}</h2>
            <div class="info-riga">
                <span class="info-etichetta">Distanza dal Sole</span>
                <span class="info-valore">${dato.distanza}</span>
            </div>
            <div class="info-riga">
                <span class="info-etichetta">Diametro</span>
                <span class="info-valore">${dato.diametro}</span>
            </div>
            <div class="info-riga">
                <span class="info-etichetta">Anno</span>
                <span class="info-valore">${dato.anno}</span>
            </div>
            <div class="info-riga">
                <span class="info-etichetta">Lune</span>
                <span class="info-valore">${dato.lune}</span>
            </div>
            <div class="curiosita">${dato.curiosita}</div>
        `;

        posizionaTooltip(div);
        tooltip.className ='tooltip-visibile';

        // in verticale: ancora il DISCO appena sopra la barra info (che ha altezza variabile),
        // abbassando l'immagine del suo margine trasparente inferiore
        if (VERTICALE) {
            const rectTip = tooltip.getBoundingClientRect();
            const padSotto = larghOverlay * (PAD_SOTTO[dato.nome] || 0);
            zoomOverlay.style.bottom = `${window.innerHeight - rectTip.top - ZOOM_SOVRAPP_BARRA - padSotto}px`;
        }
    };

    // hover solo quando NON siamo in modalità tap; il tap agisce solo in modalità tap.
    // Entrambi sempre legati, con guardia live, così il resize funziona senza ricaricare.
    div.addEventListener('mouseenter', () => { if (!modalitaTap()) attivaPianeta(); });
    div.addEventListener('mouseleave', () => { if (!modalitaTap()) { div.style.transition = 'transform 0.15s ease'; deseleziona(); } });
    div.addEventListener('click', (e) => {
        if (!modalitaTap()) return;
        e.stopPropagation();
        if (pianetaEvidenziato === p) deseleziona();
        else attivaPianeta();
    });
});

function posizionaTooltip(divPianeta){
    if (VERTICALE) {
        tooltip.style.left = '';
        tooltip.style.top = '';
        tooltip.style.transform = '';
        return;
    }
    const pianetaX = parseFloat(divPianeta.style.left);
    const pianetaY = parseFloat(divPianeta.style.top);

    const offsetX = (raggioFocus / 2) + 30;
    const tooltipWidth = 280;
    const tooltipHeight = 200;
    const margine = 16;

    let left = pianetaX + offsetX;
    let top = pianetaY;
    let ancoraCentro = true;   // translateY(-50%): il top è il centro verticale del tooltip

    if(left + tooltipWidth + margine > window.innerWidth){
        left = pianetaX - offsetX - tooltipWidth;
    }

    if (left < margine) {
        left = pianetaX - tooltipWidth / 2;
        top = pianetaY + offsetX;
        ancoraCentro = false;

        if (top + tooltipHeight + margine > window.innerHeight) {
            top = pianetaY - offsetX - tooltipHeight;
        }
    }

    // forza la finestra dentro lo schermo (fondamentale in landscape mobile, dove spesso usciva)
    left = Math.max(margine, Math.min(left, window.innerWidth - tooltipWidth - margine));
    if (ancoraCentro) {
        top = Math.max(margine + tooltipHeight / 2, Math.min(top, window.innerHeight - margine - tooltipHeight / 2));
    } else {
        top = Math.max(margine, Math.min(top, window.innerHeight - margine - tooltipHeight));
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.style.transform = ancoraCentro ? 'translateY(-50%)' : 'translateY(0)';
}


function setup(){

    canvas.width =section.clientWidth;
    canvas.height =section.clientHeight;

    VERTICALE = orientamentoCorrente;
    ORIZZ_MOBILE = !VERTICALE && window.innerHeight < ALT_LANDSCAPE_MOBILE;
    if (VERTICALE) {
        SCALA = (window.innerWidth / 2) / RAGGIO_MAX * FATTORE_SPILL_VERTICALE;
    } else if (ORIZZ_MOBILE) {
        // telefono in landscape: rimpicciolisce per entrare (tetto a 1)
        SCALA = Math.min(1, (window.innerWidth / 2) / RAGGIO_MAX * FATTORE_SPILL_ORIZZONTALE);
    } else {
        SCALA = 1;   // desktop / tablet: identico a oggi
    }

    if (VERTICALE) {
        soleCentroX = window.innerWidth * SOLE_X_VERTICALE;
        soleCentroY = section.clientHeight * SOLE_Y_VERTICALE;
        sole.style.left = `${soleCentroX}px`;
        sole.style.top = `${soleCentroY}px`;
    } else {
        sole.style.left = '';
        sole.style.top = '';
        soleCentroX = sole.offsetLeft;
        soleCentroY = sole.offsetTop;
    }

    sole.querySelector('img').style.width = `${200 * SCALA * (VERTICALE ? DIM_SOLE_VERTICALE : 1)}px`;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    datiPianeti.forEach(dato =>{
        const rY = VERTICALE ? dato.raggioX * ALLUNGA_Y_VERTICALE : dato.raggioY;
        ctx.beginPath()
        ctx.ellipse(soleCentroX, soleCentroY, dato.raggioX * SCALA, rY * SCALA, 0, 0,  Math.PI * 2)
        ctx.stroke()
    })
}


function anima() {
   
    pianeti.forEach(p=> p.update());
    requestAnimationFrame(anima);

}

setup();

// --- Transizione rotazione: velo nero + icona che fa un giro nel verso della rotazione ---
const overlayTransizione = document.getElementById('transizione');
const tastoRuota = document.getElementById('ruota-manuale');

function eseguiTransizione(verso) {
    overlayTransizione.classList.add('attiva');            // nero istantaneo: copre subito
    overlayTransizione.classList.remove('gira-sx', 'gira-dx');
    void overlayTransizione.offsetWidth;                   // reflow: riavvia l'animazione del giro
    overlayTransizione.classList.add(verso);
    setup();                                               // ricostruisce il layout nello stesso istante, sotto il nero
    setTimeout(() => overlayTransizione.classList.remove('attiva'), 700); // poi svanisce dolcemente
}

// verso della pagina: verso l'orizzontale gira a sinistra, verso il verticale a destra
function transizioneVerso() {
    return orientamentoCorrente ? 'gira-dx' : 'gira-sx';
}

// rotazione automatica del dispositivo
window.addEventListener('resize', () => {
    const orientViewport = window.innerWidth < window.innerHeight;
    if (orientViewport !== orientamentoCorrente) {
        orientamentoCorrente = orientViewport;
        eseguiTransizione(transizioneVerso());
    } else {
        setup();                                           // semplice resize: aggiorna subito
    }
});

// rotazione manuale col tasto (per chi ha la rotazione automatica disattivata)
tastoRuota.addEventListener('click', () => {
    orientamentoCorrente = !orientamentoCorrente;
    eseguiTransizione(transizioneVerso());
});

anima();

let pianetaCorrente = 0;

const selettore = document.querySelector('.selettore-pianeti');
const placeholder = document.querySelector('#nome-placeholder');
const titolo = document.querySelector('#scheda-titolo');
const descrizione = document.querySelector('#scheda-descrizione');
const frecciaSx = document.querySelector('.freccia-sx');
const frecciaDx = document.querySelector('.freccia-dx');
const misCerchio = document.querySelector('#mis-cerchio');
const misPallino = document.querySelector('#mis-pallino');
const misPianeta = document.querySelector('#mis-pianeta');
const misCerchioM = document.querySelector('#mis-cerchio-m');
const misPallinoM = document.querySelector('#mis-pallino-m');
const misPianetaM = document.querySelector('#mis-pianeta-m');
const luneMobile = document.querySelector('#lune-mobile');
const luneLista = document.querySelector('#lune-lista');

// "Satelliti — Io (vulcanica), Europa (oceano), ..." -> ["Io (vulcanica)", "Europa (oceano)", ...]
// spezza sulle virgole SOLO fuori dalle parentesi (così "craterizzata, la più esterna" resta unito)
function luneInLista(testo) {
    const s = (testo || '').replace(/^Satelliti\s*[—-]\s*/i, '').trim();
    if (!s || /^nessun/i.test(s)) return [];
    const voci = [];
    let liv = 0, cur = '';
    for (const ch of s) {
        if (ch === '(') liv++;
        else if (ch === ')') liv--;
        if (ch === ',' && liv === 0) { voci.push(cur.trim()); cur = ''; }
        else cur += ch;
    }
    if (cur.trim()) voci.push(cur.trim());
    return voci;
}

const TERRA_KM = 12742;
const MIS_MAX_PX = 90;
const diamKm = s => parseInt(s.replace(/[^\d]/g, ''), 10);
const scalaMis = km => Math.sqrt(km / TERRA_KM);
const maxScala = Math.max(...datiPianeti.map(d => scalaMis(diamKm(d.diametro))));
const pxMis = km => (scalaMis(km) / maxScala) * MIS_MAX_PX;

misCerchio.style.width = misCerchio.style.height = `${MIS_MAX_PX}px`;
misPallino.style.width = misPallino.style.height = `${pxMis(TERRA_KM)}px`;
misCerchioM.style.width = misCerchioM.style.height = `${MIS_MAX_PX}px`;
misPallinoM.style.width = misPallinoM.style.height = `${pxMis(TERRA_KM)}px`;

datiPianeti.forEach((dato, indice) =>{
    const btn = document.createElement('button');
    btn.className = 'btn-pianeta';
    btn.textContent = dato.nomeEsteso;
    btn.addEventListener('click', () => mostraPianeta(indice));
    selettore.appendChild(btn);
});

function mostraPianeta(indice) {
    pianetaCorrente = indice;
    const dato = datiPianeti[indice];

    placeholder.textContent = dato.nomeEsteso;
    titolo.textContent = dato.nomeEsteso;
    descrizione.textContent = dato.descrizione || dato.curiosita;
    luneMobile.textContent = dato.luneNotevoli || '';

    const voci = luneInLista(dato.luneNotevoli);
    luneLista.innerHTML = voci.length
        ? voci.map(v => `<li>${v}</li>`).join('')
        : '<li class="lune-vuoto">Nessun satellite</li>';

    const diametro = diamKm(dato.diametro);
    misPianeta.style.transform = `scale(${pxMis(diametro) / MIS_MAX_PX})`;
    misPianetaM.style.transform = `scale(${pxMis(diametro) / MIS_MAX_PX})`;

    // pianeti con anelli: video meno zoomato per non tagliare gli anelli.
    // Saturno (anelli larghi) frame intero; Urano (anelli piccoli) via di mezzo.
    contenitoreVideo.classList.toggle('con-anelli', dato.nome === 'saturno');
    contenitoreVideo.classList.toggle('anelli-urano', dato.nome === 'urano');

    if(dato.video) {
        contenitoreVideo.classList.add('ha-video');
        if (!videoPianeta.src.endsWith(dato.video)) videoPianeta.src = dato.video;
        videoPianeta.play(() => {});
    } else {
        contenitoreVideo.classList.remove('ha-video');
        videoPianeta.pause();
        videoPianeta.removeAttribute('src');
        videoPianeta.load();
    }

    const tuttiBtn = document.querySelectorAll('.btn-pianeta');
    tuttiBtn.forEach((btn, i) => {
        btn.classList.toggle('attivo', i === indice);
    });

    const btnAttivo = tuttiBtn[indice];
    if (btnAttivo){
        const offsetSx = btnAttivo.offsetLeft;
        const larghezzaBtn = btnAttivo.offsetWidth;
        const larghezzaTrattino = larghezzaBtn * 0.5;
        const margineSx = (larghezzaBtn - larghezzaTrattino) / 2;

        indicatore.style.left = `${offsetSx + margineSx}px`;
        indicatore.style.width = `${larghezzaTrattino}px`;
    }

}

const noteLune = document.querySelector('.note-lune');
let intervalloDigitazione = null;

noteLune.addEventListener('mouseenter', () => {
    const testo = datiPianeti[pianetaCorrente].luneNotevoli;
    let i = 0;
    testoLune.textContent = '';

    clearInterval(intervalloDigitazione);

    intervalloDigitazione = setInterval(() =>{
        if(i < testo.length) {
            testoLune.textContent += testo[i];
            i++;
        } else {
            clearInterval(intervalloDigitazione);
        }
        }, 15)
    })

noteLune.addEventListener('mouseleave', () =>{
    clearInterval(intervalloDigitazione);
})

// landscape (touch): il tap sull'asterisco fa comparire la descrizione con lo stesso typewriter del desktop; un tap altrove la chiude
noteLune.addEventListener('click', (e) => {
    e.stopPropagation();
    if (noteLune.classList.contains('aperta')) return;
    noteLune.classList.add('aperta');
    const testo = datiPianeti[pianetaCorrente].luneNotevoli;
    let i = 0;
    testoLune.textContent = '';
    clearInterval(intervalloDigitazione);
    intervalloDigitazione = setInterval(() => {
        if (i < testo.length) { testoLune.textContent += testo[i]; i++; }
        else clearInterval(intervalloDigitazione);
    }, 15);
})
document.addEventListener('click', () => {
    noteLune.classList.remove('aperta');
    clearInterval(intervalloDigitazione);
})


frecciaSx.addEventListener('click', () =>{
    const nuovoIndice = (pianetaCorrente - 1 + datiPianeti.length) % datiPianeti.length;
    mostraPianeta(nuovoIndice);
});

frecciaDx.addEventListener('click', () =>{
    const nuovoIndice = (pianetaCorrente + 1 + datiPianeti.length) % datiPianeti.length;
    mostraPianeta(nuovoIndice);
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') frecciaSx.click();
    if (e.key === 'ArrowRight') frecciaDx.click();
});

// --- Enciclopedia mobile: scheda a comparsa (peek <-> aperta) ---
const areaInfo = document.querySelector('.area-info');
const schedaHandle = document.querySelector('.scheda-handle');

// aprire la scheda blocca lo scroll della pagina: così lo swipe giù la chiude soltanto
// e non fa scivolare per sbaglio nella sezione sopra (Hero)
function apriSlide() {
    areaInfo.classList.add('aperta');
    document.body.style.overflow = 'hidden';
}
function chiudiSlide() {
    areaInfo.classList.remove('aperta');
    document.body.style.overflow = '';
}

schedaHandle.addEventListener('click', () => {
    if (areaInfo.classList.contains('aperta')) chiudiSlide();
    else apriSlide();
});

let schedaY0 = null;
areaInfo.addEventListener('touchstart', (e) => {
    schedaY0 = e.changedTouches[0].clientY;
}, { passive: true });
areaInfo.addEventListener('touchend', (e) => {
    if (schedaY0 === null) return;
    const dy = e.changedTouches[0].clientY - schedaY0;
    schedaY0 = null;
    if (dy < -40) apriSlide();                                 // trascina su -> apri
    else if (dy > 40 && areaInfo.scrollTop <= 0) chiudiSlide(); // trascina giù dall'alto -> chiudi
});

// --- Enciclopedia mobile: swipe sul video per cambiare pianeta ---
const areaModello = document.querySelector('.area-modello');
let touchX0 = null;
areaModello.addEventListener('touchstart', (e) => {
    touchX0 = e.changedTouches[0].clientX;
}, { passive: true });
areaModello.addEventListener('touchend', (e) => {
    if (touchX0 === null) return;
    const dx = e.changedTouches[0].clientX - touchX0;
    touchX0 = null;
    if (Math.abs(dx) < 40) return;      // soglia: ignora micro-movimenti
    if (dx < 0) frecciaDx.click();      // swipe verso sinistra -> pianeta successivo
    else frecciaSx.click();             // swipe verso destra -> precedente
});

requestAnimationFrame(() => mostraPianeta(0));
window.addEventListener('resize', () => mostraPianeta(pianetaCorrente));

})