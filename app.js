const secretNumberContainer = document.getElementById('secret-number');
const input = document.getElementById('floatingInput');
const button = document.getElementById('check-button');
const hint = document.getElementById('hint');
const scoreContainer = document.getElementById('score');

const randomNumber = Math.trunc(Math.random() * 20);
secretNumberContainer.textContent = randomNumber;

let score=20;
scoreContainer.textContent = score;
score=scoreContainer.textContent;
const compareToRandom = function () {
  const respuesta = Number(input.value); //obtiene el número que el usuario ingresa en el input y lo guarda en la variable respuesta1
  
  
    if (respuesta === randomNumber) {
      hint.textContent = 'Correcto 🎉';
      hint.classList = 'alert alert-success';
      }
        else if (respuesta < randomNumber) {
      hint.textContent = 'Lo siento, el número secreto es MAYOR  intente de nuevo!!!!  ';
      hint.classList = 'alert alert-danger';
      score--;
      scoreContainer.textContent=score;
      document.getElementById("floatingInput").value = "";
    }else if (respuesta > randomNumber) {
      hint.textContent = 'Lo siento, el número secreto es MENOR intente de nuevo!!!! ';
      hint.classList = 'alert alert-danger';
      score--;
      scoreContainer.textContent=score;
      document.getElementById("floatingInput").value = "";
    }
  }

    button.addEventListener('click', compareToRandom);