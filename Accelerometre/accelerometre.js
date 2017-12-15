window.addEventListener('devicemotion', function(event) {
    document.getElementById("acc_x").innerHTML = event.acceleration.x + '';
    document.getElementById("acc_y").innerHTML = event.acceleration.y + '';
    document.getElementById("acc_z").innerHTML = event.acceleration.z + '';
});