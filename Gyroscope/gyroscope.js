window.addEventListener('deviceorientation', function(event) {
    document.getElementById("rot_a").innerHTML = event.alpha + '';
    document.getElementById("rot_b").innerHTML = event.beta + '';
    document.getElementById("rot_g").innerHTML = event.gamma + '';
});