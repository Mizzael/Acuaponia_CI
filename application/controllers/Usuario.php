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

    public function Login(){
        
        $data['titulo']='Iniciar Sesión';
        $this->load->view('Usuario/Login',$data);

        if(isset($_POST['password'])){
            if($this->mod_usuario->Ingresar($_POST['correo'],md5($_POST['password']))){
                $this->load->view('Usuario/Status');
            }else{
                $this->load->view('Usuario/Login',$data);
            }
        }

    }

    public function Status(){
       
        $this->load->view('Usuario/Status');
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