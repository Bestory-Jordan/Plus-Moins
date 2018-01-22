var guess;
var quizz = Math.floor(Math.random() * 100);
var decompte = 0;
var vmin = 1;
var vmax = 100;
var max = 100;

document.getElementById("rangeGuess").defaultValue = 50;

function jeu(maxRadio) {
    max = maxRadio;
    vmax = max;
    nettoyage();
}

function afficheRange() {
    document.getElementById("afficheNombre").innerText = document.getElementById("rangeGuess").value;
}

function plusMoins() {
    decompte++;
    guess = Number(document.getElementById("rangeGuess").value);
    document.getElementById("bravo").innerText = '';
    document.getElementById("bravo").style.backgroundColor="transparent";

    if (guess == quizz) {
        document.getElementById("bravo").innerText = ("Bravo ! vous avez gagné en " + decompte + " coups");
        document.getElementById("bravo").style.backgroundColor="lightgreen";
        resetJeu();
    }
    else if (guess < quizz) {
        document.getElementById("message").innerText += ("\n Nombre trop petit ");
        vmin = guess;
        document.getElementById("fourchette").style.width = ((vmax - vmin) / max * 100) * 0.9 + "%";
        document.getElementById("fourchette").style.marginLeft = vmin / max * 100 * 0.9 + 1.5 + "%";
    }
    else if (guess > quizz){
        document.getElementById("message").innerText += ("\n Nombre trop grand ");
        vmax = guess;
        document.getElementById("fourchette").style.width = (vmax - vmin) / max * 100 * 0.9 + "%";
        document.getElementById("fourchette").style.marginRight = (vmax +60) / max * 100 * 0.9 + "%";
    }
    else {
        document.getElementById("message").innerText += ("Erreur");
    };

    if (((max == 100) && decompte >= 8) || ((max == 500) && decompte >= 14) || ((max == 1000) && decompte >= 22)) {
        document.getElementById("bravo").innerText = ("Perdu ! vous n\'avez toujours pas trouvé malgré " + decompte + " essais, c\'est vraiment pas terrible...");
        document.getElementById("bravo").style.border="1px solid red";
        resetJeu();
    }
}

function resetJeu() {  
    nettoyage();  
    jeu(100);
    vmax = 100;
    document.getElementById("radio100").checked = "checked";
}

function nettoyage() {
    vmin = 1;
    document.getElementById("afficheMin").innerText = 1;
    document.getElementById("fourchette").style.width = "90%";
    document.getElementById("fourchette").style.marginLeft = "21px";
    document.getElementById("fourchette").style.marginRight = "auto";
    decompte = 0;
    document.getElementById("afficheNombre").innerText = "";
    quizz = Math.floor(Math.random() * max);
    document.getElementById("rangeGuess").min = 1;
    document.getElementById("rangeGuess").max = max;
    document.getElementById("rangeGuess").value = max / 2;
    document.getElementById("afficheMax").innerText = max;
    document.getElementById("message").innerText = '';
    document.getElementById("bravo").style.border="none";
}