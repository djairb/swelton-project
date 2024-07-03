const formulario = document.getElementById('formulario');
const calcularButton = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

calcularButton.addEventListener('click', calcularPontuacao); // Add event listener to button

function calcularPontuacao() {
  let pontuacao = 0;

  // Get values for each question
  const exercicio = document.querySelector('input[name="exercicio"]:checked');
  const dor = document.querySelector('input[name="dor"]:checked');
  const corpo = document.querySelector('input[name="corpo"]:checked');

  // Check if any option is selected and add points accordingly
  if (exercicio) {
    pontuacao += parseInt(exercicio.value);
  }
  if (dor) {
    pontuacao += parseInt(dor.value);
  }
  if (corpo) {
    pontuacao += parseInt(corpo.value);
  }

  // Update the result element with the calculated score
  resultado.textContent = `Sua pontuação: ${pontuacao}`;
}
