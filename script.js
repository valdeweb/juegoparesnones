document.getElementById('dispararSi').onclick= function(){
    document.getElementById('eligeSi').style.display='block'; /*esto es para que salga la segunda pantalla al pinchar en boton si */
    document.getElementById('bienvenida').style.display='none'; /*esto es para que oculte la primera pantalla una vez que ya ha salido la segunda al pinchar en el boton si */
}

document.getElementById('dispararNo').onclick= function(){
    document.getElementById('eligeNo').style.display='block'; 
    document.getElementById('bienvenida').style.display='none';
}
document.getElementById('jugar').onclick= function(){
    document.getElementById('eligeSi').style.display='block'; 
    document.getElementById('eligeNo').style.display='none';
}
document.getElementById('siguiente').onclick= function(){
    document.getElementById('eligeNumero').style.display='block'; 
    document.getElementById('eligeSi').style.display='none';
    document.getElementById('bienvenida').style.display='none';
}
document.getElementById('pulsaAqui').onclick= function(){
    document.getElementById('maquina').style.display='block'; 
    document.getElementById('eligeNumero').style.display='none';
    pulsaAqui();
}
document.getElementById('conocerResultado').onclick= function(){
    document.getElementById('resultado').style.display='block'; 
   document.getElementById('maquina').style.display='none';    
}

function pulsaAqui(){
 var pares=document.getElementById('pares');
 var nones=document.getElementById('nones'); 
    
    if(pares.checked){
 var jugador =pares.value;
 var maquina=nones.value;
    }
    
   if(nones.checked){
      
 var jugador=nones.value;
 var maquina=pares.value;
    }
    console.log(jugador);
    console.log(maquina);
 var jugadaJugador=document.getElementById('elegir').value;
    console.log(jugadaJugador);
    jugadaMaquina=Math.floor(Math.random()*11);
    console.log(jugadaMaquina);
 var resultado=jugadaJugador+jugadaMaquina;
    console.log(resultado);
   
    
//   console.log(resultado);
//   var jugador ='pares';
//   var maquina='nones';
//   var jugadaJugador=7;
//   console.log(jugadaJugador);
//   var jugadaMaquina=Math.floor(Math.random()*11);
//   console.log(jugadaMaquina);
//   var resultado=jugadaJugador+jugadaMaquina;
//   console.log(resultado);
//   var resultado =resultado%2;
//   console.log(resultado);
//   if(resultado===0){
//   console.log('ganan pares')
//  }
//   if(resultado===1){
//   console.log('ganan nones')
//  }
 }
