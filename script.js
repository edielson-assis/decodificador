const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    verificar();
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(mensagemEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensagemEncriptada = mensagemEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (mensagemEncriptada.includes(matrizCodigo[i][0])) {
            mensagemEncriptada = mensagemEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return mensagemEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    verificar();
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(mensagemDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensagemDesencriptada = mensagemDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (mensagemDesencriptada.includes(matrizCodigo[i][1])) {
            mensagemDesencriptada = mensagemDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return mensagemDesencriptada;
}

function btnCopiar() {
    const textoCopiado = mensagem.value;
    verificar();
    textArea.value = textoCopiado;
    mensagem.value = "";
}

function verificar() {
    mensagem.value = textArea.value;

    if (window.matchMedia("(max-width: 767px)").matches) {
        mensagem.style.backgroundImage = 'none'; 
    } else {
        if (mensagem.value.trim() !== '') {
            mensagem.style.backgroundImage = 'none';
        } else {
            mensagem.style.backgroundImage = 'url(img/boneco.png)';
        }
    }
}


function validaBtnEncriptar() {
    if (textArea.value !== '') {
        btnEncriptar();
    }
}

function validaBtnDesencriptar() {
    if (textArea.value !== '') {
        btnDesencriptar();
    }
}

function validaBtnCpiar() {
    if (mensagem.value !== '') {
        btnCopiar();
    }
}