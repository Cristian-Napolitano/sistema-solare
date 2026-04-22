window.addEventListener('load', () =>{
const pianeta = document.querySelector('.pianeta');
const sole = document.querySelector('.sole');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const section = document.querySelector('#sistema-solare');


let angolo= 0;
const raggioX = 400;
const raggioY = 90;


let soleCentroX;
let soleCentroY;

class Pianeta{
    constructor(elemento, raggioX, raggioY, velocita, angoloIniziale){
    this.elemento = elemento;
    this.raggioX = raggioX;
    this.raggioY = raggioY;
    this.velocita = velocita;
    this.angolo = angoloIniziale;
    }
    update() {
        this.angolo -= this.velocita

        const x = Math.cos(angolo) * raggioX;
        const y = Math.sin(angolo) * raggioY;
    
        const scala = 0.6 + ((y + raggioY)/(raggioY * 2)) * 2;
    
        pianeta.style.left = `calc(${soleCentroX + x}px)`;
        pianeta.style.top = `calc(${soleCentroY + y}px)`;
        pianeta.style.transform = `translate(-50%, -50%) scale(${scala})`;
        pianeta.style.zIndex = y > 0 ? 20 : 5;

    terra.update();
}
}



const terra = new Pianeta(pianeta, 400, 90, 0.02, 0);



function setup(){

    canvas.width =section.clientWidth;
    canvas.height =section.clientHeight;

    soleCentroX = sole.offsetLeft;
    soleCentroY = sole.offsetTop;

    ctx.beginPath()
    ctx.ellipse(soleCentroX, soleCentroY, raggioX, raggioY, 0, 0,  Math.PI * 2)
    ctx.strokeStyle = "gray";
    ctx.stroke()

}


function anima() {
   
    terra.update();
    requestAnimationFrame(anima);

}

setup();
window.addEventListener('resize', setup);
anima();


})