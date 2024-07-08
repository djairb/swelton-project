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
    // Update the result element with the calculated score
    f3resultado.textContent = `Sua pontuação: ${pontuacao3}`;
  }