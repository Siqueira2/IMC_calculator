//Elements
const calc_btn = document.querySelector('#calculate')

//Functions
function calculate() {
    const name = document.querySelector('#name').value
    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    let imc
    if (height == '' || weight == '' || name == ''){
        alert('Preencha todos os dados')
    } else {
        imc = (weight / (height * height)).toFixed(1)
    }
    return imc
}

function message(name, imc) {
    
}

//Events
calc_btn.addEventListener('click', () => {
    let imc = calculate()

    if (imc <= 24.9 && imc > 18.5) {
        console.log('Peso normal')
    } else if (imc <= 18.5) {
        console.log('Abaixo do peso')
    } else {
        console.log('Acima do peso')
    }
})