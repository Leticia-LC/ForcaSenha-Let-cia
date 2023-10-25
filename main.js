const inputSenha = document.querySelector("idSenha")
        let forcaSenha = 0
        let saida = document.querySelector(".barraProtecao")
        let arrayNumeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        let arrayMin = ["a", "b", "c", , "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        let arrayMax = ["A", "B", "C", "Ç", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        let arrayCaracteres = ["\"", "'", "#", "$", "%", "&", "*", "(", ")", "_", "+", "-", "=", "{", "[", "]", "}", "^", "/", "?", "~", ";", ":", ".", ">", ",", "<", "\\", "|", "@"]

        function mostrarSenha(){
            let botao = document.querySelector(".idButton")

            if(botao.textContent == "SHOW"){
                botao.textContent = "HIDE"

            } else {
                botao.textContent = "SHOW"
            }
        }

        inputSenha.focus();
        
        inputSenha.addEventListener("input", (element) =>{
            let senha = document.querySelector("idSenha").value

            if(senha.lenght > 1 && senha.length < 6){
                forcaSenha += 1;

            } else if(senha.length > 6 && senha.length < 10){
                forcaSenha += 2;

            } else if(senha.length >= 10 && senha.length < 12){
                forcaSenha += 3;

            } else if(senha.length >= 12 && senha.length < 14){
                forcaSenha += 4;

            } else if(senha.length >= 14){
                forcaSenha += 5;
            }

            for(let i = 0; i < senha.length; i++){
                if((arrayNumeros.toString()).includes(senha[i])){
                    forcaSenha += 1;
                    break;
                }
            }

            for(let i = 0; i < senha.length; i++){
                if(arrayMin.includes(senha[i])){
                    forcaSenha += 1;
                    break;
                }
            }
            
            for(let i = 0; i < senha.length; i++){
                if(arrayMax.includes(senha[i])){
                    forcaSenha += 1;
                    break;
                }
            }

            for(let i = 0; i < senha.length; i++){
                if(arrayCaracteres.includes(senha[i])){
                    forcaSenha += 2;
                    break;
                }
            }

            forcaSenha = Math.min(forcaSenha, 10);

            let barraProtecao = document.querySelector(".protecaoSenha");
            let barraProtecaoWidth = pontos * 10;

            barraProtecao.computedStyleMap.width = barraProtecaoWidth + '%';

            if (pontos >= 9) { 
                document.documentElement.style.setProperty("--color", "#0f0");
                barraProgresso.style.backgroundColor = "#0f0";
            }
            if (pontos > 5 && pontos < 9) { 
                document.documentElement.style.setProperty("--color", "#fded00");
                barraProgresso.style.backgroundColor = "#fded00";
            }
            if (pontos <= 5) { 
                document.documentElement.style.setProperty("--color", "#bd1b4e");
                barraProgresso.style.backgroundColor = "#bd1b4e";
            }

 
        });