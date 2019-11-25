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

        public function ObtenerLecturasbyFecha($text)
        {
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

        public function Promedio(){
          $this->db->select_avg('lec_TemR');
          $this->db->select_avg('lec_HumR');
        //   $this->db->from('lecturas');
          $query = $this->db->get('lecturas');
          return $query->result();
        }
    }
?>