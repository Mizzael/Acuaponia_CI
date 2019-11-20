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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
  <title> <?php  echo $titulo ?> | Gaia-System</title>
</head>
<body>     
  
  <!-- <div class="text-center">
    <button class="btn btn-outline-primary my-2 my-sm-0" type="button"  id="BtnObtener">Obtener Lecturas</button>
  </div> -->

  

  <div class="wrapper">
   	<nav id="sidebar">
   		<div class="sidebar-header">
   			<h3><?php echo($this->session->userdata('user')['nombre']); ?> </h3>
   		</div>
   		
   		
   		<ul class="list-unstyled components">
   			<p>Dummy Heading</p>
   			<li class="active">
   				<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
   				<ul class="collapse list-unstyled" id="homeSubmenu">
   					<li>
   						<a href="#">home1</a>
   					</li>
   					<li>
   						<a href="#">home2</a>
   					</li>
   					<li>
   						<a href="#">home3</a>
   					</li>
   				</ul> 
   			</li>
   			
   			<li>
   				<a href="#">About</a>
   			</li>
   			<li>
   				<a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Page</a>
   				<ul class="collapse list-unstyled" id="pageSubmenu">
   					<li>
   						<a href="#">page1</a>
   					</li>
   					<li>
   						<a href="#">page2</a>
   					</li>
   					<li>
   						<a href="#">page3</a>
   					</li>
   				</ul> 
   			</li>
   			<li>
   				<a href="#">Services</a>
   			</li>
   			<li>
   				<a href="<?php echo base_url(); ?>Usuario/Logout">Cerrar Sesión</a>
   			</li>
   		</ul>
   		
   		<ul class="list-unstyled CTAs">
   			<li>
   				<a href="#" class="download">Download code</a>
   			</li>
   			<li>
   				<a href="#" class="article">article</a>
   			</li>
   		</ul>
   	</nav>
   	
   	<div class="content">
   		<nav class="navbar navbar-expand-lg navbar-light bg-light">
   		
                <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fa fa-align-justify"></i> <span></span>
                    </button>
   		
  <!--<a class="navbar-brand" href="#">Navbar</a> -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
<div class="text-center">
    <button class="btn btn-outline-primary my-2 my-sm-0" type="button"  id="BtnObtener">Obtener Lecturas</button>
</div>

<div id="Grafica">
    <canvas id="myChart" width="400" height="100"></canvas>
</div>
  	<h2>Collapsible Sidebar Using Bootstrap 4</h2>
  	
  	 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  	
  	<div class="line"></div>
  	
  	<h2>Collapsible Sidebar Using Bootstrap 4</h2>
  	
  	 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  	
  	<div class="line"></div>
  	<h2>Collapsible Sidebar Using Bootstrap 4</h2>
  	
  	 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  	
  	<div class="line"></div>
  	
   	</div>
   	
   	
   	
   	
   	
   </div>
</body>

<script>
  $(document).ready(function(){
    $('#sidebarCollapse').on('click',function(){
      $('#sidebar').toggleClass('active');
    });
  });  

  var Fecha=[];
  var TemR=[];
  var HumR=[];
  var HumT=[];
  var TemA=[];

  var BgColor=[];
  var BgBorder=[];

    $('#BtnObtener').click(function(){
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
              backgroundColor: BgColor,
              borderColor: BgBorder,
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
              backgroundColor: BgColor,
              borderColor: BgBorder,
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
              backgroundColor: BgColor,
              borderColor: BgBorder,
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
              backgroundColor: BgColor,
              borderColor: BgBorder,
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
