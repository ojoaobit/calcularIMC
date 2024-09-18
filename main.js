function verificar() {
  var num_altura = document.getElementById("txtaltura");
  var altura = Number(num_altura.value);
  var num_peso = document.getElementById("txtpeso");
  var peso = Number(num_peso.value);
  var formSex = document.getElementsByName("radiosex");
  var resultado = document.getElementById("resultado");
  var genero = "";
  var imc = peso / (altura * altura);
  var img = document.createElement("img");
  img.setAttribute("id", "foto");
  img.style.width = "250px";
  img.style.height = "250px";
  resultado.innerHTML += `<p>Voce está com IMC de <strong> ${imc.toFixed(
    2
  )}</strong></p>`;

  if (formSex[0].checked) {
    genero = "Homem";
    img.src = "./homem.png";
    resultado.innerHTML += `<p>Voce e <strong>${genero}</strong></p>`;
    if (imc < 17) {
      resultado.innerHTML += `<p>Muito abaixo do peso!</p>`;
    } else if (imc >= 17 && imc < 18.5) {
      resultado.innerHTML += `<p>Abaixo do peso!</p>`;
    } else if (imc >= 18.5 && imc < 24.9) {
      resultado.innerHTML += `<p>Peso normal!</p>`;
    } else if (imc >= 25.5 && imc < 29.9) {
      resultado.innerHTML += `<p>Acima do peso!</p>`;
    } else if (imc >= 30.5 && imc < 34.9) {
      resultado.innerHTML += `<p>Obesidade grau 1!</p>`;
    } else if (imc >= 35.5 && imc < 40) {
      resultado.innerHTML += `<p>Obesidade grau 2!</p>`;
    } else {
      resultado.innerHTML += `<p>Obesidade grau 3!</p>`;
    }

    //  SE FOR MULHER
  } else if (formSex[1].checked) {
    genero = "Mulher";
    img.src = "./mulher.png";
    resultado.innerHTML += `<p>Voce e <strong>${genero}</strong></p>`;
    if (imc < 16) {
      resultado.innerHTML += `<p>Muito abaixo do peso!</p>`;
    } else if (imc >= 16 && imc < 18.5) {
      resultado.innerHTML += `<p>Abaixo do peso!</p>`;
    } else if (imc >= 18.5 && imc < 24) {
      resultado.innerHTML += `<p>Peso normal!</p>`;
    } else if (imc >= 25 && imc < 30) {
      resultado.innerHTML += `<p>Acima do peso!</p>`;
    } else if (imc >= 30 && imc < 35) {
      resultado.innerHTML += `<p>Obesidade grau 1!</p>`;
    } else if (imc >= 35 && imc <= 40) {
      resultado.innerHTML += `<p>Obesidade grau 2!</p>`;
    } else {
      resultado.innerHTML += `<p>Obesidade grau 3!</p>`;
    }
  }
  resultado.appendChild(img);
}
// LIMPA O RESULTADO
function limpar() {
  document.getElementById("resultado").innerHTML = "";

  // VERIFICA SE A IMAGEM EXISTE PRA LIMPAR
  var img = document.getElementById("foto");
  if (img) {
    img.src = "";
  }
}
