var button = document.getElementById("button");

var num = 0;

button.onclick = function () {
    document.getElementById("table").className = "hide";
    num++  

    if (num%2 == 0) {        
        document.getElementById("table").className = "show";
    }
}



