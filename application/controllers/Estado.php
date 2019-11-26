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

        public function ObtenerLecturasbyFecha(){
            $text=$this->input->post('texto');
            $resultado=$this->mod_estado->ObtenerLecturasbyFecha($text);
            echo json_encode($resultado);
        }

        //Calculando Promedios Mensuales
        public function PromedioEne(){
            $result=$this->mod_estado->PromedioEne();
            echo json_encode($result);
        }
        
        public function PromedioFeb(){
            $result=$this->mod_estado->PromedioFeb();
            echo json_encode($result);
        }

        public function PromedioMar(){
            $result=$this->mod_estado->PromedioMar();
            echo json_encode($result);
        }

        public function PromedioAbr(){
            $result=$this->mod_estado->PromedioAbr();
            echo json_encode($result);
        }

        public function PromedioMay(){
            $result=$this->mod_estado->PromedioMay();
            echo json_encode($result);
        }

        public function PromedioJun(){
            $result=$this->mod_estado->PromedioJun();
            echo json_encode($result);
        }

        public function PromedioJul(){
            $result=$this->mod_estado->PromedioJul();
            echo json_encode($result);
        }
        
        public function PromedioAgo(){
            $result=$this->mod_estado->PromedioAgo();
            echo json_encode($result);
        }

        public function PromedioSep(){
            $result=$this->mod_estado->PromedioSep();
            echo json_encode($result);
        }

        public function PromedioOct(){
            $result=$this->mod_estado->PromedioOct();
            echo json_encode($result);
        }

        public function PromedioNov(){
            $result=$this->mod_estado->PromedioNov();
            echo json_encode($result);
        }

        public function PromedioDic(){
            $result=$this->mod_estado->PromedioDic();
            echo json_encode($result);
        }

        //Descargar Reporte
        public function dExcel(){
            $result=$this->mod_estado->ObtenerDocumento();
            $this->export_excel->to_excel($result,'Lectura');
        }
    }
?>