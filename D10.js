const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = () => Math.floor(Math.random() * 21);
console.log(random());

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "viktor",
  surname: "vasileski",
  age: 27,
};

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

const removeAge = (obj) => {
  delete obj.age;
};

removeAge(me);
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

const addSkills = (...skills) => {
  me.skills = [];
  me.skills.push(...skills);
};

addSkills("HTML", "CSS", "JS");
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

const addSkillsElement = (element) => {
  me.skills.push(element);
};

addSkillsElement("Python");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => Math.ceil(Math.random() * 6);

console.log(dice());
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (n1, n2) => {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
};

console.log(whoIsBigger(5, 7));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (string) => string.split(" ");

console.log(splitMe("Ciao mi chiamo viktor"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (string, boolean) => {
  if (boolean === true) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
};

console.log(deleteOne("EPICODE", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

// avevo inizialmente trovato isNaN(char) per fare la verifica ma ho scoperto che elimina anche gli spazi perché vengono convertiti in 0,
// ho quindi trovato questo altro modo cercando su internet !/[0-9]/.test()

const onlyLetters = (string) => {
  const stringNoNumbers = string
    .split("")
    .filter((char) => !/[0-9]/.test(char))
    .join("");
  return stringNoNumbers;
};

console.log(onlyLetters("Ciao 5 io 2 sono 3 Viktor 10 Vasileski"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (string) => {
  if (string.search("@") === -1) {
    return false;
  } else {
    return true;
  }
};

console.log(
  "Is mariorossi@gmail.com an email? " + isThisAnEmail("mariorossi@gmail.com")
);

// questo è come avrei svolto l'esercizio, non essendo però un controllo davvero affidabile sul se fosse stata inserita o no un'email corretta su internet ho trovato che anche in
// questo caso c'è la possibilità di usare una regex per essere sicuro che sia un'email in quel caso utilizzandola pure il codice sarebbe molto più semplice

const isThisAnEmail2 = (string) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(string);
};

console.log("is ciao@ an email? " + isThisAnEmail2("ciao@"));
console.log("is ciao@ab.cd an email? " + isThisAnEmail2("ciao@ab.cd"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const days = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
];

const whatDayIsIt = () => {
  const d = new Date();
  let day = d.getDay();
  return days[day];
};

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (n) => {
  const dices = {
    throws: n,
    sum: 0,
    values: [],
  };

  for (let i = 0; i < n; i++) {
    let roll = dice();
    dices.sum += roll;
    dices.values.push(roll);
  }

  return dices;
};

console.log(rollTheDices(10));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (date) => {
  const today = new Date();
  const aDay = new Date(date);
  const diff = today - aDay;
  const numberOfDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  return numberOfDays;
};

console.log(howManyDays("2025-06-06"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  if (day === 3 && month === 4) {
    return true;
  } else {
    return false;
  }
};

console.log("Is my birthday today? ", isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const obj = {
  a: "1",
  b: "2",
  c: "3",
  d: "4",
};

const deleteProp = (obj, prop) => {
  delete obj[prop];
};

deleteProp(obj, "a");
console.log(obj);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (arr) => {
  let newest = arr[0];
  arr.forEach((element) => {
    if (parseInt(element.Year) > parseInt(newest.Year)) {
      newest = element;
    }
  });
  return newest;
};

console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (arr) => arr.length;

console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (arr) => {
  const years = [];
  arr.forEach((element) => {
    years.push(element.Year);
  });
  return years;
};

console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (arr) => {
  const moviesMillenium = [];
  arr.forEach((element) => {
    if (element.Year >= 2000) {
      moviesMillenium.push(element);
    }
  });
  return moviesMillenium;
};

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += parseInt(element.Year);
  });
  return sum;
};

console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (arr, string) => {
  const films = [];
  arr.forEach((element) => {
    if (element.Title.search(string) !== -1) {
      films.push(element);
    }
  });
  return films;
};

console.log(searchByTitle(movies, "Avengers"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (arr, string) => {
  const matchedFilms = {
    match: [],
    unmatch: [],
  };

  arr.forEach((element) => {
    if (element.Title.search(string) !== -1) {
      matchedFilms.match.push(element);
    } else {
      matchedFilms.unmatch.push(element);
    }
  });
  return matchedFilms;
};

console.log(searchAndDivide(movies, "Avengers"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log(movies);
const removeIndex = (arr, index) => {
  arr.splice(index, 1);
};
removeIndex(movies, 4);
console.log(movies);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

document.getElementsByTagName("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const stampTd = () => {
  const tds = document.getElementsByTagName("td");
  for (let i = 0; i < tds.length; i++) {
    console.log(tds[i].innerText);
  }
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const redLinks = () => {
  const links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const newListItem = (item) => {
  const listItem = document.createElement("li");
  listItem.innerText = item;
  document.getElementById("myList").appendChild(listItem);
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const emptyList = () => (document.getElementById("myList").innerHTML = "");

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClass = () => {
  const trs = document.getElementsByTagName("tr");
  for (let i = 0; i < trs.length; i++) {
    trs[i].classList.add("test");
  }
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

  */

const halfTree = (n) => {
  let body = document.getElementsByTagName("body");
  for (let i = 1; i <= n; i++) {
    let p = document.createElement("p");
    for (let x = 0; x < i; x++) {
      p.innerText += "*";
    }
    body[0].appendChild(p);
  }
};

/* ESERCIZIO 28
Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

Esempio:
tree(3)

*
***
*****

*/

// in questo caso ho appeso al body e centrato il body solo perché non avevo un sito su cui basarmi, in altri casi potrei semplicemente fissare i P ad un div predisposto per loro
// e così non dovrei centrare l'intero body ma potrei centrare oslo l'albero

const tree = (n) => {
  let body = document.getElementsByTagName("body");
  body[0].style.textAlign = "center";
  for (let i = 1; i <= n; i++) {
    let p = document.createElement("p");
    for (let x = 1; x < i * 2; x++) {
      p.innerText += "*";
    }
    body[0].appendChild(p);
  }
};

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isItPrime(23));

/* Questo array viene usato per gli esercizi. Non modificarlo. */
