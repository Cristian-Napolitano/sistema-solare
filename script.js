window.addEventListener('load', () =>{
const sole = document.querySelector('.sole');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const section = document.querySelector('#sistema-solare');
const tooltip = document.querySelector('#tooltip');


const datiPianeti = [
    {
        nome: 'mercurio', raggioX: 180, raggioY: 35, velocita: 0.012, dimensione: 28,
        nomeEsteso: 'Mercurio',
        distanza: '57,9 milioni di km',
        diametro: '4.879 km',
        anno: '88 giorni',
        lune: '0',
        curiosita: 'Il pianeta più piccolo e veloce del sistema solare.'
    },
    {
        nome: 'venere', raggioX: 270, raggioY: 60, velocita: 0.009, dimensione: 50,
        nomeEsteso: 'Venere',
        distanza: '108,2 milioni di km',
        diametro: '12.104 km',
        anno: '225 giorni',
        lune: '0',
        curiosita: 'Il pianeta più caldo, ruota al contrario.'
    },
    {
        nome: 'terra', raggioX: 380, raggioY: 90, velocita: 0.007, dimensione: 55,
        nomeEsteso: 'Terra',
        distanza: '149,6 milioni di km',
        diametro: '12.742 km',
        anno: '365 giorni',
        lune: '1',
        curiosita: 'L\'unico pianeta conosciuto a ospitare la vita.'
    },
    {
        nome: 'marte', raggioX: 490, raggioY: 120, velocita: 0.006, dimensione: 38,
        nomeEsteso: 'Marte',
        distanza: '227,9 milioni di km',
        diametro: '6.779 km',
        anno: '687 giorni',
        lune: '2',
        curiosita: 'Il "pianeta rosso", ospita il vulcano più alto del sistema solare.'
    },
    {
        nome: 'giove', raggioX: 640, raggioY: 160, velocita: 0.004, dimensione: 110,
        nomeEsteso: 'Giove',
        distanza: '778,5 milioni di km',
        diametro: '139.820 km',
        anno: '12 anni',
        lune: '95',
        curiosita: 'Il gigante del sistema solare, con la famosa Grande Macchia Rossa.'
    },
    {
        nome: 'saturno', raggioX: 800, raggioY: 200, velocita: 0.003, dimensione: 150,
        nomeEsteso: 'Saturno',
        distanza: '1,4 miliardi di km',
        diametro: '116.460 km',
        anno: '29 anni',
        lune: '146',
        curiosita: 'Famoso per i suoi spettacolari anelli di ghiaccio e roccia.'
    },
    {
        nome: 'urano', raggioX: 940, raggioY: 240, velocita: 0.0024, dimensione: 70,
        nomeEsteso: 'Urano',
        distanza: '2,9 miliardi di km',
        diametro: '50.724 km',
        anno: '84 anni',
        lune: '28',
        curiosita: 'Inclinato di 98°, ruota letteralmente "sdraiato" sul suo fianco.'
    },
    {
        nome: 'nettuno', raggioX: 1080, raggioY: 280, velocita: 0.0018, dimensione: 65,
        nomeEsteso: 'Nettuno',
        distanza: '4,5 miliardi di km',
        diametro: '49.244 km',
        anno: '165 anni',
        lune: '16',
        curiosita: 'Ha i venti più veloci del sistema solare, fino a 2.100 km/h.'
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
    const toooltipHeight = 200;
    const margine = 16;

    let left = pianetaX + offsetX;
    let top = pianetaY;
    let transform = 'translateY(-50%)';

    if(left + tooltipWidth + margine > window.innerWidth){
        left = pianetaX - offsetX - tooltipWidth; 
    }

    if (left < margine) {
        left = pianetaX - tooltipWidth / 2;
        
        top = pianetaY + offset;
        transform = 'translateY(0)';

        if (top + tooltipHeight + margine > window.innerHeight) {
            top = pianetaY - offset - toooltipHeight;
        }
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.style.transform = 'transform';
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


})