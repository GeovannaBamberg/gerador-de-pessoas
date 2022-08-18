function verificador(){
    var anoNascimento = document.getElementById("anoNascimento").value 
    var generosChecked = document.querySelector('input[name="generos"]:checked').value;
    var resposta = document.getElementById("resposta")
    anoNascimento= Number(anoNascimento)
    var ano= new Date()
    var anoAtual = ano.getFullYear()
    var idade = anoAtual-anoNascimento

    if (idade>=0 && idade<=12) {
        switch (generosChecked) {
            case "masculino":
                resposta.innerHTML=(`<p> Um menino de ${idade} anos</p>`)
                resposta.innerHTML+=(`<img src="assets/menino-menor-12anos.jpg" alt="menino menor 12 anos">`)
            break;

            case "femenino": 
                resposta.innerHTML=(`<p> Uma menina de ${idade} anos </p>`)
                resposta.innerHTML+=(`<img src="assets/menina-menor-12anos.jpg" alt="menina menor 12 anos">`)
            break;
        }
    }else{
        if (idade>12 && idade<=18) {
        switch (generosChecked) {
            case "masculino":
                resposta.innerHTML=(`<p> Um garoto adolecente de ${idade} anos</p>`)
                resposta.innerHTML+=(`<img src="assets/menino-menor-18anos.webp" alt="menino menor 18 anos">`)
            break;

            case "femenino": 
                resposta.innerHTML=(`<p> Uma garota adolecente de ${idade} anos </p>`)
                resposta.innerHTML+=(`<img src="assets/menina-menor-18anos.jpg" alt="menina menor 18 anos">`)
            break;
        }
    } else { 
        if (idade>18 && idade<=60) {
            switch (generosChecked) {
            case "masculino":
                resposta.innerHTML=(`<p> Um homem adulto de ${idade} anos </p>`)
                resposta.innerHTML+=(`<img src="assets/homem-jovemadulto.jpg"" alt="homem jovem adulto">`)
            break;

            case "femenino": 
                resposta.innerHTML=(`<p> Uma mulher adulta de ${idade} anos </p>`)
                resposta.innerHTML+=(`<img src="assets/mulher-jovemadulta.jpg" alt="mulher jovem adulto">`)
            break;
        }
        } else {
            if (idade>=60 && idade<=150) {
                switch (generosChecked) {
                case "masculino":
                resposta.innerHTML=(`<p> Um Homem idoso de ${idade} anos </p>`)
                resposta.innerHTML+=(`<img src="assets/homem-idoso.jpg" alt="homemIdoso">`)
                break;

                case "femenino": 
                resposta.innerHTML=(`<p> Uma mulher idosa de ${idade} anos</p>`)
                resposta.innerHTML+=(`<img src="homem-idoso.jpg" alt="mulher idosa">`)
                break;
            } 
         } else{
             if (idade<0 || idade>150) {
                 alert("[ERRO] Os dados são impossiveis, revise-os.")
                 
             }
         }
            
        }
        
    }
}    
}               