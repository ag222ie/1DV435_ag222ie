var form = document.querySelector("#theForm");

var convertButton = form.querySelector("#convertButton");
//var dollarButton = form.querySelector("#dollar");
var results = document.querySelector("#results");
var input = form.querySelector("input");

//-----------------
// Euro
//-----------------
convertButton.onclick = function () {
    var value = input.value;

    // Om det inmatade värdet inte är ett nummer eller tomt fält.
    if (isNaN(value) || value === "") {
        alert("Du har inte angett ett numeriskt värde, var god försök igen");
    }
    else {
        var p = document.createElement("p");        

        var value = "" + input.value + " SEK = " + Toeur(value) + "€ eller " + Todol(value) + "$."      

        var text = document.createTextNode(value);

        p.appendChild(text);

        console.log(p);

        results.appendChild(p);


        

        // Flyttar till array.
       // addValue(value);

        

        //for (var i = 0; i < userInputs.length; i++) {
        //results.appendChild(text);
        //}
    }

}



//-----------------
// Dollar
//-----------------
//dollarButton.onclick = function () {
//    var value = input.value;

//    // Om det inmatade värdet inte är ett nummer eller tomt fält.
//    if (isNaN(value) || value === "") {
//        alert("Du har inte angett ett numeriskt värde, var god försök igen");
//    }
//    else {
//        var value = Todol(value);

//        // Flyttar till array.
//        addValue(value);

//    }

//}




// Array att spara i.
var userInputs = [];

function addValue(value) {
    userInputs.push(value);
}








// Konventeringsmetoder
function Todol(value) {

    var Todol = 0.15;

    value = (value * Todol).toFixed(2);

    return value;
}

function Toeur(value) {
    var Toeur = 0.11;

    value = (value * Toeur).toFixed(2);

    //value = value.;

    return value;
}


