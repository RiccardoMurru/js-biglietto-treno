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

 // 1. Chiedere all'utente i km da percorrere e l'età

 distance = prompt('Quanti km vuoi percorrere?');
 console.log('distanza in km: ' + distance);
 
 age = prompt('Quanti anni hai?');
 console.log('età: ' + age)

 // 2. Calcolare prezzo del biglietto

 grossPrice = distance * .21;
 console.log('prezzo del biglietto senza sconto: € ' + grossPrice);

 