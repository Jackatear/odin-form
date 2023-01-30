const form = document.querySelector('form')
const email = document.querySelector('#email')

function canContinue() {
    const successes = document.querySelectorAll('.success')
    if (successes.length < 4) {
        alert('please correctly fill out form')
    } else {
        alert('account created')
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputs = document.querySelectorAll('.input')
    inputs.forEach(Input => {
        if (Input.validity.valueMissing == false) {
            Input.parentElement.className = 'part success';
        }
    })

    const password = document.querySelector('#password')
    const passwordCheck = document.querySelector('#confirm-password')
    if (password.value != passwordCheck.value){
        passwordCheck.parentElement.className = 'part error'
    }

    canContinue()
})