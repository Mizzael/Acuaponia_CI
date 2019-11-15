<?php
    class mod_usuario extends CI_MODEL{

        function insertar($data){

            //Verificar que no exista otro correo
            $correoDuplicado=$this->db->get_where('usuarios',array('us_correo'=>$data['us_correo']));
            $NumSerDuplicado=$this->db->get_where('usuarios',array('num_ser'=>$data['num_ser']));

            if($correoDuplicado->num_rows()>0||$NumSerDuplicado->num_rows()>0){
                $data['titulo']='Registro';
                $this->load->view('Usuario/Register',$data);
                
            }else{
                $this->db->insert('usuarios',$data);
                $this->load->view('Usuario/Status',$data);
            }
        }

        function Ingresar($correo,$password){
            
            $this->db->where('us_correo',$correo);
            $this->db->where('us_clave',$password);
            // $this->db
            // $this->db

            $query= $this->db->get('usuarios');
            if($query->num_rows()>0){
                return true;
            }else{
                return false;
            }
        }
    }
?>