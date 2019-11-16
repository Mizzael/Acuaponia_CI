<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Estado extends CI_Controller{
    
    function __construct(){
        
        parent::__construct();
        $this->db->initialize();
    }

    public function Capturas(){
        
        $data['titulo']='Estado del Sitema';
           $this->load->view('Estado/Status',$data);
    }

}
// redirect('Usuario/Login', 'redirect');


// $data['titulo']='Iniciar Sesión';
//             $this->load->view('Estado/Caputas',$data);
?>