/*EVENTOS DE ALERT API SWEET ALERT*/

const successAlert = () => {

    Swal.fire(
        
        'Obrigado!',
        'Dados enviados com sucesso!',
        'success'
      )
}

const errorAlert = () => {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo deu errado!',
        footer: 'Suporte técnico: (11)98695-0439'
      })
}

// MÁSCARA TELEFONE FORMULÁRIO

const phoneMask = phone => {

    const value = phone.value;
    let numberFormated

    const isCellphone = value.length === 11

    if (isCellphone) {

        const part1 = value.slice(0, 2)
        const part2 = value.slice(2, 7)
        const part3 = value.slice(7)

        numberFormated = `(${part1}) ${part2}-${part3}`
    } else {

        const part1 = value.slice(0, 2)
        const part2 = value.slice(2, 6)
        const part3 = value.slice(6)

        numberFormated = `(${part1}) ${part2}-${part3}`
    }

    phone.value = numberFormated
}

// ENVIO DE FORMULÁRIO

emailjs.init('user_IFgyDb7wGDHBg6AFzO23k')

const sendForm = event => {

    event.preventDefault();
    
    emailjs.sendForm('service_cgiarkg', 'template_4l1fhta', '#form')
    .then(() => {

        console.log('SUCCESS!')
        successAlert()
    }, (error) => {

        console.log('FAILED ...', error)
        errorAlert()
    })
}

window.onload = () => {

    const form = document.querySelector('#form')
    form.addEventListener('submit', sendForm)
}