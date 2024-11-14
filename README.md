Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. Prima di partire a scrivere codice poniamoci qualche domanda:

Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano"

Procedimento: inizialmente ho inserito come prima casistica i numeri che sono multipli di 3, poi i multipli di 5 e infine se non sono ne multipli di 3 ne di 5, inserendo un console.log per ogni if.
Successivamente però, non "stampandomi" l'ultima casistica, ho deciso di inserirla come prima casistica in "if", e le altre due in else if. 
Così facendo gli ho voluto dire che di base se avveniva la casistica che il numero era multiplo di 3 e di 5 doveva darmi "FizzBuzz", quindi come se volessi dire che "di base" mi deve dare questo testo.
Nel caso in cui non sia cosi, nel primo caso mi da "Buzz", nel seconodo caso "Fizz".
Infine ho inserito un unico console.log per tutte le casistiche.