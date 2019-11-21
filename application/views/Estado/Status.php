<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/style.css">
  <link rel="shortcut icon" href="<?php echo base_url(); ?>/assets/image/logo.ico">
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"></script>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
  <title> <?php  echo $titulo ?> | Gaia-System</title>
</head>
<body>     
  <div class="wrapper">
    <div class="sidebar">
      <h2><?php echo($this->session->userdata('user')['nombre']); ?></h2>
        <ul>
          <!-- <li><a><i class="fas fa-home"></i>Home</a></li> -->
          <li><a class="BtnObtener"><i class="far fa-chart-bar"></i> Lecuta Diaria</a></li>
          <li><a class="BtnObtener"><i class="far fa-chart-bar"></i> Lecuta Semanal</a></li>
          <li><a class="BtnObtener"><i class="far fa-chart-bar"></i> Lecuta Mensual</a></li>
          
          <li><a href="<?php echo base_url(); ?>Estado/dExcel"><i class="far fa-file-excel"></i> Reporte</a></li>
          <li><a href="<?php echo base_url(); ?>Usuario/Logout"><i class="fas fa-sign-out-alt"></i>Cerrar Sesión</a></li>
        </ul> 
        <!-- <div class="social_media">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div> -->
      </div>
      <div class="main_content">
        <div class="header text-center">Es bueno tenerte de vuelta!</div>  
          <div class="info">  
            <div id="Grafica">
              <canvas id="myChart" width="400" height="100"></canvas>
            </div>
        </div>
      </div>
  </div>
</body>

<script>
  var Fecha=[];
  var TemR=[];
  var HumR=[];
  var HumT=[];
  var TemA=[];

  var BgColor=[];
  var BgBorder=[];

    $('.BtnObtener').click(function(){
      $.post("<?php echo base_url(); ?>Estado/ObtenerLecturas",
      function(data){
        
        var obj=JSON.parse(data);

        Fecha=[];
        TemR=[];
        HumR=[];
        HumT=[];
        TemA=[];

        BgColor=[];
        BgBorder=[];

        $.each(obj,function(i,item){

          var r = Math.random() * 255;
				  r = Math.round(r);

          var g = Math.random() * 255;
          g = Math.round(g);

          var b = Math.random() * 255;
          b = Math.round(b);

          Fecha.push(item.lec_fechahora);
          TemR.push(item.lec_TemR);
          HumR.push(item.lec_HumR);
          HumT.push(item.lec_HumT);
          TemA.push(item.lec_TemA);
          BgColor.push('rgba('+r+','+g+','+b+', 0.8)');
          BgBorder.push('rgba('+r+','+g+','+b+', 1)')
        });

        $('#myChart').remove();
        $('#Grafica').append("<canvas id='myChart' width='400' height='100'></canvas>");
        
        var ctx = $('#myChart');
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
              backgroundColor: "rgb(89, 42, 3,0.8)",
              borderColor: "rgb(89, 42, 3,0.8)",
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
              backgroundColor: "rgb(12, 183, 242,0.8)",
              borderColor: "rgb(12, 183, 242,0.8)",
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
              backgroundColor: "rgb(154, 101, 13,0.8)",
              borderColor: "rgb(154, 101, 13,0.8)",
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
              backgroundColor: "rgb(136, 170, 255,0.8)",
              borderColor: "rgb(136, 170, 255,0.8)",
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
    });
    
</script>
