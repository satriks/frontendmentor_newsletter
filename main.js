document.querySelector('form').addEventListener('submit', success)

function success(event) {
    event.preventDefault()

    if (!validateEmail(this.inputEmail.value)){ 
        if (!this.querySelector('span')){
            this.querySelector('label').insertAdjacentElement('beforeend' , createErrorMessage())
        }
    } else {
        if(this.querySelector('span')) {
        this.querySelector('span').remove()
        }
    document.querySelector('.conteiner').classList.add('hidden')
    document.querySelector('.success-wraper').classList.remove('hidden')
    }
}

function createErrorMessage() {
    const span = document.createElement('span')
    span.innerText = 'You email required'
    span.classList.add('error')
    return span

}

function validateEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email)
    .toLowerCase())
}


