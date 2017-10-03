document.getElementById('dispararSi').onclick= function(){
    document.getElementById('eligeSi').style.display='block'; /*esto es para que salga la segunda pantalla al pinchar en boton si */
    document.getElementById('bienvenida').style.display='none'; /*esto es para que oculte la primera pantalla una vez que ya ha salido la segunda al pinchar en el boton si */
}
document.getElementById('dispararNo').onclick= function(){
    document.getElementById('eligeNo').style.display='block'; 
    document.getElementById('bienvenida').style.display='none';
}
document.getElementById('eligeNo').onclick= function(){
    document.getElementById('bienvenida').style.display='block'; 
    document.getElementById('eligeNo').style.display='none';
}