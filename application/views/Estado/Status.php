<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/EstilosAcua.css">
    <link rel="shortcut icon" href="<?php echo base_url(); ?>/assets/image/logo.ico">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"></script>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title> <?php  echo $titulo ?> | Gaia-System</title>
</head>
<body>
<header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark mb-4">
    <a href="" class="navbar-brand">
      <?php echo($this->session->userdata('user')['nombre']); ?> 
    </a>
    <div class="collapse navbar-collapse mr-auto" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
      </ul>
      <!-- <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
      </form> -->
      <div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="<?php echo base_url(); ?>Usuario/Logout">Salir</a>
          </li>
        </ul>
    </div>
    </div>
  </nav>
</header>

<br>
<br>
<br>
<br>
<br>
  <div class="text-center">
    <button class="btn btn-outline-primary my-2 my-sm-0" type="button"  id="BtnObtener">Obtener Datos</button>
  </div>

  <div id="Grafica">
    <canvas id="myChart" width="400" height="100"></canvas>
  </div>
 <script>

  var Fecha=[];
  var TemR=[];
  var HumR=[];

    $('#BtnObtener').click(function(){
      $.post("<?php echo base_url(); ?>Estado/ObtenerLecturas",
      function(data){
        
        var obj=JSON.parse(data);

        Fecha=[];
        TemR=[];
        HumR=[];

        $.each(obj,function(i,item){
          Fecha.push(item.lec_fechahora);
          TemR.push(item.lec_TemR);
          HumR.push(item.lec_HumR);
        });

        $('#myChart').remove();
        $('#Grafica').append("<canvas id='myChart' width='400' height='100'></canvas>");
        
        var ctx = $('#myChart');
        var chart = new Chart(ctx, {
          type: 'line',
          data: 
          {
            labels: Fecha,
            datasets:[
            {
              label: "Temperatura Relativa",
              fill: true,
              lineTension: 0.1,
              backgroundColor: "rgba(175,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
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
                  label: "Humedad Relativa",
                  fill: true,
                  lineTension: 0.1,
                  backgroundColor: "rgba(255,99,132,0.4)",
                  borderColor: "rgba(75,192,192,1)",
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
    
   
    

<!-- 
{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        } -->
