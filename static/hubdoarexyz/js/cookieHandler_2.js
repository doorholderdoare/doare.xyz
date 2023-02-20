$('document').ready(function (){
    var cookie = document.cookie;
    var cookieArray = cookie.split('=');
    var cookieValue = cookieArray[1];

    if (cookieValue == 'true') {
        console.log('Cookie exists')
    } else {
        console.log('Cookie does not exist')
    }
});