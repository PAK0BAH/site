var button = document.getElementById('button');
var body = document.getElementById('body');
var count_html = document.getElementById('count');

var el = setInterval(function(){
body.style.transition = '4s';
body.style.backgroundColor = '#' + (Math.ceil(Math.random() * 999999));
}, 2000);
button.style.backgroundColor = '#59000000';
button.style.color = 'black';
count_html.innerHTML = count(1);
