import * as React from 'react';
import './authStyles.css'
import TextField from '@mui/material/TextField';
import logo from '../../public/logo3.png'
import Image from 'next/image';
import { Checkbox } from '@mui/material';
import { FiArrowLeft } from 'react-icons/fi'


export default function Register() {
  return (
    <div className='body'>
      <Image src={logo} width={207} height={129} />
      <TextField type="text" required margin='dense' fullWidth id="filled-basic" label="Nombre" variant="filled" />
      <TextField type="text" required margin='dense' fullWidth id="filled-basic" label="Apellido" variant="filled" />
      <TextField type="text" required margin='dense' fullWidth id="filled-basic" label="Email" variant="filled" />
      <TextField type="text" required margin='dense' fullWidth id="filled-basic" label="Contraseña" variant="filled" />
      <TextField type="text" required margin='dense' fullWidth id="filled-basic" label="Telefono" variant="filled" />
      <div className='recuerdame-container'>
        <Checkbox />
        <small>Acepto los terminos de uso y la política de privacidad</small>
      </div>
      <p style={{ margin: "2px" }}>¿Ya tienes cuenta? <a href='/Login' className='blue-link'>Inicia Sesión</a></p>
      <div className='cta-container-register'>
        <FiArrowLeft size={40} />
        <button>SIGUIENTE</button>
      </div>
    </div>
  )
}
