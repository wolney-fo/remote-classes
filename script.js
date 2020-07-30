function someFunc() {
  var date = new Date();

  if (date.getDay() === 1 && date.getHours() === 7) {
    document.getElementById("title").innerHTML = "Artes";
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 8 &&
    date.getMinutes() < 56
  ) {
    document.getElementById("title").innerHTML = "Português";
  } else if (
    date.getDay() === 1 &&
    date.getHours() >= 8 &&
    date.getMinutes() > 55 &&
    date.getHours() < 9
  ) {
    document.getElementById("title").innerHTML = "Geografia Geral";
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 9 &&
    date.getMinutes() < 51
  ) {
    document.getElementById("title").innerHTML = "Geografia Geral";
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 9 &&
    date.getMinutes() > 50 &&
    date.getHours() < 10
  ) {
    document.getElementById("title").innerHTML = "Intervalo";
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 10 &&
    date.getMinutes() < 15
  ) {
    document.getElementById("title").innerHTML = "Intervalo";
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 10 &&
    date.getMinutes() > 14
  ) {
    document.getElementById("title").innerHTML = "Geografia Geral";
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 11 &&
    date.getMinutes() < 16
  ) {
    document.getElementById("title").innerHTML = "Geografia Geral";
  } else if (
    date.getDay() === 1 &&
    date.getHours() >= 11 &&
    date.getMinutes() > 15 &&
    date.getHours() < 12
  ) {
    document.getElementById("title").innerHTML = "Matemática II";
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    document.getElementById("title").innerHTML = "Matemática II";
  } else if (
    date.getDay() === 1 &&
    date.getHours() >= 12 &&
    date.getMinutes() > 9 &&
    date.getHours() < 13
  ) {
    document.getElementById("title").innerHTML = "Matemática II";
  } else if (date.getDay() === 2 && date.getHours() === 7) {
    document.getElementById("title").innerHTML = "Química I";
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 8 &&
    date.getMinutes() < 56
  ) {
    document.getElementById("title").innerHTML = "Química I";
  } else if (
    date.getDay() === 2 &&
    date.getHours() >= 8 &&
    date.getMinutes() > 55 &&
    date.getHours() < 9
  ) {
    document.getElementById("title").innerHTML = "História Geral";
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 9 &&
    date.getMinutes() < 51
  ) {
    document.getElementById("title").innerHTML = "História Geral";
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 9 &&
    date.getMinutes() > 50 &&
    date.getHours() < 10
  ) {
    document.getElementById("title").innerHTML = "Intervalo";
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 10 &&
    date.getMinutes() < 15
  ) {
    document.getElementById("title").innerHTML = "Intervalo";
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 10 &&
    date.getMinutes() > 14
  ) {
    document.getElementById("title").innerHTML = "História Geral";
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 11 &&
    date.getMinutes() < 16
  ) {
    document.getElementById("title").innerHTML = "História Geral";
  } else if (
    date.getDay() === 2 &&
    date.getHours() >= 11 &&
    date.getMinutes() > 15 &&
    date.getHours() < 12
  ) {
    document.getElementById("title").innerHTML = "Filosofia";
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    document.getElementById("title").innerHTML = "Filosofia";
  } else if (
    date.getDay() === 2 &&
    date.getHours() >= 12 &&
    date.getMinutes() > 9 &&
    date.getHours() < 13
  ) {
    document.getElementById("title").innerHTML = "Física I";
  } else if (date.getDay() === 3 && date.getHours() === 7) {
    document.getElementById("title").innerHTML = "Química II";
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 8 &&
    date.getMinutes() < 56
  ) {
    document.getElementById("title").innerHTML = "Química II";
  } else if (
    date.getDay() === 3 &&
    date.getHours() >= 8 &&
    date.getMinutes() > 55 &&
    date.getHours() < 9
  ) {
    document.getElementById("title").innerHTML = "Português";
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 9 &&
    date.getMinutes() < 51
  ) {
    document.getElementById("title").innerHTML = "Português";
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 9 &&
    date.getMinutes() > 50 &&
    date.getHours() < 10
  ) {
    document.getElementById("title").innerHTML = "Intervalo";
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 10 &&
    date.getMinutes() < 15
  ) {
    document.getElementById("title").innerHTML = "Intervalo";
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 10 &&
    date.getMinutes() > 14
  ) {
    document.getElementById("title").innerHTML = "Literatura";
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 11 &&
    date.getMinutes() < 16
  ) {
    document.getElementById("title").innerHTML = "Literatura";
  } else if (
    date.getDay() === 3 &&
    date.getHours() >= 11 &&
    date.getMinutes() > 15 &&
    date.getHours() < 12
  ) {
    document.getElementById("title").innerHTML = "Biologia";
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    document.getElementById("title").innerHTML = "Biologia";
  } else if (
    date.getDay() === 3 &&
    date.getHours() >= 12 &&
    date.getMinutes() > 9 &&
    date.getHours() < 13
  ) {
    document.getElementById("title").innerHTML = "Biologia";
  } else if (date.getDay() === 4 && date.getHours() === 7) {
    document.getElementById("title").innerHTML = "Inglês";
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 8 &&
    date.getMinutes() < 56
  ) {
    document.getElementById("title").innerHTML = "História do Brasil";
  } else if (
    date.getDay() === 4 &&
    date.getHours() >= 8 &&
    date.getMinutes() > 55 &&
    date.getHours() < 9
  ) {
    document.getElementById("title").innerHTML = "Redação";
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 9 &&
    date.getMinutes() < 51
  ) {
    document.getElementById("title").innerHTML = "Redação";
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 9 &&
    date.getMinutes() > 50 &&
    date.getHours() < 10
  ) {
    document.getElementById("title").innerHTML = "Intervalo";
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 10 &&
    date.getMinutes() < 15
  ) {
    document.getElementById("title").innerHTML = "Intervalo";
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 10 &&
    date.getMinutes() > 14
  ) {
    document.getElementById("title").innerHTML = "Redação";
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 11 &&
    date.getMinutes() < 16
  ) {
    document.getElementById("title").innerHTML = "Redação";
  } else if (
    date.getDay() === 4 &&
    date.getHours() >= 11 &&
    date.getMinutes() > 15 &&
    date.getHours() < 12
  ) {
    document.getElementById("title").innerHTML = "Matemática I";
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    document.getElementById("title").innerHTML = "Matemática I";
  } else if (
    date.getDay() === 4 &&
    date.getHours() >= 12 &&
    date.getMinutes() > 9 &&
    date.getHours() < 13
  ) {
    document.getElementById("title").innerHTML = "Matemática I";
  } else if (date.getDay() === 4 && date.getHours() === 14) {
    document.getElementById("title").innerHTML = "Química III";
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 15 &&
    date.getMinutes() < 6
  ) {
    document.getElementById("title").innerHTML = "Química III";
  } else if (
    date.getDay() === 4 &&
    date.getHours() >= 15 &&
    date.getMinutes() > 5 &&
    date.getHours() <= 16 &&
    date.getMinutes() < 46
  ) {
    document.getElementById("title").innerHTML = "Física III";
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 16 &&
    date.getMinutes() > 44
  ) {
    document.getElementById("title").innerHTML = "Intervalo";
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 17 &&
    date.getMinutes() < 56
  ) {
    document.getElementById("title").innerHTML = "Matemática III";
  } else if (date.getDay() === 5 && date.getHours() === 0) {
    document.getElementById("title").innerHTML = "Geografia";
  } else if (date.getDay() === 5 && date.getHours() === 7) {
    document.getElementById("title").innerHTML = "Física II";
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 8 &&
    date.getMinutes() < 56
  ) {
    document.getElementById("title").innerHTML = "Física II";
  } else if (
    date.getDay() === 5 &&
    date.getHours() >= 8 &&
    date.getMinutes() > 55 &&
    date.getHours() < 9
  ) {
    document.getElementById("title").innerHTML = "Sociologia";
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 9 &&
    date.getMinutes() < 51
  ) {
    document.getElementById("title").innerHTML = "Sociologia";
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 9 &&
    date.getMinutes() > 50 &&
    date.getHours() < 10
  ) {
    document.getElementById("title").innerHTML = "Intervalo";
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 10 &&
    date.getMinutes() < 15
  ) {
    document.getElementById("title").innerHTML = "Intervalo";
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 10 &&
    date.getMinutes() > 14
  ) {
    document.getElementById("title").innerHTML = "Geografia do Brasil";
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 11 &&
    date.getMinutes() < 16
  ) {
    document.getElementById("title").innerHTML = "Geografia do Brasil";
  } else if (
    date.getDay() === 5 &&
    date.getHours() >= 11 &&
    date.getMinutes() > 15 &&
    date.getHours() < 12
  ) {
    document.getElementById("title").innerHTML = "Biologia";
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    document.getElementById("title").innerHTML = "Biologia";
  } else if (
    date.getDay() === 5 &&
    date.getHours() >= 12 &&
    date.getMinutes() > 9 &&
    date.getHours() < 13
  ) {
    document.getElementById("title").innerHTML = "Biologia";
  } else {
    document.getElementById("title").innerHTML = "Nada, por enquanto";
  }
}

