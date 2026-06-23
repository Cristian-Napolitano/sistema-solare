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
        nome: 'saturno', raggioX: 800, raggioY: 200, velocita: 0.003, dimensione: 150,
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
        nome: 'urano', raggioX: 940, raggioY: 240, velocita: 0.010, dimensione: 70,
        nomeEsteso: 'Urano',
        distanza: '2,9 miliardi di km',
        diametro: '50.724 km',
        anno: '84 anni',
        lune: '28',
        luneNotevoli: 'Satelliti — Miranda (canyon enormi), Titania (la più estesa)',
        curiosita: 'Inclinato di 98°, ruota letteralmente "sdraiato" sul suo fianco.',
        descrizione: `Urano è il settimo pianeta dal Sole, il primo dei due giganti di ghiaccio. È composto soprattutto da acqua, metano e ammoniaca, allo stato di fluidi densi sotto enormi pressioni. È proprio il metano dell'atmosfera ad assorbirne la luce rossa e a dargli l'inconfondibile colore azzurro-verde. La sua caratteristica più strana, però, è l'inclinazione dell'asse: 98 gradi, quasi adagiato sul piano dell'orbita, probabilmente in seguito a un'antica collisione con un corpo grande quanto la Terra. Questa posizione produce stagioni estreme: ai poli, estate e inverno durano 42 anni ciascuno. A tutto questo si aggiunge un dettaglio storico: Urano è il primo pianeta scoperto col telescopio, individuato da William Herschel nel 1781. Prima di allora, nessuno sospettava che oltre Saturno potesse esistere altro.`
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
        descrizione: `Nettuno è l'ottavo e ultimo pianeta dal Sole, e a questa distanza riceve meno dell'uno per cento della luce che raggiunge la Terra. Si distingue per un colore blu profondo e marcato, dovuto al metano nella sua atmosfera. Compie un'orbita completa in 165 anni terrestri, e da quando lo conosciamo ne ha portata a termine appena una. La sua scoperta, nel 1846, è una delle più eleganti della storia dell'astronomia: non fu trovato osservando il cielo, ma calcolato sulla carta a partire dalle anomalie nell'orbita di Urano. Le coordinate previste matematicamente si rivelarono esatte al primo tentativo, e Nettuno fu individuato col telescopio nella zona indicata nel giro di poche ore.`
    }
]


let soleCentroX;
let soleCentroY;
let pianetaEvidenziato = null;
const ZOOM_FOCUS = 350;

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

        if (pianetaEvidenziato === null) {
            this.angolo -= this.velocita;
        }


        const x = Math.cos(this.angolo) * this.raggioX;
        const y = Math.sin(this.angolo) * this.raggioY;
    
        const scala = 0.6 + ((y + this.raggioY)/(this.raggioY * 2)) * 1.4;
    
        this.elemento.style.left = `${soleCentroX + x}px`;
        this.elemento.style.top = `${soleCentroY + y}px`;
        this.elemento.style.transform = `translate(-50%, -50%) scale(${scala})`;
        this.elemento.style.zIndex = y > 0 ? 20 : 5; 
    }

}


const pianeti =[];

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

    div.addEventListener('mouseenter', () =>{
        pianetaEvidenziato = p;
        const fattoreZoom = ZOOM_FOCUS / dato.dimensione;
        div.style.transform = `translate(-50%, -50%) scale(${fattoreZoom})`;
        div.style.zIndex = 100;

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

    });

    div.addEventListener('mouseleave', () => {
        pianetaEvidenziato = null;
        tooltip.className = 'tooltip-nascosto';
    })
});

function posizionaTooltip(divPianeta){
    const pianetaX = parseFloat(divPianeta.style.left);
    const pianetaY = parseFloat(divPianeta.style.top);

    const offsetX = (ZOOM_FOCUS / 2) + 30;
    const tooltipWidth = 280;
    const tooltipHeight = 200;
    const margine = 16;

    let left = pianetaX + offsetX;
    let top = pianetaY;
    let transform = 'translateY(-50%)';

    if(left + tooltipWidth + margine > window.innerWidth){
        left = pianetaX - offsetX - tooltipWidth; 
    }

    if (left < margine) {
        left = pianetaX - tooltipWidth / 2;
        
        top = pianetaY + offsetX;
        transform = 'translateY(0)';

        if (top + tooltipHeight + margine > window.innerHeight) {
            top = pianetaY - offsetX - tooltipHeight;
        }
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.style.transform = transform;
}


function setup(){

    canvas.width =section.clientWidth;
    canvas.height =section.clientHeight;

    soleCentroX = sole.offsetLeft;
    soleCentroY = sole.offsetTop;

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    datiPianeti.forEach(dato =>{
        ctx.beginPath()
        ctx.ellipse(soleCentroX, soleCentroY, dato.raggioX, dato.raggioY, 0, 0,  Math.PI * 2)
        ctx.stroke()
    })
}


function anima() {
   
    pianeti.forEach(p=> p.update());
    requestAnimationFrame(anima);

}

setup();
window.addEventListener('resize', setup);
anima();

let pianetaCorrente = 0;

const selettore = document.querySelector('.selettore-pianeti');
const placeholder = document.querySelector('#nome-placeholder');
const titolo = document.querySelector('#scheda-titolo');
const descrizione = document.querySelector('#scheda-descrizione');
const frecciaSx = document.querySelector('.freccia-sx');
const frecciaDx = document.querySelector('.freccia-dx');

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
    descrizione.textContent = dato.descrizione ||dato.curiosita;

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

requestAnimationFrame(() => mostraPianeta(0));
window.addEventListener('resize', () => mostraPianeta(pianetaCorrente));

})