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
          <li><a href="<?php echo base_url(); ?>Estado/Lecturas"><i class="far fa-chart-bar"></i> Lecturas</a></li>
          <li><a href="<?php echo base_url(); ?>Estado/Reporte"><i class="far fa-file-excel"></i> Reporte</a></li>
          <li><a href="<?php echo base_url(); ?>Estado/Configuracion""><i class="fas fa-tools"></i>Configuración</a></li>
          <li><a href="<?php echo base_url(); ?>Usuario/Logout"><i class="fas fa-sign-out-alt"></i>Cerrar Sesión</a></li>
        </ul> 
        <div class="social_media">
         <a href="https://www.youtube.com/watch?v=FBfkXEUcnus" target="_blank"><i class="fab fa-youtube"></i></a>
          <a href="https://twitter.com/dedreviil" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/zamora_lo/?hl=es-la" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="https://github.com/Mizzael" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>
  <div class="main_content">
    <div class="header text-center">Configuración de Usuario</div>  
      <div class="info">  

        <div class="row">
            <div class="col-sm-6">
                <div class="card card text-white bg-warning mb-3">
                <div class="card-body text-center">
                    <h5 class="card-title text-center">Configura tú Alerta</h5>
                    <p class="card-text text-center">Puedes establecer el valor máximo para tus sensores.</p>
                    <div class="form-row ">
                        <div class="form-group col-md-6">
                            <label for="inputState">Temperatura Ambiente</label>
                            <input type="text" maxlength="10" class="form-control" placeholder="Temperatura Ambiente" name="TA" autocomplete="off">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputState">Temperatura Tierra</label>
                            <input type="text" maxlength="10" class="form-control" placeholder="Temperatura Tierra" name="TT" autocomplete="off">
                        </div>
                        </div>
                    <a href="#" class="btn btn-dark mb-3">Actualizar</a>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card text-center card text-white bg-info mb-3">
                <div class="card-body">
                    <h5 class="card-title">Cambiar Numero de Telefono</h5>
                    <p class="card-text">Cambiaste de número teléfonico? No hay problema, Actualiza tú información.</p>
                    <input type="text" maxlength="10" class="form-control" placeholder="Nuevo Número" name="Tel" autocomplete="off"><br>
                    <input type="text" maxlength="10" class="form-control" placeholder="Confirmar Número" name="TelConfirm" autocomplete="off"><br>
                    <a href="#" class="btn btn-success">Actualizar</a>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card text-center card text-white bg-info mb-3">
                <div class="card-body">
                    <h5 class="card-title">Agregar Dispositivo</h5>
                    <p class="card-text">Agrega un nuevo dispositivo a tú cuenta.</p>
                    <input type="text" maxlength="10" class="form-control" placeholder="Número de Serie" name="NumSer" autocomplete="off"><br>
                    <a href="#" class="btn btn-success">Agregar</a>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card card text-white bg-danger mb-3 text-center">
                <div class="card-body">
                    <h5 class="card-title">Eliminar Cuenta</h5>
                    <p class="card-text">Zona de Peligro</p>
                    <a href="#" class="btn btn-dark">Eliminar Cuenta</a>
                </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  </div>
</body>