<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Estado extends CI_Controller{
    
    function __construct(){
        
        parent::__construct();
        $this->db->initialize();
    }

    public function Capturas(){
       
        // $this->ValidarInicioSesion();

        $this->load->view('Estado/Status');
    }

}

?>