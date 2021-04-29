$(document).ready(function(){
    var texto = $(".div");
    
    texto.mouseenter(function(){
        $("texto").css("font","15px")

    });
});
$(document).ready(function(){
    $("#boton2").click(function(){
        $("#imagenparaesconder").fadeTo("slow",0);

    });
    

});
$(document).ready(function(){
    

    $("#cambiacolor").mouseenter(function(){
        $("#cambiacolor").css("backgroundcolor","red"); 
    $("#cambiacolor").mouseleave(function(){
        $("#cambiacolor").css("backgroundcolor","blue"); 
    });
    });

});
