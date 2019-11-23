<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="generator" content="Jekyll v3.8.5" />
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/login.css" />
  <link rel="shortcut icon" href="<?php echo base_url(); ?>assets/image/logo.ico">
  <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/bootstrap.css">
  <title><?php echo $titulo ?> | Gaia-System</title>
</head>

<body class="text-center d-flex justify-content-center" style="background-color: #2a7cbb">
  <div class="container card mx-auto my-auto">
    <main>
      <section>
        <!-- <form class="bg-light p-4 font-weight-bold text-muted" method="POST"> -->
          <?php echo form_open(base_url()."Usuario/AgregarUsuario"); ?>
            <div>
                <h2 class="mb-4 font-weight-bold">Registrate gratis!</h2>
              </div>
              <div class="form-row ">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Nombre</label>
                <input type="text" class="form-control" placeholder="Primer nombre" name="nombre" autocomplete="off" required>
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Apellido</label>
                <input type="text" class="form-control" placeholder="Primer apellido" name="apellido" autocomplete="off" required>
              </div>
            </div>
            <div class="form-group">
              <label for="formGroupExampleInput">Email</label>
                <input type="email" id="inputEmail" class="form-control form-control-sm" placeholder="Example@example" name="correo" autocomplete="off" required />
            </div>
            <div class="form-row ">
            <div class="form-group col-md-6">
              <label for="inputPassword4">Contraseña</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password" name="password" required>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Confirmar contraseña</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password" name="confirm_password" required>
            </div>
            </div>
            <div class="form-row ">
              <div class="form-group col-md-6">
                <label for="inputState">Teléfono</label>
                <input type="tel" onkeypress="return event.charCode >= 48 && event.charCode <= 57"  maxlength="10" class="form-control" placeholder="Teléfono" name="telefono" autocomplete="off" required>
              </div>
              <div class="form-group col-md-6">
                <label for="inputState">Número de serie</label>
                <input type="text" class="form-control" placeholder="N° serie" name="nserie" autocomplete="off" required>
              </div>
            </div>
            <div class="form-group">
                <div class="form-check ">
                  <input class="form-check-input" type="checkbox" id="gridCheck" required>
                  <label class="form-check-label" for="gridCheck">Acepto términos y condiciones</label>
                </div>
            </div>
            <input type="submit" name="commit" value="CREAR UNA CUENTA" class="btn btn-success font-weight-bold col-md-4" data-disable-with="Iniciar">
            <hr class="form-divider">
            <p class="d-flex justify-content-between my-3 col-md font-weight-light">
              Ya tienes una cuenta?
              <a href="<?php echo base_url(); ?>Usuario/Login">Iniciar sesión</a>
            </p>
          </div>
          </div>           
        <div class="row">
          <div class="col-md-12">
            <?php echo validation_errors(); ?>  
          </div>
          <?php echo form_close(); ?>
        </div>
        <!-- onkeypress='return event.charCode >= 48 && event.charCode <= 57' -->
        <!-- </form> -->
</body>
</html>