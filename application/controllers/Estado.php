<?php
    defined('BASEPATH') OR exit('No direct script access allowed');

    class Estado extends CI_Controller{
    
        function __construct(){    
            parent::__construct();
            $this->db->initialize();
            $this->load->model('mod_estado');
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

        public function ObtenerLecturas(){
            $result=$this->mod_estado->ObtenerLecturas();
            echo json_encode($result);
        }
    }
?>