function myFunction() {
  var date = new Date();

  if (date.getDay() === 1 && date.getHours() === 7) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 8 &&
    date.getMinutes() < 56
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 1 &&
    date.getHours() >= 8 &&
    date.getMinutes() > 55 &&
    date.getHours() < 9
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 9 &&
    date.getMinutes() < 51
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 10 &&
    date.getMinutes() > 14
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 11 &&
    date.getMinutes() < 16
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 1 &&
    date.getHours() >= 11 &&
    date.getMinutes() > 15 &&
    date.getHours() < 12
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 1 &&
    date.getHours() >= 12 &&
    date.getMinutes() > 9 &&
    date.getHours() < 13
  ) {
    window.open("https://google.com/");
  } else if (date.getDay() === 2 && date.getHours() === 7) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 8 &&
    date.getMinutes() < 56
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 2 &&
    date.getHours() >= 8 &&
    date.getMinutes() > 55 &&
    date.getHours() < 9
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 9 &&
    date.getMinutes() < 51
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 10 &&
    date.getMinutes() > 14
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 11 &&
    date.getMinutes() < 16
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 2 &&
    date.getHours() >= 11 &&
    date.getMinutes() > 15 &&
    date.getHours() < 12
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 2 &&
    date.getHours() >= 12 &&
    date.getMinutes() > 9 &&
    date.getHours() < 13
  ) {
    window.open("https://google.com/");
  } else if (date.getDay() === 3 && date.getHours() === 7) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 8 &&
    date.getMinutes() < 56
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 3 &&
    date.getHours() >= 8 &&
    date.getMinutes() > 55 &&
    date.getHours() < 9
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 9 &&
    date.getMinutes() < 51
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 10 &&
    date.getMinutes() > 14
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 11 &&
    date.getMinutes() < 16
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 3 &&
    date.getHours() >= 11 &&
    date.getMinutes() > 15 &&
    date.getHours() < 12
  ) {
    window.open("https://google.com");
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    window.open("https://google.com");
  } else if (
    date.getDay() === 3 &&
    date.getHours() >= 12 &&
    date.getMinutes() > 9 &&
    date.getHours() < 13
  ) {
    window.open("https://google.com");
  } else if (date.getDay() === 4 && date.getHours() === 7) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 8 &&
    date.getMinutes() < 56
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() >= 8 &&
    date.getMinutes() > 55 &&
    date.getHours() < 9
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 9 &&
    date.getMinutes() < 51
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 10 &&
    date.getMinutes() > 14
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 11 &&
    date.getMinutes() < 16
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() >= 11 &&
    date.getMinutes() > 15 &&
    date.getHours() < 12
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() >= 12 &&
    date.getMinutes() > 9 &&
    date.getHours() < 13
  ) {
    window.open("https://google.com/");
  } else if (date.getDay() === 4 && date.getHours() === 14) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 15 &&
    date.getMinutes() < 6
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() >= 15 &&
    date.getMinutes() > 5 &&
    date.getHours() <= 16 &&
    date.getMinutes() < 46
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 17 &&
    date.getMinutes() < 56
  ) {
    window.open("https://google.com/");
  } else if (date.getDay() === 5 && date.getHours() === 7) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 8 &&
    date.getMinutes() < 56
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 5 &&
    date.getHours() >= 8 &&
    date.getMinutes() > 55 &&
    date.getHours() < 9
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 9 &&
    date.getMinutes() < 51
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 10 &&
    date.getMinutes() > 14
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 11 &&
    date.getMinutes() < 16
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 5 &&
    date.getHours() >= 11 &&
    date.getMinutes() > 15 &&
    date.getHours() < 12
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 5 &&
    date.getHours() >= 12 &&
    date.getMinutes() > 9 &&
    date.getHours() < 13
  ) {
    window.open("https://google.com/");
  } else {
    document.getElementById("prime-button").innerHTML = "☝😶";
  }
}

