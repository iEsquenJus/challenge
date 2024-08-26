const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    if (!regex.test(texto)) {
        alert("Solo se permiten letras minúsculas, sin acentos ni caracteres especiales.");
        return false;
    }
    return true;
}

function encriptarBoton() {
    const texto = textArea.value;  
    if (validarTexto(texto)) {
        const textoEncriptado = encriptar(texto);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";

        document.querySelector(".btn-copiar").style.display = "block";
    }
}


function encriptar(encriptada) {
    let convert = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

    encriptada = encriptada.toLowerCase()
    
    for (let i = 0 ; i < convert.length; i++){

        if(encriptada.includes(convert[i][0])){
            encriptada = encriptada.replaceAll(convert[i][0], convert[i][1])
        }
    }
    return encriptada
}


function desencriptarBoton(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}


function desencriptar(desencriptada){
    let convert = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

    desencriptada = desencriptada.toLowerCase();

    for(let i = 0 ; i < convert.length; i ++){
        if(desencriptada.includes(convert[i][1])){
            desencriptada = desencriptada.replaceAll(convert[i][1], convert[i][0])
        }
    }
    return desencriptada
}


function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

}

document.querySelector(".btn-copiar").addEventListener("click", copiarTexto);



