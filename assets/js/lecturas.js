$(document).on("ready",inicio);

function inicio(){
    $("form").submit(function(event){
        event.preventDefault();
        $.ajax({
            url:$("form").attr("action"),
            type:$("form").attr("method"),
            data:$("form").serialize(),
            success:function(respuesta){
                alert(respuesta):
            }
        });
    });
}

function mostrarDatos(valor){
    $.ajax({
        url:"http://localhost/Acuaponia/Estado/mostrar",
        type:"POST",
        data:{buscar:valor},
        succes:function(respuesta){
            alert(respuesta);
        }
    });
}