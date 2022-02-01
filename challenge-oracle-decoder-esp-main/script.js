
var botonEncriptar = document.querySelector("#btn-encriptar"); //relaciono el Html con el javaScript

botonEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    let textoEntrada = document.querySelector("#input-texto").value;

    if (validarTexto(textoEntrada)) {
        let textoEncriptado = "";

        for (let i = 0; i < textoEntrada.length; i++) {

            if (textoEntrada[i] == "a") {
                textoEncriptado += "ai";
            } else if (textoEntrada[i] == "e") {
                textoEncriptado += "enter";
            } else if (textoEntrada[i] == "i") {
                textoEncriptado += "imes";
            } else if (textoEntrada[i] == "o") {
                textoEncriptado += "ober";
            } else if (textoEntrada[i] == "u") {
                textoEncriptado += "ufat";
            } else {
                textoEncriptado += textoEntrada[i];
            }

        }

        document.querySelector("#msg").value = textoEncriptado;
    }
}
)// fin  de la funcion anonima

var botonDesencriptar = document.querySelector("#btn-desencriptar"); //relaciono el Html con el javaScript

botonDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();
    let textoEntrada = document.querySelector("#input-texto").value;
    if (validarTexto(textoEntrada)) {
        let textoDesencriptado = textoEntrada.replace(/enter/gim, 'e').replace(/imes/gim, 'i').replace(/ai/gim, 'a').replace(/ober/gim, 'o').replace(/ufat/, 'u');
        document.querySelector("#msg").value = textoDesencriptado;

    }
})


function validarTexto(texto) {

    for (let i = 0; i < texto.length; i++) {
        console.log(texto[i].charCodeAt());
        if (((texto[i].charCodeAt() < 97) || (texto[i].charCodeAt() > 122)) && (texto[i] != " ")) {
            alert("Solo minusculas");
            return false;
        }
    }
    return true;

}

 document.querySelector("#btn-copy").addEventListener("click", copiar);

function copiar() {
    let copiarTexto = document.querySelector("#msg");
    copiarTexto.select();
    document.execCommand("copy");
}
