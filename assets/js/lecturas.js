$("#buscar").click(function(){
    // alert ("Entro aquis");
    var Fecha=[];
    var TemR=[];
    var HumR=[];
    var HumT=[];
    var TemA=[];
    $("#tablaLecturas").html(`
        <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha/Hora</th>
              <th scope="col">Temperatura Tierra °C</th>
              <th scope="col">Humumedad Relativa %</th>
              <th scope="col">Hummedad de Tierra %</th>
              <th scope="col">Temperatura Ambiente °C</th>
            </tr>
        </thead>
    `);

    $.post(baseurl.concat("Estado/ObtenerLecturas"),
        function(data){
            // alert(data);
            var obj=JSON.parse(data);

            
            

            $.each(obj,function(i,item){
                Fecha.push(item.lec_fechahora);
                TemR.push(item.lec_TemR);
                HumR.push(item.lec_HumR);
                HumT.push(item.lec_HumT);
                TemA.push(item.lec_TemA);

                $("#tablaLecturas").append(
                    '<tr>'+
                      '<th scope="row">1</th>'+
                      '<td>'+Fecha+'</td>'+
                      '<td>'+TemR+'</td>'+
                      '<td>'+HumR+'</td>'+
                      '<td>'+HumT+'</td>'+
                      '<td>'+TemA+'</td>'+
                    '</tr>'  
                  );
                  Fecha=[];
                  TemR=[];
                  HumR=[];
                  HumT=[];
                  TemA=[];
            });
            
    });

    
});

$('#filtro').keyup(function(){
    
    $("#tablaLecturas").html(`
        <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha/Hora</th>
              <th scope="col">Temperatura Tierra °C</th>
              <th scope="col">Humumedad Relativa %</th>
              <th scope="col">Hummedad de Tierra %</th>
              <th scope="col">Temperatura Ambiente °C</th>
            </tr>
        </thead>
    `);
    
    var text= ($('#filtro').val());
    $.post(baseurl.concat("Estado/ObtenerLecturasbyFecha"),
        {texto:text},
        function(data){
            var obj=JSON.parse(data);
            var output='';
            $.each(obj,function(i,item){
                output+=
                '<tr>'+
                    '<th scope="row">1</th>'+
                    '<td>'+item.lec_fechahora+'</td>'+
                    '<td>'+item.lec_TemR+'</td>'+
                    '<td>'+item.lec_HumR+'</td>'+
                    '<td>'+item.lec_HumT+'</td>'+
                    '<td>'+item.lec_TemA+'</td>'+
                '</tr>' 
            });
            $("#tablaLecturas").append(output);
        });
});

