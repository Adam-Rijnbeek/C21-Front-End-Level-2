let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?  ___Door myStr___________ vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype ___Intereger_________ waarom? ___door myInt_________ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? ___weet ik niet_________ vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen __regel 17____________ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de Paragraaf_________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde getname____________ de waarde noemen we een Atribute__________ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een melding _______ op het scherm met de tekst _deze pagina meld het volgende________ deze tekst staan op regel __18_____ van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? _nee__________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? __dat hij word gezien of niet_________________ en waar wordt deze in je HTML aangeroepen? __22 tot 25__________ vul je antwoorden in op de lijn
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML __22_________ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? __Retourneert een verwijzing naar het eerste object met de opgegeven waarde van het ID-kenmerk._________________ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? __laat zien wat je doet_________________ vul je antwoord in op de lijn
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen ___32___________ en wanneer wordt deze aangeroepen ___________ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan ____32__________ en waar komt de waarde van getal vandaan? ____________ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? ____berekent het antwoord_______________  Wat is antwoord hier? vul je antwoorden in op de lijn
    
    //wat gebeurt er in deze functie? ____laat zien wat je doet_________________ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? ____word een ander getal_________________ vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt?
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen _____44_________ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan _________regel 38_____ en waar komt de waarde van kleur vandaan? ____ook rgel 38________ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? ___regel 38_________ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? __veranderd de kleur style en grote___________________ vul je antwoord in op de lijn
}

getName(myStr);
// wat gebeurd er hierboven _vraagt je naam__________ en wanneer gebeurt dat __als je op de butoon klikt________ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? ___geeft een melding aan________________ vul je antwoord in op de lijn.