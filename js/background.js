var doNotif = true; // permet de savoir si la notification doit être affichée

// Fonction d'affichage de la notification de stream online
function showNotif()
{
    chrome.notifications.create('notifOn', {
        type: 'basic',
        title: notif.title,
        message: notif.message,
        iconUrl: notif.icon
    }, function(id) {});
}

// fonction de vérification du statut du stream
function checkStatus()
{
    var x = new XMLHttpRequest();
    x.onreadystatechange = function() {
        if (x.readyState == 4 && x.status == 200) {
            var data = JSON.parse(x.responseText);

            // si le stream est en route
            if (data.stream) {
                // changement du titre et de l'icône du plugin
                chrome.browserAction.setTitle({title: messages.streamOn});
                chrome.browserAction.setIcon({path: icons.streamOn});

                // affichage de la notification (uniquement la première fois)
                if (doNotif) {
                    showNotif();
                    doNotif = false;
                }
            } else {
                // changement du titre et de l'icône du plugin
                chrome.browserAction.setTitle({title: messages.streamOff});
                chrome.browserAction.setIcon({path: icons.streamOff});

                doNotif = true;
            }
        }
    };
    x.open('GET', urls.check);
    x.send();
}

// Gestion du clique sur la notification
chrome.notifications.onClicked.addListener(function() {
    // ouverture d'un nouvel onglet vers le stream
    chrome.tabs.create({
        url: urls.stream
    });
});

setInterval(checkStatus, checkDelay);
checkStatus();
