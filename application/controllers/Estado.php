<?php
    defined('BASEPATH') OR exit('No direct script access allowed');

    class Estado extends CI_Controller{
    
        function __construct(){    
            parent::__construct();
            $this->db->initialize();
            $this->load->model('mod_estado');
            $this->load->library('export_excel');
        }

        //Vistas
        public function Capturas(){  
            if(!$this->session->has_userdata('user')){
                redirect(base_url());
            }else{
                $data['titulo']='Estado del Sitema';
                    $this->load->view('Estado/Status',$data);
                $this->load->view('Shared/footer');
            }
        }

        public function Reporte(){
            if(!$this->session->has_userdata('user')){
                redirect(base_url());
            }else{
                $data['titulo']='Reporte';
                    $this->load->view('Estado/Reporte',$data);
                $this->load->view('Shared/footer');
            }
        }

        public function Lecturas(){
            if(!$this->session->has_userdata('user')){
                redirect(base_url());
            }else{
                $data['titulo']='Lecturas';
                    $this->load->view('Estado/Lecturas',$data);
                $this->load->view('Shared/footer');
            }
        }
        
        //Para graficar
        public function ObtenerLecturas(){
            $result=$this->mod_estado->ObtenerLecturas();
            echo json_encode($result);
        }

        public function mostrar(){
            if($this->input->is_ajax_request()){
                $buscar=$this->input->post("buscar");
                $datos= $this->mod_estado->mostrar($buscar);
                echo json_encode($datos);
            }else{
                show_404();
            }
        }

        //Descargar Reporte
        public function dExcel(){
            $result=$this->mod_estado->ObtenerDocumento();
            $this->export_excel->to_excel($result,'Lecturas');
        }
    }
?>