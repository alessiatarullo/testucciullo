const risposte = [];

function calcolaRisultato(risposte) {
    const conta = {a: 0, b: 0, c: 0, d: 0};

    risposte.forEach(r => {
        if (conta.hasOwnProperty(r)) {
            conta[r]++;
        }
    });

    let maxLettera = 'a';
    for (const lettera in conta) {
        if (conta[lettera] > conta[maxLettera]) {
            maxLettera = lettera;
        }
    }

    switch(maxLettera) {
        case 'a': return "Sei un avvoltoio, sei molto tenebroso";
        case 'b': return "Sei un hoatzin, conosciuto per la sua puzza";
        case 'c': return "Sei un trogon, sei colorato e ballerino";
        case 'd': return "Sei un pellicano, ami il pesce e fai casino";
        default: return "Uccello misterioso!";
    }
}


let formUtente = document.querySelector("#formUtente");

formUtente.addEventListener("submit", function(event) {
    event.preventDefault();  // blocca il refresh della pagina

    const nome = document.getElementById("nome").value;
    const uccello = document.getElementById("uccello").value;

    formUtente.style.display = "none"; // nasconde il form

    //mostra la prima domanda
  document.getElementById("primaDomanda").style.display = "block";

});

let formDomanda1 = document.querySelector("#formDomanda1");

formDomanda1.addEventListener("submit", function(event) {
    event.preventDefault();  // blocca il refresh della pagina

    // trova input con nome risposta1 selezionato
    risposte.push(document.querySelector('input[name="vuoto"]:checked').value);

  document.getElementById("primaDomanda").style.display = "none";
    // mostra la seconda domanda
  document.getElementById("secondaDomanda").style.display = "block";

});

let formDomanda2 = document.querySelector("#formDomanda2");

formDomanda2.addEventListener("submit", function(event) {
    event.preventDefault();

    risposte.push(document.querySelector('input[name="spazio"]:checked').value);


 document.getElementById("secondaDomanda").style.display = "none";

 document.getElementById("terzaDomanda").style.display = "block";

});

let formDomanda3 = document.querySelector("#formDomanda3");

formDomanda3.addEventListener("submit", function(event) {
    event.preventDefault();

    risposte.push(document.querySelector('input[name="oggetto"]:checked').value);

 document.getElementById("terzaDomanda").style.display = "none";

 document.getElementById("quartaDomanda").style.display = "block";

});

let formDomanda4 = document.querySelector("#formDomanda4");

formDomanda4.addEventListener("submit", function(event) {
    event.preventDefault();

    risposte.push(document.querySelector('input[name="film"]:checked').value);

 document.getElementById("quartaDomanda").style.display = "none";

 document.getElementById("quintaDomanda").style.display = "block";

});

let formDomanda5 = document.querySelector("#formDomanda5");

formDomanda5.addEventListener("submit", function(event) {
    event.preventDefault();

    risposte.push(document.querySelector('input[name="colazione"]:checked').value);

 document.getElementById("quintaDomanda").style.display = "none";

 document.getElementById("risultati").style.display = "block";

 const risultato = calcolaRisultato(risposte);

 document.getElementById("testoRisultato").textContent = risultato;
});