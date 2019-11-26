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

var intervalDiario;

  $("#Mes1").click(function(){
    clearInterval(intervalDiario);
    
      var EneroTemR=[];
      var EneroHumR=[];
      var EneroHumT=[];
      var EneroTemA=[];
  
      $.post(baseurl.concat("Estado/PromedioEne"),
      function(data){
            
            var obj=JSON.parse(data);
  
            EneroTemR=[];
            EneroHumR=[];
            EneroHumT=[];
            EneroTemA=[];
  
            $.each(obj,function(i,item){
              if(item.lec_TemR<=0){
                alert('No hay lecturas registradas');
              }else{
                EneroTemR.push(item.lec_TemR);
                EneroHumR.push(item.lec_HumR);
                EneroHumT.push(item.lec_HumT);
                EneroTemA.push(item.lec_TemA);
              }
            });
  
            $('#myChart').remove();
            $('#GraficaDia').append("<canvas id='myChart' width='400' height='100'></canvas>");
  
            var ctx = $('#myChart');
            var chart = new Chart(ctx, {
              type: 'bar',//Puede variar poniendo line.
              data: 
              {
                labels: ["Enero"],
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
                  data: EneroTemR,
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
                  data: EneroHumR,
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
                  data: EneroHumT,
                  spanGaps: false,
                },
                {
                  label: "Temperatura Ambiente",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(153, 102, 255, 0.9)",
                  borderColor: "rgba(153, 102, 255, 1)",
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
                  data: EneroTemA,
                  spanGaps: false,
                }
                ]},
                options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                            suggestedMin: 20,
                            suggestedMax: 50
                          }
                      }]
                  }
                }
            });
      });
  });
  
  $("#Mes2").click(function(){
    clearInterval(intervalDiario);
    
      var EneroTemR=[];
      var EneroHumR=[];
      var EneroHumT=[];
      var EneroTemA=[];
  
      $.post(baseurl.concat("Estado/PromedioFeb"),
      function(data){
            
            var obj=JSON.parse(data);
  
            EneroTemR=[];
            EneroHumR=[];
            EneroHumT=[];
            EneroTemA=[];
  
            $.each(obj,function(i,item){
              if(item.lec_TemR<=0){
                alert('No hay lecturas registradas');
              }else{
                EneroTemR.push(item.lec_TemR);
                EneroHumR.push(item.lec_HumR);
                EneroHumT.push(item.lec_HumT);
                EneroTemA.push(item.lec_TemA);
              }
            });
  
            $('#myChart').remove();
            $('#GraficaDia').append("<canvas id='myChart' width='400' height='100'></canvas>");
  
            var ctx = $('#myChart');
            var chart = new Chart(ctx, {
              type: 'bar',//Puede variar poniendo line.
              data: 
              {
                labels: ["Febrero"],
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
                  data: EneroTemR,
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
                  data: EneroHumR,
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
                  data: EneroHumT,
                  spanGaps: false,
                },
                {
                  label: "Temperatura Ambiente",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(153, 102, 255, 0.9)",
                  borderColor: "rgba(153, 102, 255, 1)",
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
                  data: EneroTemA,
                  spanGaps: false,
                }
                ]},
                options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                            suggestedMin: 20,
                            suggestedMax: 50
                          }
                      }]
                  }
                }
            });
      });
  });
  
  $("#Mes3").click(function(){
    clearInterval(intervalDiario);
    
      var EneroTemR=[];
      var EneroHumR=[];
      var EneroHumT=[];
      var EneroTemA=[];
  
      $.post(baseurl.concat("Estado/PromedioMar"),
      function(data){
            
            var obj=JSON.parse(data);
  
            EneroTemR=[];
            EneroHumR=[];
            EneroHumT=[];
            EneroTemA=[];
  
            $.each(obj,function(i,item){
              if(item.lec_TemR<=0){
                alert('No hay lecturas registradas');
              }else{
                EneroTemR.push(item.lec_TemR);
                EneroHumR.push(item.lec_HumR);
                EneroHumT.push(item.lec_HumT);
                EneroTemA.push(item.lec_TemA);
              }
            });
  
            $('#myChart').remove();
            $('#GraficaDia').append("<canvas id='myChart' width='400' height='100'></canvas>");
  
            var ctx = $('#myChart');
            var chart = new Chart(ctx, {
              type: 'bar',//Puede variar poniendo line.
              data: 
              {
                labels: ["Marzo"],
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
                  data: EneroTemR,
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
                  data: EneroHumR,
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
                  data: EneroHumT,
                  spanGaps: false,
                },
                {
                  label: "Temperatura Ambiente",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(153, 102, 255, 0.9)",
                  borderColor: "rgba(153, 102, 255, 1)",
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
                  data: EneroTemA,
                  spanGaps: false,
                }
                ]},
                options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                            suggestedMin: 20,
                            suggestedMax: 50
                          }
                      }]
                  }
                }
            });
      });
  });
  
  $("#Mes4").click(function(){
    clearInterval(intervalDiario);
    
      var EneroTemR=[];
      var EneroHumR=[];
      var EneroHumT=[];
      var EneroTemA=[];
  
      $.post(baseurl.concat("Estado/PromedioAbr"),
      function(data){
            
            var obj=JSON.parse(data);
  
            EneroTemR=[];
            EneroHumR=[];
            EneroHumT=[];
            EneroTemA=[];
  
            $.each(obj,function(i,item){
              if(item.lec_TemR<=0){
                alert('No hay lecturas registradas');
              }else{
                EneroTemR.push(item.lec_TemR);
                EneroHumR.push(item.lec_HumR);
                EneroHumT.push(item.lec_HumT);
                EneroTemA.push(item.lec_TemA);
              }
            });
  
            $('#myChart').remove();
            $('#GraficaDia').append("<canvas id='myChart' width='400' height='100'></canvas>");
  
            var ctx = $('#myChart');
            var chart = new Chart(ctx, {
              type: 'bar',//Puede variar poniendo line.
              data: 
              {
                labels: ["Abril"],
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
                  data: EneroTemR,
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
                  data: EneroHumR,
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
                  data: EneroHumT,
                  spanGaps: false,
                },
                {
                  label: "Temperatura Ambiente",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(153, 102, 255, 0.9)",
                  borderColor: "rgba(153, 102, 255, 1)",
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
                  data: EneroTemA,
                  spanGaps: false,
                }
                ]},
                options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                            suggestedMin: 20,
                            suggestedMax: 50
                          }
                      }]
                  }
                }
            });
      });
  });
  
  $("#Mes5").click(function(){
    clearInterval(intervalDiario);
    
      var EneroTemR=[];
      var EneroHumR=[];
      var EneroHumT=[];
      var EneroTemA=[];
  
      $.post(baseurl.concat("Estado/PromedioMay"),
      function(data){
            
            var obj=JSON.parse(data);
  
            EneroTemR=[];
            EneroHumR=[];
            EneroHumT=[];
            EneroTemA=[];
  
            $.each(obj,function(i,item){
              if(item.lec_TemR<=0){
                alert('No hay lecturas registradas');
              }else{
                EneroTemR.push(item.lec_TemR);
                EneroHumR.push(item.lec_HumR);
                EneroHumT.push(item.lec_HumT);
                EneroTemA.push(item.lec_TemA);
              }
            });
  
            $('#myChart').remove();
            $('#GraficaDia').append("<canvas id='myChart' width='400' height='100'></canvas>");
  
            var ctx = $('#myChart');
            var chart = new Chart(ctx, {
              type: 'bar',//Puede variar poniendo line.
              data: 
              {
                labels: ["Mayo"],
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
                  data: EneroTemR,
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
                  data: EneroHumR,
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
                  data: EneroHumT,
                  spanGaps: false,
                },
                {
                  label: "Temperatura Ambiente",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(153, 102, 255, 0.9)",
                  borderColor: "rgba(153, 102, 255, 1)",
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
                  data: EneroTemA,
                  spanGaps: false,
                }
                ]},
                options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                            suggestedMin: 20,
                            suggestedMax: 50
                          }
                      }]
                  }
                }
            });
      });
  });
  
  $("#Mes6").click(function(){
    clearInterval(intervalDiario);
    
      var EneroTemR=[];
      var EneroHumR=[];
      var EneroHumT=[];
      var EneroTemA=[];
  
      $.post(baseurl.concat("Estado/PromedioJun"),
      function(data){
            
            var obj=JSON.parse(data);
  
            EneroTemR=[];
            EneroHumR=[];
            EneroHumT=[];
            EneroTemA=[];
  
            $.each(obj,function(i,item){
              if(item.lec_TemR<=0){
                alert('No hay lecturas registradas');
              }else{
                EneroTemR.push(item.lec_TemR);
                EneroHumR.push(item.lec_HumR);
                EneroHumT.push(item.lec_HumT);
                EneroTemA.push(item.lec_TemA);
              }
            });
  
            $('#myChart').remove();
            $('#GraficaDia').append("<canvas id='myChart' width='400' height='100'></canvas>");
  
            var ctx = $('#myChart');
            var chart = new Chart(ctx, {
              type: 'bar',//Puede variar poniendo line.
              data: 
              {
                labels: ["Junio"],
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
                  data: EneroTemR,
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
                  data: EneroHumR,
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
                  data: EneroHumT,
                  spanGaps: false,
                },
                {
                  label: "Temperatura Ambiente",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(153, 102, 255, 0.9)",
                  borderColor: "rgba(153, 102, 255, 1)",
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
                  data: EneroTemA,
                  spanGaps: false,
                }
                ]},
                options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                            suggestedMin: 20,
                            suggestedMax: 50
                          }
                      }]
                  }
                }
            });
      });
  });
  
  $("#Mes7").click(function(){
    clearInterval(intervalDiario);
    
      var EneroTemR=[];
      var EneroHumR=[];
      var EneroHumT=[];
      var EneroTemA=[];
  
      $.post(baseurl.concat("Estado/PromedioJul"),
      function(data){
            
            var obj=JSON.parse(data);
  
            EneroTemR=[];
            EneroHumR=[];
            EneroHumT=[];
            EneroTemA=[];
  
            $.each(obj,function(i,item){
              if(item.lec_TemR<=0){
                alert('No hay lecturas registradas');
              }else{
                EneroTemR.push(item.lec_TemR);
                EneroHumR.push(item.lec_HumR);
                EneroHumT.push(item.lec_HumT);
                EneroTemA.push(item.lec_TemA);
              }
            });
  
            $('#myChart').remove();
            $('#GraficaDia').append("<canvas id='myChart' width='400' height='100'></canvas>");
  
            var ctx = $('#myChart');
            var chart = new Chart(ctx, {
              type: 'bar',//Puede variar poniendo line.
              data: 
              {
                labels: ["Julio"],
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
                  data: EneroTemR,
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
                  data: EneroHumR,
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
                  data: EneroHumT,
                  spanGaps: false,
                },
                {
                  label: "Temperatura Ambiente",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(153, 102, 255, 0.9)",
                  borderColor: "rgba(153, 102, 255, 1)",
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
                  data: EneroTemA,
                  spanGaps: false,
                }
                ]},
                options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                            suggestedMin: 20,
                            suggestedMax: 50
                          }
                      }]
                  }
                }
            });
      });
  });
  
  $("#Mes8").click(function(){
    clearInterval(intervalDiario);
    
      var EneroTemR=[];
      var EneroHumR=[];
      var EneroHumT=[];
      var EneroTemA=[];
  
      $.post(baseurl.concat("Estado/PromedioAgo"),
      function(data){
            
            var obj=JSON.parse(data);
  
            EneroTemR=[];
            EneroHumR=[];
            EneroHumT=[];
            EneroTemA=[];
  
            $.each(obj,function(i,item){
              if(item.lec_TemR<=0){
                alert('No hay lecturas registradas');
              }else{
                EneroTemR.push(item.lec_TemR);
                EneroHumR.push(item.lec_HumR);
                EneroHumT.push(item.lec_HumT);
                EneroTemA.push(item.lec_TemA);
              }
            });
  
            $('#myChart').remove();
            $('#GraficaDia').append("<canvas id='myChart' width='400' height='100'></canvas>");
  
            var ctx = $('#myChart');
            var chart = new Chart(ctx, {
              type: 'bar',//Puede variar poniendo line.
              data: 
              {
                labels: ["Agosto"],
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
                  data: EneroTemR,
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
                  data: EneroHumR,
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
                  data: EneroHumT,
                  spanGaps: false,
                },
                {
                  label: "Temperatura Ambiente",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(153, 102, 255, 0.9)",
                  borderColor: "rgba(153, 102, 255, 1)",
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
                  data: EneroTemA,
                  spanGaps: false,
                }
                ]},
                options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                            suggestedMin: 20,
                            suggestedMax: 50
                          }
                      }]
                  }
                }
            });
      });
  });
  
  $("#Mes9").click(function(){
    clearInterval(intervalDiario);
    
      var EneroTemR=[];
      var EneroHumR=[];
      var EneroHumT=[];
      var EneroTemA=[];
  
      $.post(baseurl.concat("Estado/PromedioSep"),
      function(data){
            
            var obj=JSON.parse(data);
  
            EneroTemR=[];
            EneroHumR=[];
            EneroHumT=[];
            EneroTemA=[];
  
            $.each(obj,function(i,item){
              if(item.lec_TemR<=0){
                alert('No hay lecturas registradas');
              }else{
                EneroTemR.push(item.lec_TemR);
                EneroHumR.push(item.lec_HumR);
                EneroHumT.push(item.lec_HumT);
                EneroTemA.push(item.lec_TemA);
              }
            });
  
            $('#myChart').remove();
            $('#GraficaDia').append("<canvas id='myChart' width='400' height='100'></canvas>");
  
            var ctx = $('#myChart');
            var chart = new Chart(ctx, {
              type: 'bar',//Puede variar poniendo line.
              data: 
              {
                labels: ["Septiembre"],
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
                  data: EneroTemR,
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
                  data: EneroHumR,
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
                  data: EneroHumT,
                  spanGaps: false,
                },
                {
                  label: "Temperatura Ambiente",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(153, 102, 255, 0.9)",
                  borderColor: "rgba(153, 102, 255, 1)",
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
                  data: EneroTemA,
                  spanGaps: false,
                }
                ]},
                options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                            suggestedMin: 20,
                            suggestedMax: 50
                          }
                      }]
                  }
                }
            });
      });
  });
  
  $("#Mes10").click(function(){
    clearInterval(intervalDiario);
    
      var EneroTemR=[];
      var EneroHumR=[];
      var EneroHumT=[];
      var EneroTemA=[];
  
      $.post(baseurl.concat("Estado/PromedioOct"),
      function(data){
            
            var obj=JSON.parse(data);
  
            EneroTemR=[];
            EneroHumR=[];
            EneroHumT=[];
            EneroTemA=[];
  
            $.each(obj,function(i,item){
              if(item.lec_TemR<=0){
                alert('No hay lecturas registradas');
              }else{
                EneroTemR.push(item.lec_TemR);
                EneroHumR.push(item.lec_HumR);
                EneroHumT.push(item.lec_HumT);
                EneroTemA.push(item.lec_TemA);
              }
            });
  
            $('#myChart').remove();
            $('#GraficaDia').append("<canvas id='myChart' width='400' height='100'></canvas>");
  
            var ctx = $('#myChart');
            var chart = new Chart(ctx, {
              type: 'bar',//Puede variar poniendo line.
              data: 
              {
                labels: ["Octubre"],
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
                  data: EneroTemR,
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
                  data: EneroHumR,
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
                  data: EneroHumT,
                  spanGaps: false,
                },
                {
                  label: "Temperatura Ambiente",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(153, 102, 255, 0.9)",
                  borderColor: "rgba(153, 102, 255, 1)",
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
                  data: EneroTemA,
                  spanGaps: false,
                }
                ]},
                options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                            suggestedMin: 20,
                            suggestedMax: 50
                          }
                      }]
                  }
                }
            });
      });
  });
  
  $("#Mes11").click(function(){
    clearInterval(intervalDiario);
    
      var EneroTemR=[];
      var EneroHumR=[];
      var EneroHumT=[];
      var EneroTemA=[];
  
      $.post(baseurl.concat("Estado/PromedioNov"),
      function(data){
            
            var obj=JSON.parse(data);
  
            EneroTemR=[];
            EneroHumR=[];
            EneroHumT=[];
            EneroTemA=[];
  
            $.each(obj,function(i,item){
              if(item.lec_TemR<=0){
                alert('No hay lecturas registradas');
              }else{
                EneroTemR.push(item.lec_TemR);
                EneroHumR.push(item.lec_HumR);
                EneroHumT.push(item.lec_HumT);
                EneroTemA.push(item.lec_TemA);
              }
            });
  
            $('#myChart').remove();
            $('#GraficaDia').append("<canvas id='myChart' width='400' height='100'></canvas>");
  
            var ctx = $('#myChart');
            var chart = new Chart(ctx, {
              type: 'bar',//Puede variar poniendo line.
              data: 
              {
                labels: ["Noviembre"],
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
                  data: EneroTemR,
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
                  data: EneroHumR,
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
                  data: EneroHumT,
                  spanGaps: false,
                },
                {
                  label: "Temperatura Ambiente",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(153, 102, 255, 0.9)",
                  borderColor: "rgba(153, 102, 255, 1)",
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
                  data: EneroTemA,
                  spanGaps: false,
                }
                ]},
                options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                            suggestedMin: 20,
                            suggestedMax: 50
                          }
                      }]
                  }
                }
            });
      });
  });
  
  $("#Mes12").click(function(){
    clearInterval(intervalDiario);
    
      var EneroTemR=[];
      var EneroHumR=[];
      var EneroHumT=[];
      var EneroTemA=[];
  
      $.post(baseurl.concat("Estado/PromedioDic"),
      function(data){
            
            var obj=JSON.parse(data);
  
            EneroTemR=[];
            EneroHumR=[];
            EneroHumT=[];
            EneroTemA=[];
  
            $.each(obj,function(i,item){
              if(item.lec_TemR<=0){
                alert('No hay lecturas registradas');
              }else{
                EneroTemR.push(item.lec_TemR);
                EneroHumR.push(item.lec_HumR);
                EneroHumT.push(item.lec_HumT);
                EneroTemA.push(item.lec_TemA);
              }
            });
  
            $('#myChart').remove();
            $('#GraficaDia').append("<canvas id='myChart' width='400' height='100'></canvas>");
  
            var ctx = $('#myChart');
            var chart = new Chart(ctx, {
              type: 'bar',//Puede variar poniendo line.
              data: 
              {
                labels: ["Diciembre"],
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
                  data: EneroTemR,
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
                  data: EneroHumR,
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
                  data: EneroHumT,
                  spanGaps: false,
                },
                {
                  label: "Temperatura Ambiente",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(153, 102, 255, 0.9)",
                  borderColor: "rgba(153, 102, 255, 1)",
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
                  data: EneroTemA,
                  spanGaps: false,
                }
                ]},
                options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                            suggestedMin: 20,
                            suggestedMax: 50
                          }
                      }]
                  }
                }
            });
      });
  });


  $("#LecturaSemanal").click(function(){
    // console.log("Hola");
    clearInterval(intervalDiario);
        var TemR=[];
        var HumR=[];
        var HumT=[];
        var TemA=[];
        $.post(baseurl.concat("Estado/GraficaSemanal"),
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
          
          $('#myChart').remove();
          $('#GraficaDia').append("<canvas id='myChart' width='400' height='100'></canvas>");

          var ctx = $('#myChart');
          var chart = new Chart(ctx, {
            type: 'bar',//Puede variar poniendo line.
            data: 
            {
              labels: ["Semana"],
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
                backgroundColor: "rgba(153, 102, 255, 0.9)",
                borderColor: "rgba(153, 102, 255, 1)",
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
                          suggestedMax: 110
                        }
                    }]
                }
              }
          });
        });
     
    
 
});


