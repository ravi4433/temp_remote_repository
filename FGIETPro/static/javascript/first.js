

alert("Welcome to Feroj Gandhi");

var arr = ['static/images/slide1.jpg','static/images/slide2.jpg','static/images/slide3.jpg','static/images/slide4.jpg']

var i=0;

function  fun1() {
    var img = document.querySelector('#img1');
    img.setAttribute('src',arr[i])
    if (i<3){
        i++;
    }
    else{
        i=0;
    }
}

setInterval(fun1,1000)