const formulario = document.getElementById('f1formulario');
const f1calcularButton = document.getElementById('f1calcular');
const f1resultado = document.getElementById('f1resultado');


const formulario2 = document.getElementById('f2formulario');
const f2calcularButton = document.getElementById('f2calcular');
const f2resultado = document.getElementById('f2resultado');

f1calcularButton.addEventListener('click', f1calcularPontuacao); // Add event listener to button

f2calcularButton.addEventListener('click', f2calcularPontuacao); // Add event listener to button

function f1calcularPontuacao() {
  let pontuacao = 0;

  // Get values for each question
  const f1q1 = document.querySelector('input[name="f1q1"]:checked');
  const f1q2 = document.querySelector('input[name="f1q2"]:checked');
  const f1q3 = document.querySelector('input[name="f1q3"]:checked');
  const f1q4 = document.querySelector('input[name="f1q4"]:checked');
  const f1q5 = document.querySelector('input[name="f1q5"]:checked');
  const f1q6 = document.querySelector('input[name="f1q6"]:checked');
  const f1q7 = document.querySelector('input[name="f1q7"]:checked');
  const f1q8 = document.querySelector('input[name="f1q8"]:checked');
  const f1q9 = document.querySelector('input[name="f1q9"]:checked');
  const f1q10 = document.querySelector('input[name="f1q10"]:checked');
  const f1q11 = document.querySelector('input[name="f1q11"]:checked');
  const f1q12 = document.querySelector('input[name="f1q12"]:checked');
  const f1q13 = document.querySelector('input[name="f1q13"]:checked');
  const f1q14 = document.querySelector('input[name="f1q14"]:checked');
  const f1q15 = document.querySelector('input[name="f1q15"]:checked');
  const f1q16 = document.querySelector('input[name="f1q16"]:checked');
  const f1q17 = document.querySelector('input[name="f1q17"]:checked');

  // Check if any option is selected and add points accordingly
  if (f1q1) {
    pontuacao += parseInt(f1q1.value);
  }
  if (f1q2) {
    pontuacao += parseInt(f1q2.value);
  }
  if (f1q3) {
    pontuacao += parseInt(f1q3.value);
  }
  if (f1q4) {
    pontuacao += parseInt(f1q4.value);
  }
  if (f1q5) {
    pontuacao += parseInt(f1q5.value);
  }
  if (f1q6) {
    pontuacao += parseInt(f1q6.value);
  }
  if (f1q7) {
    pontuacao += parseInt(f1q7.value);
  }
  if (f1q8) {
    pontuacao += parseInt(f1q8.value);
  }
  if (f1q9) {
    pontuacao += parseInt(f1q9.value);
  }
  if (f1q10) {
    pontuacao += parseInt(f1q10.value);
  }
  if (f1q11) {
    pontuacao += parseInt(f1q11.value);
  }
  if (f1q12) {
    pontuacao += parseInt(f1q12.value);
  }
  if (f1q13) {
    pontuacao += parseInt(f1q13.value);
  }
  if (f1q14) {
    pontuacao += parseInt(f1q14.value);
  }
  if (f1q15) {
    pontuacao += parseInt(f1q15.value);
  }
  if (f1q16) {
    pontuacao += parseInt(f1q16.value);
  }
  if (f1q17) {
    pontuacao += parseInt(f1q17.value);
  }
  // Update the result element with the calculated score
  f1resultado.textContent = `Sua pontuação: ${pontuacao}`;
}

function f2calcularPontuacao() {
  let pontuacao2 = 0;

  // Get values for each question
  const f2q1 = document.querySelector('input[name="f2q1"]:checked');
  const f2q2 = document.querySelector('input[name="f2q2"]:checked');
  const f2q3 = document.querySelector('input[name="f2q3"]:checked');
  const f2q4 = document.querySelector('input[name="f2q4"]:checked');
  const f2q5 = document.querySelector('input[name="f2q5"]:checked');
  const f2q6 = document.querySelector('input[name="f2q6"]:checked');
  const f2q7 = document.querySelector('input[name="f2q7"]:checked');
  const f2q8 = document.querySelector('input[name="f2q8"]:checked');
  const f2q9 = document.querySelector('input[name="f2q9"]:checked');
  const f2q10 = document.querySelector('input[name="f2q10"]:checked');
  const f2q11 = document.querySelector('input[name="f2q11"]:checked');
  const f2q12 = document.querySelector('input[name="f2q12"]:checked');
  const f2q13 = document.querySelector('input[name="f2q13"]:checked');
 

  // Check if any option is selected and add points accordingly
  if (f2q1) {
    pontuacao2 += parseInt(f2q1.value);
  }
  if (f2q2) {
    pontuacao2 += parseInt(f2q2.value);
  }
  if (f2q3) {
    pontuacao2 += parseInt(f2q3.value);
  }
  if (f2q4) {
    pontuacao2 += parseInt(f2q4.value);
  }
  if (f2q5) {
    pontuacao2 += parseInt(f2q5.value);
  }
  if (f2q6) {
    pontuacao2 += parseInt(f2q6.value);
  }
  if (f2q7) {
    pontuacao2 += parseInt(f2q7.value);
  }
  if (f2q8) {
    pontuacao2 += parseInt(f2q8.value);
  }
  if (f2q9) {
    pontuacao2 += parseInt(f2q9.value);
  }
  if (f2q10) {
    pontuacao2 += parseInt(f2q10.value);
  }
  if (f2q11) {
    pontuacao2 += parseInt(f2q11.value);
  }
  if (f2q12) {
    pontuacao2 += parseInt(f2q12.value);
  }
  if (f2q13) {
    pontuacao2 += parseInt(f2q13.value);
  }
  // Update the result element with the calculated score
  f2resultado.textContent = `Sua pontuação: ${pontuacao2}`;
}
