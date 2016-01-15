/*var notification = new Notification('Yayyyy', {
    icon: 'img/icon_32.png',
    body: 'COmment ça va bien les gens ??'
});*/
console.log(params);
setInterval(function() {
    console.log('check');
}, 3000);

function sendXhr(url)
{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
console.log(xhr);
    };
}
