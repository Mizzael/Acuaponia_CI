<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="<?php echo base_url(); ?>/assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/EstilosAcua.css">
    <link rel="shortcut icon" href="<?php echo base_url(); ?>/assets/image/logo.ico">
    <script src="assets/js/jquery.js"></script>
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
      <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
      </form>
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
    
   
    



