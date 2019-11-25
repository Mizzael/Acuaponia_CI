// alert('Hola Bnada');
// $("#LecturaDiaria").click(function(){
//     $.post(baseurl.concat("Estado/PromedioEnero"),
//         function(data){
//     // alert(data);
//         var obj=JSON.parse(data);

//         $.each(obj,function(i,item){
//             $("#promedio").append(
//                 '<p>'+item.lec_TemR+'</p>'+
//                 '<p>'+item.lec_HumR+'</p>'+
//                 '<p>'+item.lec_HumT+'</p>'+
//                 '<p>'+item.lec_TemA+'</p>'+
//                 '<hr></hr>'
//                 // '<p>'+item.lec_HumR+'</p>'
//             );
//         });
//     });
// });

// $("#LecturaMensual").click(function(){
//     $("#promedio").append(
//         '<p>hOLA</p>'
//     );
//   });

$("#LecturaDiaria").click(function(){
    function GraficaDiaria(){
        
        var Fecha=[];
        var TemR=[];
        var HumR=[];
        var HumT=[];
        var TemA=[];
        $.post("<?php echo base_url(); ?>Estado/ObtenerLecturas",
        function(data){
          
          var obj=JSON.parse(data);

          Fecha=[];
          TemR=[];
          HumR=[];
          HumT=[];
          TemA=[];

          $.each(obj,function(i,item){
            Fecha.push(item.lec_fechahora);
            TemR.push(item.lec_TemR);
            HumR.push(item.lec_HumR);
            HumT.push(item.lec_HumT);
            TemA.push(item.lec_TemA);

          });

          // $('#myChart').remove();
          // $('#Grafica').append("<canvas id='myChart' width='400' height='100'></canvas>");
          
          var ctx = $('.myChart');
          var chart = new Chart(ctx, {
            type: 'bar',//Puede variar poniendo line.
            data: 
            {
              labels: Fecha,
              datasets:[
              {
                label: "Temperatura Tierra",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(255, 99, 132, 0.8)",
                borderColor: "rgba(255, 99, 132, 0.1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 5,
                pointRadius: 1,
                pointHitRadius: 10,
                data: TemR,
                spanGaps: false,
              },
              {
                label: "Humedad Ambiente",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(54, 162, 235, 0.8)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 5,
                pointRadius: 1,
                pointHitRadius: 10,
                data: HumR,
                spanGaps: false,
              },
              {
                label: "Humedad Tierra",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(255, 206, 86, 0.9)",
                borderColor: "rgba(255, 206, 86, 1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 5,
                pointRadius: 1,
                pointHitRadius: 10,
                data: HumT,
                spanGaps: false,
              },
              {
                label: "Temperatura Ambiente",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(75, 192, 192, 0.9)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 5,
                pointRadius: 1,
                pointHitRadius: 10,
                data: TemA,
                spanGaps: false,
              }
              ]},
              options: {
                scales: {
                    yAxes: [{
                        ticks: {
                          suggestedMin: 20,
                          suggestedMax: 100
                        }
                    }]
                }
              }
          });
        });
        
    }
    setInterval(GraficaDiaria ,2000);
  });

  $("#LecturaMensual").click(function(){
    function GraficaMensual(){
        
        var TemR=[];
        var HumR=[];
        var HumT=[];
        var TemA=[];
        $.post("<?php echo base_url(); ?>Estado/PromedioEnero",
        function(data){
          
          var obj=JSON.parse(data);

          TemR=[];
          HumR=[];
          HumT=[];
          TemA=[];

          $.each(obj,function(i,item){
            TemR.push(item.lec_TemR);
            HumR.push(item.lec_HumR);
            HumT.push(item.lec_HumT);
            TemA.push(item.lec_TemA);

          });

          // $('#myChart').remove();
          // $('#Grafica').append("<canvas id='myChart' width='400' height='100'></canvas>");
          
          var ctx = $('#myChart');
          var chart = new Chart(ctx, {
            type: 'bar',//Puede variar poniendo line.
            data: 
            {
              labels: "Enero,FEB,MAR,ZABR",
              datasets:[
              {
                label: "Temperatura Tierra",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(255, 99, 132, 0.8)",
                borderColor: "rgba(255, 99, 132, 0.1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 5,
                pointRadius: 1,
                pointHitRadius: 10,
                data: TemR,
                spanGaps: false,
              },
              {
                label: "Humedad Ambiente",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(54, 162, 235, 0.8)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 5,
                pointRadius: 1,
                pointHitRadius: 10,
                data: HumR,
                spanGaps: false,
              },
              {
                label: "Humedad Tierra",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(255, 206, 86, 0.9)",
                borderColor: "rgba(255, 206, 86, 1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 5,
                pointRadius: 1,
                pointHitRadius: 10,
                data: HumT,
                spanGaps: false,
              },
              {
                label: "Temperatura Ambiente",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "rgba(75, 192, 192, 0.9)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 10,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 5,
                pointRadius: 1,
                pointHitRadius: 10,
                data: TemA,
                spanGaps: false,
              }
              ]},
              options: {
                scales: {
                    yAxes: [{
                        ticks: {
                          suggestedMin: 20,
                          suggestedMax: 100
                        }
                    }]
                }
              }
          });
        });
        
    }
    setInterval(GraficaMensual ,2000);
  });


