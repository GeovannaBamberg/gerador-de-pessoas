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
                resposta.innerHTML+=(`<img src="https://get.pxhere.com/photo/person-people-girl-boy-male-portrait-spring-child-facial-expression-smile-red-hair-face-infant-toddler-eye-beauty-freckles-portrait-photography-815317.jpg" alt="criançaMasculina">`)
            break;

            case "femenino": 
                resposta.innerHTML=(`<p> Uma menina de ${idade} anos </p>`)
                resposta.innerHTML+=(`<img src="https://leiturinha.com.br/blog/wp-content/uploads/2018/04/intelig%C3%AAncia-emocional.jpg">`)
            break;
        }
    }else{
        if (idade>12 && idade<=18) {
        switch (generosChecked) {
            case "masculino":
                resposta.innerHTML=(`<p> Um garoto adolecente de ${idade} anos</p>`)
                resposta.innerHTML+=(`<img src="https://eyc7xs8f99a.exactdn.com/blog/wp-content/uploads/adolescente-em-primeiro-plano.jpg" alt="adolecenteMasculino">`)
            break;

            case "femenino": 
                resposta.innerHTML=(`<p> Uma garota adolecente de ${idade} anos </p>`)
                resposta.innerHTML+=(`<img src="https://get.pxhere.com/photo/beautiful-blur-carefree-close-up-cute-depth-of-field-enjoyment-eyes-face-facial-expression-fashion-female-focus-fun-girl-hair-happiness-happy-joy-lady-model-necklace-person-photoshoot-portrait-pretty-smile-smiling-teen-woman-young-photograph-beauty-skin-photography-snapshot-black-hair-long-hair-photo-shoot-portrait-photography-brown-hair-lip-laughter-1419067.jpg" alt="adolecenteFemenina">`)
            break;
        }
    } else { 
        if (idade>18 && idade<=60) {
            switch (generosChecked) {
            case "masculino":
                resposta.innerHTML=(`<p> Um homem adulto de ${idade} anos </p>`)
                resposta.innerHTML+=(`<img src="https://img.freepik.com/fotos-gratis/homem-jovem-e-bonito-adulto-se-sentindo-serio-forte-e-rebelde-levantando-o-punho-protestando-ou-lutando-pela-revolucao_1194-305371.jpg" alt="HomemAdulto">`)
            break;

            case "femenino": 
                resposta.innerHTML=(`<p> Uma mulher adulta de ${idade} anos </p>`)
                resposta.innerHTML+=(`<img src="https://img.freepik.com/fotos-gratis/mulher-de-negocios-jovem-adulto-treinador-no-escritorio-fecha-as-orelhas-com-as-maos-os-bracos-as-palmas-das-maos_183314-4092.jpg?w=740" alt="mulherAdulta">`)
            break;
        }
        } else {
            if (idade>=60 && idade<=150) {
                switch (generosChecked) {
                case "masculino":
                resposta.innerHTML=(`<p> Um Homem idoso de ${idade} anos </p>`)
                resposta.innerHTML+=(`<img src="https://media.istockphoto.com/photos/senior-man-smiling-at-home-picture-id1029340518?k=20&m=1029340518&s=612x612&w=0&h=ztScOmlnZTb308vwJlugITqKx_xJsdASF9Fge2KsQt8=" alt="homemIdoso">`)
                break;

                case "femenino": 
                resposta.innerHTML=(`<p> Uma mulher idosa de ${idade} anos</p>`)
                resposta.innerHTML+=(`<img src="https://img.freepik.com/fotos-gratis/mulher-africana-idosa-sorridente-retrato-de-rosto_53876-143107.jpg?w=2000" alt="mulherIdosa">`)
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