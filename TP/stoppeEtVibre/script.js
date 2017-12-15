window.addEventListener('devicemotion', function(event) {

    var acc = (event.acceleration.x^2+event.acceleration.y^2+event.acceleration.z^2)^0.5; //Calcule l'accélération moyenne

    if(acc < 2) {
        window.navigator.vibrate(100);
    } else {
        //window.navigator.vibrate(0); //On arrête la vibration si le téléphone se remet à bouger
    }

    document.getElementById("acc_x").innerHTML = event.acceleration.x + '';
    document.getElementById("acc_y").innerHTML = event.acceleration.y + '';
    document.getElementById("acc_z").innerHTML = event.acceleration.z + '';
    document.getElementById("acc").innerHTML = acc + '';
});