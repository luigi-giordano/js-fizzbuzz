// SOLUZIONE 1
// PAROLACHIAVE CICLO
for (let i = 1; i<=100; i++){
  // VARIABILE
  let parola = '';
  // ISTRUZIONE CONDIZIONALE
  if (!(i % 3) && !(i % 5)){
    parola = 'FizzBuzz';
  }
  // ISTRUZIONE CONDIZIONALE
  else if (!(i % 5)){
    parola = 'Buzz';
  }
  // ISTRUZIONE CONDIZIONALE
  else if (!(i % 3) ){
    parola = 'Fizz';
    // ISTRUZIONE CONDIZIONALE ALTERNATIVA
  }else{
    parola = i;
  }
  console.log (parola);
}