var ctx; //Contexte du dessin dans le canvas

//Fonction permettant de mettre en place un canvas prenant tout l'écran et de récupérer sa taille si besoin
window.onload = function()  {
    canvas = document.getElementById("mainCanvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasW = canvas.width;
    canvasH = canvas.height;

    if( canvas.getContext )
    {
        canvas.style.border = "2px solid black";
        ctx = canvas.getContext("2d");
    }
};

//Trace un cercle vert de rayon centré en (x,y)
function drawCircle(x, y, r) {

    clearScreen();
    ctx.beginPath();
    ctx.arc(x, y,r,0,2*Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke();
}

function clearScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}