var ctx;
var xCircle = 200;
var yCircle = 200;
var init = false;
var xInit, yInit;
var rayon = 40;

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

        drawCircle(xCircle, yCircle);
    }
};

function drawCircle(x, y) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y,rayon,0,2*Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke();
}

window.addEventListener('deviceorientation', function(event) {

    if(!init) {
        xInit = event.gamma;
        yInit = event.beta;

        init = true;
    }

    xCircle = regularizeX(xCircle+event.gamma);
    yCircle = regularizeY(yCircle+event.beta);

    drawCircle(xCircle, yCircle)

});

function regularizeX(x) {
    if(x > canvas.width-rayon) {
        x = canvas.width-rayon;
        miniVibre();
    }
    if(x < rayon) {
        x = rayon;
        miniVibre();
    }

    return x;
}

function regularizeY(y) {
    if(y < rayon) {
        y = rayon;
        miniVibre();
    }
    if(y > canvas.height-rayon) {
        y = canvas.height-rayon;
        miniVibre();
    }

    return y;
}

function miniVibre() {
    window.navigator.vibrate(100);
}