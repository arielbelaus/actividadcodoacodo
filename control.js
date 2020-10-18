const usuario = document.querySelector('#user')
const clave = document.querySelector('#clave')
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    if( usuario.value === '' || clave.value === '' || usuario.value.indexOf('@') === -1){
        e.preventDefault()
        const alerta = document.querySelector('.alert')
        alerta.style.display = 'block'
        usuario.value = ''
        clave.value = ''
        setTimeout(() => {
            alerta.style.display = 'none'
        },2000)
    }
})
