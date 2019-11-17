<?php
    class mod_usuario extends CI_MODEL{

        public function __construct(){
            parent::__construct();

            $this->db->initialize();
        }

        function insertar($data){

            //Verificar que no exista otro correo
            $correoDuplicado=$this->db->get_where('usuarios',array('us_correo'=>$data['us_correo']));
            $NumSerDuplicado=$this->db->get_where('usuarios',array('num_ser'=>$data['num_ser']));

            if($correoDuplicado->num_rows()>0||$NumSerDuplicado->num_rows()>0){
                $data['titulo']='Registro';
                $this->load->view('Usuario/Register',$data);
                
            }else{
                $this->db->insert('usuarios',$data);
                
                $data['titulo']='Estado del Sitema';
                    $this->load->view('Estado/Status',$data);
                $this->load->view('Shared/footer');
            }
        }

        // public function Ingresar($correo,$password){
            
        //     $this->db->where('us_correo',$correo);
        //     $this->db->where('us_clave',$password);


        //     $query= $this->db->get('usuarios');
        //     if($query->num_rows()>0){
        //         return true;
        //     }else{
        //         return false;
        //     }
        // }

        public function Login($correo, $password){            			
            $response = 
                $this->db
                    ->select('*')
                    ->from('usuarios')
                    ->where("us_correo = '".$correo."'")
                    ->where("us_clave = '".$password."'")
                    ->get();

            return ($response->num_rows() > 0) ? $response->row(0) : false;
        }

        public function RecuperarPsd($correopsd){
            $correoDuplicado=$this->db->get_where('usuarios',array('us_correo'=>$correopsd['us_correo']));
            if($correoDuplicado->num_rows()>0){
               redirect(base_url().'Usuario/NuevaPassword');
            }
        }

        public function NuevaPassword($nuevaPsd){
            $this->db->insert('usuarios',$nuevaPsd);
        }
}
?>