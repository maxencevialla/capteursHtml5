if (!('ondevicelight' in window)) {
    document.getElementById('dl-unsupported').classList.remove('hidden');
} else {
    var lightValue = document.getElementById('dl-value');

    window.addEventListener('devicelight', function(event) {
        lightValue.innerHTML = Math.round(event.value);

        if (event.value < 50) {
            document.body.className = 'dark-theme';
        } else if (event.value < 10000) {
            document.body.className = 'classic-theme';
        } else {
            document.body.className = 'light-theme';
        }
    });
}

if (!('onlightlevel' in window)) {
    document.getElementById('ll-unsupported').classList.remove('hidden');
} else {
    var lightStateValue = document.getElementById('ll-value');

    window.addEventListener('lightlevel', function(event) {
        lightStateValue.innerHTML = event.value;
    });
}