<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Estado extends CI_Controller{
    
    function __construct(){
        
        parent::__construct();
        $this->db->initialize();
    }

    public function Capturas(){
        
        if(!$this->session->has_userdata('user')){
            redirect(base_url());
        }else{
            $data['titulo']='Estado del Sitema';
                $this->load->view('Estado/Status',$data);
            $this->load->view('Shared/footer');
        }
    }

}
?>