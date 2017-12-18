var ctx;
var moveX, moveY;
var xCircle = 200;
var yCircle = 200;
var init = false;
var xInit, yInit;

window.onload = function()  {
    canvas = document.getElementById("mainCanvas");
    canvas.width = window.innerWidth //document.width is obsolete
    canvas.height = window.innerHeight; //document.height is obsolete
    canvasW = canvas.width;
    canvasH = canvas.height;

    if( canvas.getContext )
    {
        canvas.style.border = "2px solid black";
        ctx = canvas.getContext("2d");

        drawCircle(xCircle, yCircle);
    }
}

function drawCircle(x, y) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y,40,0,2*Math.PI);
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
    if(x > canvas.width) {
        x = canvas.width;
        miniVibre();
    }
    if(x < 0) {
        x = 0;
        miniVibre();
    }

    return x;
}

function regularizeY(y) {
    if(y < 0) {
        y = 0;
        miniVibre();
    }
    if(y > canvas.height) {
        y = canvas.height;
        miniVibre();
    }

    return y;
}

function miniVibre() {
    window.navigator.vibrate(100);
}