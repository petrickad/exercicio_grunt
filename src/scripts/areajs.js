document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-calcarea').addEventListener('submit', function(evento){
        evento.preventDefault();

        let numberone = document.getElementById('numberone').value;
        let numbertwo = document.getElementById('numbertwo').value;
        
        numberone = parseInt(numberone);
        numbertwo = parseInt(numbertwo);

        let valorArea = numberone * numbertwo;

        document.getElementById('resultado-valorArea').innerText = valorArea;
        document.querySelector('.resultado-area').style.display = 'block';
    })
})