function setupRedirectButton(buttonId,) {
    document.getElementById(buttonId).addEventListener('click', function() {
        var textarea = document.getElementById('longText');
        var text = textarea.value.trim(); // Obtener el valor del textarea y eliminar espacios en blanco al principio y al final

        if (text) {
            if (isLowerCase(text)) {
                 // Si hay texto, redirigir a otra página
                localStorage.setItem('textareaValue', text);
                setupEncryptionListeners('.presentacion__contenido');
                window.location.href = 'app.html';  // Redirige a la URL proporcionada
                
            } else {
                // Si el texto no está en minúscula sin acentos, realiza otra acción
                alert("El texto no está completamente en minúscula sin acentos.");
            }
           
        } else {
            replaceLocalStorageValue();
            window.location.href = 'index.html';  // Redirige a la URL proporcionada
        }
    });
}

function isLowerCase(str) {
    return /^[a-z]+$/.test(str); // Verificar si la cadena contiene solo letras minúsculas sin acentos
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

function replaceLocalStorageValue() {
    localStorage.setItem('textareaValue', ''); // Reemplaza el valor en localStorage con una cadena vacía
    document.getElementById('longText').value = ''; // Limpia el textarea
}


var savedText = localStorage.getItem('textareaValue');
var outputText = localStorage.getItem('outputText');
if (savedText) {
    document.getElementById('longText').value = savedText;
}




asignarTextoElemento('textarea',savedText);
setupRedirectButton("encriptar")
setupRedirectButton("desencriptar")




function encrypt(text) {
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    return decryptedText;
}

function setupEncryptionListeners(containerSelector) {
    document.querySelector(containerSelector).addEventListener('click', function(event) {
        var inputText = document.getElementById('longText').value;
        var outputText;

        if (event.target.id === 'encriptar') {
            outputText = encrypt(inputText);
        } else if (event.target.id === 'desencriptar') {
            outputText = decrypt(inputText);
        }
        localStorage.setItem('outputText', outputText);
       
    });
}

asignarTextoElemento('.t2', outputText);

