<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ingresar extends CI_Controller{
    
    public function Login(){

        $data['titulo']='Iniciar Sesión';

        $this->load->view('Ingresar/Login',$data);
    }
}
?>