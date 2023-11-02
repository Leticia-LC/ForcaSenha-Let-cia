let senha = document.getElementById("idSenha");
let barra = document.querySelector(".status");
let mostrarSenha = document.getElementById("idButton");
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayMinusculas = ["a", "b", "c", "ç", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let arrayMaiusculas = ["A", "B", "C", "Ç", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let arrayCaracteres = ["\"", "'", "#", "$", "%", "&", "*", "(", ")", "_", "+", "-", "=", "{", "[", "]", "}", "^", "/", "?", "~", ";", ":", ".", ">", ",", "<", "\\", "|", "@"];

mostrarSenha.addEventListener("click", function() {
    if (senha.type === "password") {
        senha.type = "text";
        document.getElementById("idButton").innerText = "HIDE";
    } else {
        senha.type = "password";
        document.getElementById("idButton").innerText = "SHOW";
    }
});

senha.addEventListener("input", function() {
    let progresso = senha.value.length;
    let barraProgresso = document.querySelector(".barraProgresso");
    let count = 0;


    if (progresso >= 1 && progresso <= 6) {
        count += 1;
    } else if (progresso > 6 && progresso < 10) {
        count += 2;
    } else if (progresso >= 10 && progresso < 12) {
        count += 3;
    } else if (progresso >= 12 && progresso < 14) {
        count += 4;
    } else if (progresso >= 14) {
        count += 5;
    }

    for (let i = 0; i < senha.value.length; i++) {
        if (arrayNumeros.includes(senha.value[i])) {
            count += 1;
        }
    }

    for (let i = 0; i < senha.value.length; i++) {
        if (arrayMinusculas.includes(senha.value[i])) {
            count += 1;
        }
    }

    for (let i = 0; i < senha.value.length; i++) {
        if (arrayMaiusculas.includes(senha.value[i])) {
            count += 1;
        }
    }

    for (let i = 0; i < senha.value.length; i++) {
        if (arrayCaracteres.includes(senha.value[i])) {
            count += 2;
        }

        barraProgresso.style.width = `${count * 10, 100}%`;

        if (count <= 5) {
            barraProgresso.className = "barraProgresso barraFraca";
        } else if (count > 5 && count < 9) {
            barraProgresso.className = "barraProgresso barraModerada";
        } else if(count > 9){
            barraProgresso.style.width = "100%";
            barraProgresso.className = "barraProgresso barraForte";
        }
    }
});
