(function() {
    var logo = document.getElementById('logo');

    // changement du logo en fonction de l'état du stream
    chrome.browserAction.getTitle({}, function(title) {
        if (title === messages.streamOn) {
            logo.src = 'img/logo.png';
        } else {
            logo.src = 'img/logo_off.png';
        }
    });
})();
