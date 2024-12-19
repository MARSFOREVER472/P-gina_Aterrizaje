document.getElementById('newsletterForm').addEventListener('submit', function(event)
{
    event.preventDefault();
    const ingresarCorreo = document.getElementById('email');
    const mensajeFormulario = document.getElementById('formMessage');

    if(ingresarCorreo.value)
    {
        mensajeFormulario.classList.remove('hidden');
        mensajeCorreo.value = '';
    }
});

