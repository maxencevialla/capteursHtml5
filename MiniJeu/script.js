var ctx;
var moveX, moveY;
var xCircle = 200;
var yCircle = 200;

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

    if(moveX > event.gamma) {
        xCircle -= 10;
    } else if(moveX < event.gamma) {
        xCircle += 10;
    }

    if(moveY > event.beta) {
        yCircle += 10;
    } else if(moveY < event.beta) {
        yCircle -= 10;
    }

    moveX = event.gamma;
    moveY = event.beta;

    xCircle = regularizeX(xCircle);
    yCircle = regularizeY(yCircle);

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