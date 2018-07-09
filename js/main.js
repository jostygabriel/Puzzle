
    $("#imagenes > a:gt(0)").hide();
    $("#siguiente").click(function(){

        $("#imagenes > a:first")
        .fadeOut(0)
        .next()
        .fadeIn(0)
        .end()
        .appendTo("#imagenes");
    });
    
    $("#atras").click(function(){
        $("#imagenes > a:gt(0)")
        .fadeIn(0)
        .prev()
        .fadeOut(0)
        .appendTo("#imagenes");
    });



$("#slider1").click(function(){
  var globalVariable=0
  var queryString = "?"+ globalVariable;
  window.location.href = "main.html" + queryString;
  abrirJuego(globalVariable.x)

});
$("#slider2").click(function(){

  var globalVariable=1
  var queryString = "?"+globalVariable;
  window.location.href = "main.html" + queryString;
  try {
    cargarArreglo();
}
catch(err) {
    console.log(err.message);
}

});
$("#slider3").click(function(){
  var globalVariable=2
  var queryString = "?" + globalVariable;
  window.location.href = "main.html" + queryString;
try {
    cargarArreglo();
}
catch(err) {
    console.log(err.message);
}

});