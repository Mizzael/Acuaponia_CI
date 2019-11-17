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

          <div class="mt-1 mb-1 text-muted">
            <div>
              <h2 class="mb-4 font-weight-bold">Ingresa tú Nueva Contraseña</h2>
            </div>
            <div class="text-left form-group">
              <div class="mt-4">
                <div class="d-flex justify-content-between my-0 mb-0">
                  <label class="my-0 text-center" for="inputPassword">Contraseña</label>
                </div>
                <input type="password" name="password" id="inputContraseña" class="form-control form-control-sm" required />
              </div>
              <div class="mt-4">
                <div class="d-flex justify-content-between my-0 mb-0">
                  <label class="my-0 text-center" for="inputPassword">Confirmar Contraseña</label>
                </div>
                <input type="password" name="confirm_password" id="inputContraseña" class="form-control form-control-sm" required />
                <input type="submit" name="commit" value="Cambiar Contraseña" class="btn btn-success btn-block my-4 font-weight-bold"
                  data-disable-with="Iniciar">
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  </div>
</body>
</html>