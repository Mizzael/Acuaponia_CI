<?php
    class mod_estado extends CI_MODEL{

        public function __construct(){
            parent::__construct();
            $this->db->initialize();
        }

        public function ObtenerLecturas(){
            $this->db->select('lec_fechahora,lec_TemR,lec_HumR,lec_HumT,lec_TemA');
            $this->db->from('lecturas');
            
            $query=$this->db->get();
            return $query->result();
        }

        public function ObtenerLecturasbyFecha($text){
            $this->db->from('lecturas');
            $this->db->like('lec_fechahora',$text,'both');
            $r=$this->db->get();

            return $r->result();
        }

        public function ObtenerDocumento(){
            $this->db->select('lec_fechahora,lec_TemR,lec_HumR,lec_HumT,lec_TemA');
            $this->db->from('lecturas');
            $query = $this->db->get();
                        
            return $query;
        }

        public function PromedioEnero(){
            
          $this->db->select_avg('lec_TemR');
          $this->db->select_avg('lec_HumR');
          $this->db->select_avg('lec_HumT');
          $this->db->select_avg('lec_TemA');
          $this->db->where(' Month(lec_fechahora)=08');       
          $query = $this->db->get('lecturas');
            // $query= 'SELECT AVG(lec_TemR)
            // FROM lecturas
            // WHERE Month(lec_fechahora)=08';
            // $resultados = $this->db->query($query);
          return $query->result();
        }
    }
?>