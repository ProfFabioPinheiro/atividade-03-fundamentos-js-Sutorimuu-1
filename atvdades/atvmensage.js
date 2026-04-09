nome = "Desgraça";

function hour(nome, hora){
    if (hora >= 0 && hora < 6) {
        console.log(nome + "vá dormir")
    }else if (hora >= 6 && hora < 12) {
        console.log(nome + " bom dia")
    }else if(hora >= 12 && hora < 18) {
        console.log(nome + " boa tarde")
    }else {
        console.log(nome + " boa noite")
    }
} 

hour(nome, 4);