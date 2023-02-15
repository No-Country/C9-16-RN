import * as React from 'react';
import './authStyles.css'
import TextField from '@mui/material/TextField';
import logo from '../../public/logo3.png'
import Image from 'next/image';
import { Checkbox } from '@mui/material';
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'

export default function Login() {
  return (
    <div className='body'>
      <Image id='logo' src={logo} width={237} height={159} />
      <TextField type="text" required margin='normal' fullWidth id="filled-basic" label="Email" variant="filled" />
      <TextField type="password" required margin='normal' fullWidth id="filled-basic" label="Contraseña" variant="filled" />
      <div className='recuerdame-container'>
        <p>Recuérdame</p>
        <Checkbox />
      </div>
      <button className='login-btn'>INICIA SESION</button>
      <a className='blue-link' href='/'>¿Has olvidado tu contraseña?</a>
      <p>o Inicia Sesión con</p>
      <div>
        <FcGoogle size={32} style={{ marginRight: "6px" }} />
        <BsFacebook color='#1877F2' size={32} style={{ marginLeft: "6px" }} />
      </div>
      <p>Si no tienes cuenta, <a href='/Register' className='blue-link'>regístrate</a></p>
    </div>
  );
}