function someFuncElse() {
  var date = new Date();

  if (date.getDay() === 1 && date.getHours() === 7 && date.getMinutes() > 49) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 8 &&
    date.getMinutes() > 44 &&
    date.getMinutes() < 56
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 11 &&
    date.getMinutes() > 4 &&
    date.getMinutes() < 16
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 1 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 7 &&
    date.getMinutes() > 49
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 8 &&
    date.getMinutes() > 44 &&
    date.getMinutes() < 56
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 11 &&
    date.getMinutes() > 4 &&
    date.getMinutes() < 16
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 2 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 7 &&
    date.getMinutes() > 49
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 8 &&
    date.getMinutes() > 44 &&
    date.getMinutes() < 56
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 11 &&
    date.getMinutes() > 4 &&
    date.getMinutes() < 16
  ) {
    window.open("https://google.com");
  } else if (
    date.getDay() === 3 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    window.open("https://google.com");
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 7 &&
    date.getMinutes() > 49
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 8 &&
    date.getMinutes() > 44 &&
    date.getMinutes() < 56
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 11 &&
    date.getMinutes() > 4 &&
    date.getMinutes() < 16
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 4 &&
    date.getHours() === 14 &&
    date.getMinutes() > 54 &&
    date.getHours() <= 15 &&
    date.getMinutes() < 6
  ) {
    window.open("https://google.com/");
  } else if (date.getHours() === 15 && date.getMinutes() < 6) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 7 &&
    date.getMinutes() > 49
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 8 &&
    date.getMinutes() > 44 &&
    date.getMinutes() < 56
  ) {
    window.open("https://google.com/");
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 11 &&
    date.getMinutes() > 4 &&
    date.getMinutes() < 16
  ) {
    window.open("https://google.com");
  } else if (
    date.getDay() === 5 &&
    date.getHours() === 12 &&
    date.getMinutes() < 10
  ) {
    window.open("https://google.com");
  } else {
    document.getElementById("btn").innerHTML = "Ainda não 😕";
  }
}
