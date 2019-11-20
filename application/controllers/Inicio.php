<?php
    defined('BASEPATH') OR exit('No direct script access allowed');

    class Inicio extends CI_Controller{
        
        public function Index(){
            $data['titulo']='Inicio';
            
            $this->load->view('Shared/header',$data);
                $this->load->view('Inicio/Index');
            $this->load->view('Shared/footer');
        }
    }
?>