document.addEventListener('DOMContentLoaded', function(){
    let media;
    while(true){
        media = parseInt(prompt("Digite um valor médio válido (entre 1 e 10): "))
        if(media >= 1 && media <= 10 && !isNaN(media)){
            break;
        }
        else{
            alert("Por favor, digite um valor válido")
        }
    }

    document.getElementById('form-calcmedia').addEventListener('submit', function(evento){
        evento.preventDefault();
        
        let valor1 = parseInt(document.getElementById('restultOne').value);
        let valor2 = parseInt(document.getElementById('resultTwo').value);
        let valor3 = parseInt(document.getElementById('resultThree').value);
        let valor4 = parseInt(document.getElementById('resultFour').value);

        let resultValues = (valor1 + valor2 + valor3 + valor4) / 4;

        let resultFinal;

        if(resultValues >= media){
            resultFinal = "Voce foi aprovado! Sua nota é: \n" + resultValues.toFixed(2);
        }
        else {
            resultFinal = "Voce foi reprovado. Sua note é: \n" + resultValues.toFixed(2) + "pontos";
        }
        document.getElementById('resultado').innerText = resultFinal;
        document.querySelector('.resultado-media').style.display = 'block';
    })
})