/**
 * 1. Chiedere all'utente i km da percorrere e l'età
 * 2. Calcolare prezzo del biglietto
 * 3. Applicare sconto (20% < 18, 40% > 65)
 * 4. Stampare prezzo biglietto e indicare l'eventuale sconto
 */


 // variabili
 var distance;
 var age;
 var grossPrice;
 var netPrice;

 // 1. Chiedere all'utente i km da percorrere e l'età

 distance = parseFloat(prompt('Quanti km vuoi percorrere?'));
 console.log('distanza in km: ' + distance);
 
 age = parseFloat(prompt('Quanti anni hai?'));
 console.log('età: ' + age)

 // 2. Calcolare prezzo del biglietto

 grossPrice = distance * .21;
 console.log('prezzo del biglietto senza sconto: € ' + grossPrice);

 // 3. Applicare sconto

 // se > 18, sconto = 20%
 if (age < 18) {
    netPrice = grossPrice - (grossPrice * .2);
    console.log ('biglietto scontato del 20%: € ' + netPrice);
 } else if (age > 65) {
    // se > 65, sconto = 40%;
    netPrice = grossPrice - (grossPrice * .4);
    console.log ('biglietto scontato del 40%: € ' + netPrice);
 } else {
    // nessuno sconto applicato
    netPrice = grossPrice;
    console.log ('biglietto non scontato: € ' + netPrice);
 }

 