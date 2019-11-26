<?php
    class mod_usuario extends CI_MODEL{

        public function __construct(){
            parent::__construct();
            $this->db->initialize();
        }

        function insertar($data){
            //Verificar que no exista otro correo
            $correoDuplicado=$this->db->get_where('usuarios',array('us_correo'=>$data['us_correo']));
            $NumSerDuplicado=$this->db->get_where('usuarios',array('dis_NoSerie'=>$data['dis_NoSerie']));
            $TelefonoDuplicado=$this->db->get_where('usuarios',array('us_telefono'=>$data['us_telefono']));
            // var_dump($data);

            if($correoDuplicado->num_rows()>0||$NumSerDuplicado->num_rows()>0||$TelefonoDuplicado->num_rows()>0){
                $data['titulo']='Registro';
                $this->load->view('Usuario/Register',$data);
                
            }else{
                $this->db->insert('usuarios',$data);
                $usuario = $this->mod_usuario->Login($this->input->post('correo'),md5($this->input->post('password')));
                    if($usuario){
                        $this->session->set_userdata(
                        'user', 
                        array
                        (
                            'id' => $usuario->Id_usuario,
                            'correo' => $usuario->us_correo,
                            'nombre' => $usuario->us_nombre
                        )
                    );
                        redirect('Estado/Capturas', 'redirect');
                }else{
                    $this->session->set_flashdata('response', array('message' => 'El correo electrónico y/o contraseña es/son incorrecto(s)'));
                }
            }
        }

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

        public function VerificarCorreo($correo){
            $query = 
                $this->db
                    ->select('*')
                    ->from('usuarios')
                    ->where("us_correo = '".$correo."'")
                    ->get();

            return ($query->num_rows() > 0) ? $query->row(0) : false;
        }

        // public function NuevaPassword($nuevaPsd){
        //     $this->db->where('us_clave',$nuevaPsd);
        //     $query=$this->db->update('usuarios',$nuevaPsd);
        // }
    }
?>