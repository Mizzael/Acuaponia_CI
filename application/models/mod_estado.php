<?php
    class mod_estado extends CI_MODEL{

        public function __construct(){
            parent::__construct();
            $this->db->initialize();
        }

        public function ObtenerLecturas(){
            $this->db->select('id,lec_FechaHora,lec_TemR,lec_HumR,lec_HumT,lec_TemA');
            $this->db->from('lectura');
            
            $query=$this->db->get();
            return $query->result();
        }

        public function ObtenerLecturasbyFecha($text){
            $this->db->from('lectura');
            $this->db->like('lec_FechaHora',$text,'both');
            $r=$this->db->get();

            return $r->result();
        }

        public function ObtenerDocumento(){
            $this->db->select('lec_FechaHora,lec_TemR,lec_HumR,lec_HumT,lec_TemA');
            $this->db->from('lectura');
            $query = $this->db->get();
                        
            return $query;
        }

        //Graficas mensuales y Semanal
        public function GraficaSemanal(){
            $this->db->select_avg('lec_TemR');
            $this->db->select_avg('lec_HumR');
            $this->db->select_avg('lec_HumT');
            $this->db->select_avg('lec_TemA');    
            $query = $this->db->get('lectura');
             
            return $query->result();
        
        }


        public function PromedioEne(){
            $this->db->select_avg('lec_TemR');
            $this->db->select_avg('lec_HumR');
            $this->db->select_avg('lec_HumT');
            $this->db->select_avg('lec_TemA');
            $this->db->where(' Month(lec_FechaHora)=1');       
            $query = $this->db->get('lectura');
             
            return $query->result();
        }

        public function PromedioFeb(){
            $this->db->select_avg('lec_TemR');
            $this->db->select_avg('lec_HumR');
            $this->db->select_avg('lec_HumT');
            $this->db->select_avg('lec_TemA');
            $this->db->where(' Month(lec_FechaHora)=2');       
            $query = $this->db->get('lectura');
                
            return $query->result();
        }

        public function PromedioMar(){
            $this->db->select_avg('lec_TemR');
            $this->db->select_avg('lec_HumR');
            $this->db->select_avg('lec_HumT');
            $this->db->select_avg('lec_TemA');
            $this->db->where(' Month(lec_FechaHora)=3');       
            $query = $this->db->get('lectura');
                
            return $query->result();
        }
        
        public function PromedioAbr(){
            $this->db->select_avg('lec_TemR');
            $this->db->select_avg('lec_HumR');
            $this->db->select_avg('lec_HumT');
            $this->db->select_avg('lec_TemA');
            $this->db->where(' Month(lec_FechaHora)=4');       
            $query = $this->db->get('lectura');
                
            return $query->result();
        }

        public function PromedioMay(){
            $this->db->select_avg('lec_TemR');
            $this->db->select_avg('lec_HumR');
            $this->db->select_avg('lec_HumT');
            $this->db->select_avg('lec_TemA');
            $this->db->where(' Month(lec_FechaHora)=5');       
            $query = $this->db->get('lectura');
                
            return $query->result();
        }

        public function PromedioJun(){
            $this->db->select_avg('lec_TemR');
            $this->db->select_avg('lec_HumR');
            $this->db->select_avg('lec_HumT');
            $this->db->select_avg('lec_TemA');
            $this->db->where(' Month(lec_FechaHora)=6');       
            $query = $this->db->get('lectura');
                
            return $query->result();
        }

        public function PromedioJul(){
            $this->db->select_avg('lec_TemR');
            $this->db->select_avg('lec_HumR');
            $this->db->select_avg('lec_HumT');
            $this->db->select_avg('lec_TemA');
            $this->db->where(' Month(lec_FechaHora)=7');       
            $query = $this->db->get('lectura');
                
            return $query->result();
        }
   
        public function PromedioAgo(){   
            $this->db->select_avg('lec_TemR');
            $this->db->select_avg('lec_HumR');
            $this->db->select_avg('lec_HumT');
            $this->db->select_avg('lec_TemA');
            $this->db->where(' Month(lec_FechaHora)=8');       
            $query = $this->db->get('lectura');
            
            return $query->result();
        }

        public function PromedioSep(){
            $this->db->select_avg('lec_TemR');
            $this->db->select_avg('lec_HumR');
            $this->db->select_avg('lec_HumT');
            $this->db->select_avg('lec_TemA');
            $this->db->where(' Month(lec_FechaHora)=9');       
            $query = $this->db->get('lectura');
                
            return $query->result();
        }

        public function PromedioOct(){
            $this->db->select_avg('lec_TemR');
            $this->db->select_avg('lec_HumR');
            $this->db->select_avg('lec_HumT');
            $this->db->select_avg('lec_TemA');
            $this->db->where(' Month(lec_FechaHora)=10');       
            $query = $this->db->get('lectura');
                
            return $query->result();
        }

        public function PromedioNov(){
            $this->db->select_avg('lec_TemR');
            $this->db->select_avg('lec_HumR');
            $this->db->select_avg('lec_HumT');
            $this->db->select_avg('lec_TemA');
            $this->db->where(' Month(lec_FechaHora)=11');       
            $query = $this->db->get('lectura');
                
            return $query->result();
        }

        public function PromedioDic(){
            $this->db->select_avg('lec_TemR');
            $this->db->select_avg('lec_HumR');
            $this->db->select_avg('lec_HumT');
            $this->db->select_avg('lec_TemA');
            $this->db->where(' Month(lec_FechaHora)=12');       
            $query = $this->db->get('lectura');
                
            return $query->result();
        }
    }
?>