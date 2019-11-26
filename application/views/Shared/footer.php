
</body>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
    <script src="<?php echo base_url(); ?>/assets/js/bootstrap.min.js"></script>
    
    <?php if($this->uri->segment(2)=='Reporte') {?>
        <script src="<?php echo base_url(); ?>/assets/js/reporte.js"></script>
    <?php } ?>

    <?php if($this->uri->segment(2)=='Lecturas') {?>
        <script src="<?php echo base_url(); ?>/assets/js/lecturas.js"></script>
    <?php } ?>
    
</html>