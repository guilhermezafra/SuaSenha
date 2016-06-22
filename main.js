var tempo = new Date();

var hora = tempo.getHours();
var minuto = tempo.getMinutes();
var segundo = tempo.getSeconds();

var senha = 1;

$('.hora-senha').val(hora + "-" + minuto + "-" + segundo);

$('.gera-senha').click(function(){
    $('#senha').val(Math.floor(Math.random() * 998) + 1);
});

$('.senha-usuario').text(url('?senha'));

setInterval(function(){
    
    tempo = new Date();
    
    hora = tempo.getHours();
    minuto = tempo.getMinutes();
    segundo = tempo.getSeconds();
    
    
    $('.senha-chamada').text(senha);
    $('.hora-chamada').text(hora + ":" + minuto + ":" + segundo);
    
    if (senha == 999){
       senha = 1;
    }
    
    senha ++;
    
    
    if (senha == $('.senha-usuario').text()){
        $(location).attr('href', 'escolhido.html')
    }
    
    
}, 1000);