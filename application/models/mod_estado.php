<?php
    class mod_estado extends CI_MODEL{

        public function __construct(){
            parent::__construct();

            $this->db->initialize();
        }

        public function ObtenerLecturas(){
            $this->db->select('lec_fechahora','lec_TemR');
            $this->db->from('lecturas');

            $query=$this->db->get();
            return $query->result();
        }
    }
?>