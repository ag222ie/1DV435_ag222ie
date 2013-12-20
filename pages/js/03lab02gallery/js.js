// funktion som räknar 1-2-3-1-2-3-1-2-3

var imagePlaceholder = document.getElementById("image");

var imgArray = [];

imgArray[0] = "images/1.jpg";
imgArray[1] = "images/2.jpg";
imgArray[2] = "images/3.jpg";

var i = 0;

imagePlaceholder.style.backgroundImage = "url(" + imgArray[0] + ")";

var timer = setInterval(function () { changeImage() }, 5000);

function changeImage() {          
    imagePlaceholder.style.backgroundImage = "url(" + imgArray[i] + ")";

    i++;

    if (i === imgArray.length ) {        
        clearInterval(timer);

        timer = setInterval(function () { changeImage() }, 5000);

        i = 0;
        
    }
    
}


