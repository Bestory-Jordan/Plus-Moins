var guess;
var quizz = Math.floor(Math.random() * 100);
var decompte = 1;
document.getElementById("rangeGuess").defaultValue = 50;

function jeu(max) {
    quizz = Math.floor(Math.random() * max);
    document.getElementById("rangeGuess").max = max;
    document.getElementById("rangeGuess").value = max / 2;
    decompte = 1;
    document.getElementById("afficheMax").innerText = max;
    document.getElementById("afficheMin").innerText = 1;
}

function afficheRange() {
    document.getElementById("afficheNombre").innerText = document.getElementById("rangeGuess").value;
}

function plusMoins() {
    guess = Number(document.getElementById("rangeGuess").value);
    if (guess == quizz) {
        document.getElementById("message").innerText = ("Bravo ! vous avez gagné en " + decompte + " coups");
        document.getElementById("message").style.backgroundColor="lightgreen";
        resetJeu();
    }
    else if (guess < quizz) {
        document.getElementById("message").innerText = (" Nombre trop petit ");
        document.getElementById("rangeGuess").min = guess;
        document.getElementById("afficheMin").innerText = guess;
    }
    else if (guess > quizz){
        document.getElementById("message").innerText = ("Nombre trop grand ");
        document.getElementById("rangeGuess").max = guess;
        document.getElementById("afficheMax").innerText = guess;
    }
    else {
        document.getElementById("message").innerText = ("Erreur");
    };
    decompte++;
}

function resetJeu() {
    decompte = 1;    
    jeu(100);
    document.getElementById("rangeGuess").min = 1;
    document.getElementById("rangeGuess").max = 100;
    document.getElementById("radio100").checked = "checked";
    document.getElementById("afficheNombre").innerText = "";
    document.getElementById("rangeGuess").value = 50;
    document.getElementById("afficheMax").innerText = 100;
    document.getElementById("afficheMin").innerText = 1;
}
