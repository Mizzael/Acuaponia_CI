<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="generator" content="Jekyll v3.8.5" />
  <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/login.css" />
  <link rel="shortcut icon" href="<?php echo base_url(); ?>assets/image/logo.ico">
  <link rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>assets/css/bootstrap.css">
  <title><?php echo $titulo ?> | Gaia-System</title>
</head>
<body class="text-center" style="background-color: #2a7cbb">
  <div class="container">
    <main>
      <section>
        <form class="form-signin pr-5 pt-3 pb-3 pl-5 border rounded bg-light" method="POST">
          <div class="separador mb-0">
            <img class="mb-3" src=" <?php echo base_url(); ?>assets/image/logoPI.png" alt="" width="70" height="85" />
          </div>

          <div class="mt-0 mb-1 text-muted">
              <h2 class="mb-4 font-weight-bold">Recupera tú Contraseña</h2>
              <?php
                if(isset($response)):
              ?>  
              <div class="alert alert-danger text-center">
                <?php echo($response['message']); ?>
              </div>
              <?php
                endif;
              ?>
            <div class="text-left form-group">
              <div class=" mb-2">
                <label class="my-0 text-center" for="inputEmail">EMAIL</label>
                <input type="email" name="correo" id="inputEmail" class="form-control form-control-sm" autocomplete="off" required />
              </div>
              <div class="mt-4">
                <input type="submit" name="commit" value="Recuperar" class="btn btn-success btn-block my-4 font-weight-bold">
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  </div>
</body>
</html>