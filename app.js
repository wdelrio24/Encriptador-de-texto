function setupRedirectButton(buttonId) {
    document.getElementById(buttonId).addEventListener('click', function() {
        var textarea = document.getElementById('longText');
        var text = textarea.value.trim(); // Obtener el valor del textarea y eliminar espacios en blanco al principio y al final

        if (text) {
            // Si hay texto, redirigir a otra página
            localStorage.setItem('textareaValue', text);
            window.location.href = 'app.html';  // Redirige a la URL proporcionada
        } else {
            window.location.href = 'index.html';  // Redirige a la URL proporcionada
        }
    });
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


var savedText = localStorage.getItem('textareaValue');
if (savedText) {
    document.getElementById('longText').value = savedText;
}

asignarTextoElemento('textarea',savedText);

setupRedirectButton("encriptar")
setupRedirectButton("desencriptar")
