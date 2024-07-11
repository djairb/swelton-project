const formulario = document.getElementById('f1formulario');
const f1calcularButton = document.getElementById('f1calcular');
const f1resultado = document.getElementById('f1resultado');


const formulario2 = document.getElementById('f2formulario');
const f2calcularButton = document.getElementById('f2calcular');
const f2resultado = document.getElementById('f2resultado');


const formulario3 = document.getElementById('f3formulario');
const f3calcularButton = document.getElementById('f3calcular');
const f3resultado = document.getElementById('f3resultado');

f1calcularButton.addEventListener('click', f1calcularPontuacao); // Add event listener to button

f2calcularButton.addEventListener('click', f2calcularPontuacao); // Add event listener to button

f3calcularButton.addEventListener('click', f3calcularPontuacao); // Add event listener to button

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

function f3calcularPontuacao() {
  let pontuacao3 = 0;

  // Get values for each question
  const f3q1 = document.querySelector('input[name="f3q1"]:checked');
  const f3q2 = document.querySelector('input[name="f3q2"]:checked');
  const f3q3 = document.querySelector('input[name="f3q3"]:checked');
  const f3q4 = document.querySelector('input[name="f3q4"]:checked');
  const f3q5 = document.querySelector('input[name="f3q5"]:checked');
  const f3q6 = document.querySelector('input[name="f3q6"]:checked');
  const f3q7 = document.querySelector('input[name="f3q7"]:checked');
  const f3q8 = document.querySelector('input[name="f3q8"]:checked');
  const f3q9 = document.querySelector('input[name="f3q9"]:checked');
  const f3q10 = document.querySelector('input[name="f3q10"]:checked');
  const f3q11 = document.querySelector('input[name="f3q11"]:checked');
  const f3q12 = document.querySelector('input[name="f3q12"]:checked');
  const f3q13 = document.querySelector('input[name="f3q13"]:checked');
  const f3q14 = document.querySelector('input[name="f3q14"]:checked');
  const f3q15 = document.querySelector('input[name="f3q15"]:checked');
  const f3q16 = document.querySelector('input[name="f3q16"]:checked');
  const f3q17 = document.querySelector('input[name="f3q17"]:checked');
  const f3q18 = document.querySelector('input[name="f3q18"]:checked');
  const f3q19 = document.querySelector('input[name="f3q19"]:checked');
  const f3q20 = document.querySelector('input[name="f3q20"]:checked');
  const f3q21 = document.querySelector('input[name="f3q21"]:checked');
  const f3q22 = document.querySelector('input[name="f3q22"]:checked');
 

  // Check if any option is selected and add points accordingly
  if (f3q1) {
    pontuacao3 += parseInt(f3q1.value);
  }
  if (f3q2) {
    pontuacao3 += parseInt(f3q2.value);
  }
  if (f3q3) {
    pontuacao3 += parseInt(f3q3.value);
  }
  if (f3q4) {
    pontuacao3 += parseInt(f3q4.value);
  }
  if (f3q5) {
    pontuacao3 += parseInt(f3q5.value);
  }
  if (f3q6) {
    pontuacao3 += parseInt(f3q6.value);
  }
  if (f3q7) {
    pontuacao3 += parseInt(f3q7.value);
  }
  if (f3q8) {
    pontuacao3 += parseInt(f3q8.value);
  }
  if (f3q9) {
    pontuacao3 += parseInt(f3q9.value);
  }
  if (f3q10) {
    pontuacao3 += parseInt(f3q10.value);
  }
  if (f3q11) {
    pontuacao3 += parseInt(f3q11.value);
  }
  if (f3q12) {
    pontuacao3 += parseInt(f3q12.value);
  }
  if (f3q13) {
    pontuacao3 += parseInt(f3q13.value);
  }
  if (f3q14) {
    pontuacao3 += parseInt(f3q14.value);
  }

  if (f3q15) {
    pontuacao3 += parseInt(f3q15.value);
  }

  if (f3q16) {
    pontuacao3 += parseInt(f3q16.value);
  }

  if (f3q17) {
    pontuacao3 += parseInt(f3q17.value);
  }

  if (f3q18) {
    pontuacao3 += parseInt(f3q18.value);
  }

  if (f3q19) {
    pontuacao3 += parseInt(f3q19.value);
  }

  if (f3q20) {
    pontuacao3 += parseInt(f3q20.value);
  }

  if (f3q21) {
    pontuacao3 += parseInt(f3q21.value);
  }

  if (f3q22) {
    pontuacao3 += parseInt(f3q22.value);
  }
  // Update the result element with the calculated score
  f3resultado.textContent = `Sua pontuação: ${pontuacao3}`;
}
