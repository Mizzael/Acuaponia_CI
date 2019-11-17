<?php
defined('BASEPATH') OR exit('No direct script access allowed');
    
class Usuario extends CI_Controller{
    
    function __construct(){
        
        parent::__construct();
        // $this->ValidarInicioSesion();
        $this->load->model('mod_usuario');
    }

    public function Register(){
        
        $data['titulo']='Registro';
        $this->load->view('Usuario/Register',$data);
    }

        public function RecuperarPassword(){
            $data['titulo']='Recuperar Contraseña';
                $this->load->view('Usuario/RecuperarPassword',$data);
                
            $correopsd=array(
                'us_correo'=>$this->input->post('correopsd')
            );
            $this->mod_usuario->RecuperarPsd($correopsd);
        }

        public function CambiarPassword(){
            $data['titulo']='Cambiar Contraseña';
                $this->load->view('Usuario/CambiarPassword',$data);
        }


    public function Login(){
        
        $data['titulo']='Iniciar Sesión';
        $this->load->view('Usuario/Login',$data);

        // if($this->session->userdata('us_correo')){
        //     redirect('Usuario/Status');
        // }

        // if(isset($_POST['password'])){
        //     if($this->mod_usuario->Ingresar($_POST['correo'],md5($_POST['password']))){
        //         $this->session->set_userdata('correo',$_POST['correo']);
        //         redirect(base_url().'Usuario/Status');
        //     }else{
        //         redirect(base_url().'Usuario/Login');
        //     }
        // }

        if ($this->input->post('correo')&&$this->input->post('password')){
            $this->load->model('mod_usuario');
            
            $usuario = $this->mod_usuario->Login($this->input->post('correo'),md5($this->input->post('password')));
            if($usuario){

                $this->session->set_userdata(
                    'user', 
                    array(
                        'id' => $usuario->id_us,
                        'correo' => $usuario->us_correo,
                    )
                );

                redirect('Estado/Capturas', 'redirect');
            }          
        }else{
            $this->session->set_flashdata('response', array('message' => 'El correo electrónico y/o contraseña es/son incorrecto(s)'));
        
        }

    }

    public function Logout(){
        session_destroy();
        redirect(base_url(),'refresh');
    }

    public function AgregarUsuario(){
        $this->form_validation->set_rules('nombre','Nombre','required');
        $this->form_validation->set_rules('apellido','Apellido','required');
        $this->form_validation->set_rules('correo','Email','required');
        $this->form_validation->set_rules('password','Contraseña','required');
        $this->form_validation->set_rules('nserie','N°Serie','required');
        // $this->form_validation->set_rules('confirm_password','Confirmar','required');
        $this->form_validation->set_rules('confirm_password', 'Confirm Password', 'required|matches[password]');
       
        if($this->form_validation->run()==false){
            
            redirect(base_url().'Usuario/Register');

        }else{

            $data=array(
                'us_nombre'=>$this->input->post('nombre'),
                'us_apellido'=>$this->input->post('apellido'),
                'us_correo'=>$this->input->post('correo'),
                'us_clave'=>md5($this->input->post('password')),
                'num_ser'=>$this->input->post('nserie')
            );
            $this->mod_usuario->insertar($data);

            //redirect(base_url());
        }
    }
}
?>