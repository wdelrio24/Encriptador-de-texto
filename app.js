function setupRedirectButton(buttonId) {
    document.getElementById(buttonId).addEventListener('click', function() {
        var textarea = document.getElementById('longText');
        var text = textarea.value.trim(); // Obtener el valor del textarea y eliminar espacios en blanco al principio y al final

        if (text) {
            // Si hay texto, redirigir a otra página
            window.location.href = 'app.html';  // Redirige a la URL proporcionada
        } else {
            // Opcional: manejar el caso cuando el textarea está vacío
            window.location.href = 'index.html';  // Redirige a la URL proporcionada
        }
    });
}


setupRedirectButton("encriptar")
setupRedirectButton("desencriptar")