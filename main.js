.const botoes = document.querySelectorAII(".botao");
const textos = document.querySelectorAII(".abaconteudo");
.for (let i = 0,1<botoes.length;i++){
    botoes[i].onclik = function (){
        for (let j = 0,j <botoes.lengh;j=++){
            botoes[j].classList.remove("ativo");
            ]textos[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}