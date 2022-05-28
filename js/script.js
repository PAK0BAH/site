var body = document.getElementById('body');

var el = setInterval(function(){
body.style.transition = '4s';
body.style.backgroundColor = '#' + (Math.ceil(Math.random() * 999999));
}, 2000);
