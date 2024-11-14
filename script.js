for (let i = 1; i<=100; i++){
  let parola = '';
  if (i % 3){
    parola = 'Fizz';
  }
  else if (i % 5){
    parola = 'Buzz';
  }
  else if (i % 3 && i % 5){
    parola = 'BuzzFizz';
  }else{
    parola = i;
  }
  console.log (parola);
}