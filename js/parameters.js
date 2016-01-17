var chaine = 'coscave',
    checkDelay = 1000 * 3,
    notif = {
        title: 'CosCave',
        message: 'La CosCave est en live !',
        icon: 'img/icon_128.png'
    },
    messages = {
        streamOn: 'CosCave - Online',
        streamOff: 'CosCave - Offline'
    },
    icons = {
        streamOn: 'img/icon_19.png',
        streamOff: 'img/icon_19_off.png'
    },
    urls = {
        check: 'https://api.twitch.tv/kraken/streams/' + chaine,
        stream: 'http://www.twitch.tv/coscave'
    }
;
