//Elements
const calc_btn = document.querySelector("#calculate");

//Functions
function calculate() {
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  let imc;
  if (height == "" || weight == "") {
    alert("Insira seu peso e altura");
  } else {
    imc = (weight / (height * height)).toFixed(1);
  }
  return imc;
}

function message(imc) {
  const name = document.querySelector("#name").value;
  const message = document.querySelector(".message");

  //create message element
  if (name == "") {
    alert("Preencha seu nome");
  } else {
    let newname = name[0].toUpperCase() + name.slice(1);
    message.classList.remove("hide");
    let msg = document.createElement("p");
    if (imc <= 24.9 && imc > 18.5) {
      msg.innerText = `${newname}, seu IMC é ${imc} e você está com peso normal`;
    } else if (imc <= 18.5) {
      msg.innerText = `${newname}, seu IMC é ${imc} e você está abaixo do peso`;
    } else {
      msg.innerText = `${newname}, seu IMC é ${imc} e você está acima do peso`;
    }
    message.appendChild(msg);
  }
}

//Events
calc_btn.addEventListener("click", () => {
  let imc = calculate();
  message(imc);
});
