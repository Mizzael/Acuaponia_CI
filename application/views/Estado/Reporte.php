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
          <li><a class="BtnObtener" href="<?php echo base_url(); ?>Estado/Lecturas"><i class="far fa-chart-bar"></i> Lecutas</a></li>
          <li><a href="<?php echo base_url(); ?>Estado/Reporte"><i class="far fa-file-excel"></i> Reporte</a></li>
          <li><a href="<?php echo base_url(); ?>Usuario/Logout"><i class="fas fa-sign-out-alt"></i>Cerrar Sesión</a></li>
        </ul> 
        <!-- <div class="social_media">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div> -->
      </div>
  <div class="main_content">
    <div class="header text-center">Tabla de Lecturas</div>  
      <div class="info">  
        <div class="d-flex flex-row-reverse ">
          <div class="p-2">
            <li class="btn btn-warning"><a href="<?php echo base_url();?>Estado/dExcel">Obtener Reporte</a></li>
          </div>
          <div class="p-2">
            <button class="btn btn-primary" id="buscar">Mostrar Todo</button>  
          </div>
          <div class="p-2">
           <input type="text" class="form-control" placeholder="Buscar" id="filtro" autocomplete="off">
          </div>
        </div>
        <table class="table text-center" id="tablaLecturas">
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
          <tbody> 
          </tbody>
        </table>
      </div>
    </div>
  </div>
</body>

<script>
  var baseurl="<?php echo base_url(); ?>";
</script>