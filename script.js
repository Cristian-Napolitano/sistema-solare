window.addEventListener('load', () =>{
const sole = document.querySelector('.sole');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const section = document.querySelector('#sistema-solare');


const datiPianeti = [
    {nome: 'mercurio' , raggioX:180, raggioY:35 , velocita: 0.012, dimensione: 28},
    {nome: 'venere' , raggioX:270, raggioY:60 , velocita: 0.009, dimensione: 50},
    {nome: 'terra' , raggioX:380, raggioY:90 , velocita: 0.007, dimensione: 55},
    {nome: 'marte' , raggioX:490, raggioY:120 , velocita: 0.006, dimensione: 38},
    {nome: 'giove' , raggioX:640, raggioY:160 , velocita: 0.004, dimensione: 110},
    {nome: 'saturno' , raggioX:800, raggioY:200 , velocita: 0.003, dimensione: 150},
    {nome: 'urano' , raggioX:940, raggioY:240 , velocita: 0.017, dimensione: 70},
    {nome: 'nettuno' , raggioX:1080, raggioY:280 , velocita: 0.013, dimensione: 65},
]


let soleCentroX;
let soleCentroY;
let pianetaEvidenziato = null;
const ZOOM_FOCUS = 250;

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

        if (pianetaEvidenziato === null){
            this.angolo -= this.velocita;
        }


        const x = Math.cos(this.angolo) * this.raggioX;
        const y = Math.sin(this.angolo) * this.raggioY;
    
        const scala = 0.6 + ((y + this.raggioY)/(this.raggioY * 2)) * 1.4;
    
        this.elemento.style.left = `calc(${soleCentroX + x}px)`;
        this.elemento.style.top = `calc(${soleCentroY + y}px)`;

        if(pianetaEvidenziato === this){
            const fattoreZoom = ZOOM_FOCUS / this.dimensioneBase;
            this.elemento.style.transform = `translate(-50%, -50%) scale(${fattoreZoom})`;
            this.elemento.style.zIndex = 100;
    }   else{
        this.elemento.style.transform = `translate(-50%, -50%) scale(${scala})`;
        this.elemento.style.zIndex = y > 0 ? 20 : 5;
    }

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

    });
    div.addEventListener('mouseleave', () => {
        pianetaEvidenziato = null;
    })
});


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