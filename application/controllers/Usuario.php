<?php
defined('BASEPATH') OR exit('No direct script access allowed');
    
class Usuario extends CI_Controller{
    
    function __construct(){
        
        parent::__construct();
        $this->load->model('mod_usuario');
    }

    public function Register(){
        
        $data['titulo']='Registro';
        $this->load->view('Usuario/Register',$data);
    }

    public function ObtenerCorreo(){
        
        $data = array(
            'response' => $this->session->flashdata('response')
        );
        
        $data['titulo']='Correo';
            $this->load->view('Usuario/ObtenerCorreo',$data);
            
        if ($this->input->post('correo')){
            $this->load->model('mod_usuario');
            
            $usuario = $this->mod_usuario->VerificarCorreo($this->input->post('correo'));
            if($usuario){

                $this->session->set_userdata(
                    'user', 
                    array
                    (
                        'id' => $usuario->id_us,
                        'correo' => $usuario->us_correo,
                        'nombre' => $usuario->us_nombre
                    )
                );

                redirect('Usuario/NuevaPassword', 'redirect');
            }          
        }else{
            $this->session->set_flashdata('response', array('message' => 'El correo electrónico es incorrecto'));
        }
    }

    public function NuevaPassword(){
            
        if(!$this->session->has_userdata('user')){
                redirect(base_url());
            }else{
                $data['titulo']='Cambiar Contraseña';
                    $this->load->view('Usuario/NuevaPassword',$data);
                $this->load->view('Shared/footer');
            }
    }

    public function CambiarPassword(){
        
        $this->form_validation->set_rules('password','Contraseña','required');
        $this->form_validation->set_rules('confirm_password', 'Confirm Password', 'required|matches[password]');

        if($this->form_validation->run()==false){
            redirect(base_url().'Usuario/NuevaPassword');
        }else{
            $nuevaPsd=array(
                'us_clave'=>md5($this->input->post('password')),
            );
            $this->mod_usuario->NuevaPassword($nuevaPsd);
        }
    }

    public function Login(){
        
        $data = array(
            'response' => $this->session->flashdata('response')
        );

        $data['titulo']='Iniciar Sesión';
        $this->load->view('Usuario/Login',$data);

        if ($this->input->post('correo')&&$this->input->post('password')){
            $this->load->model('mod_usuario');
            
            $usuario = $this->mod_usuario->Login($this->input->post('correo'),md5($this->input->post('password')));
            if($usuario){

                $this->session->set_userdata(
                    'user', 
                    array
                    (
                        'id' => $usuario->id_us,
                        'correo' => $usuario->us_correo,
                        'nombre' => $usuario->us_nombre
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
        $this->form_validation->set_rules('telefono','Teléfono','required');
        $this->form_validation->set_rules('confirm_password', 'Confirm Password', 'required|matches[password]');
       
        if($this->form_validation->run()==false){
            
            redirect(base_url().'Usuario/Register');

        }else{
            $data=array(
                'us_nombre'=>$this->input->post('nombre'),
                'us_apellido'=>$this->input->post('apellido'),
                'us_correo'=>$this->input->post('correo'),
                'us_tel'=>$this->input->post('telefono'),
                'us_clave'=>md5($this->input->post('password')),
                'num_ser'=>$this->input->post('nserie')
            );
            $this->mod_usuario->insertar($data);            
        }
    }
}
?>