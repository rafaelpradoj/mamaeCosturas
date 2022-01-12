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

const mask = (o, f)  => {

    setTimeout(() => {

        let v = mphone(o.value)

        if(v != o.value) {

            o.value = v
        }
    }, 1)
}

const mphone = v => {

    let r = v.replace(/\D/g, "")

    r = r.replace(/^0/, "");

    const rSize = r.length

    if (rSize > 10) {

        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (rSize > 5) {

        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (rSize > 2) {

        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {

        r = r.replace(/^(\d*)/, "($1");
    }

    return r
}

// ENVIO DE FORMULÁRIO API EMAIL JS

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