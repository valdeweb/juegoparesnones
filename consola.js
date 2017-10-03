var jugador ='pares';
var maquina='nones';
var jugadaJugador=7;
console.log(jugadaJugador);
var jugadaMaquina=Math.floor(Math.random()*11);
console.log(jugadaMaquina);
var resultado=jugadaJugador+jugadaMaquina;
console.log(resultado);
var resultado =resultado%2;
console.log(resultado);
if(resultado===0){
    console.log('ganan pares')
}
if(resultado===1){
    console.log('ganan impares')
}