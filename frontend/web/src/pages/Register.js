import * as React from 'react';
import './authStyles.css'
import TextField from '@mui/material/TextField';
import logo from '../../public/logo3.png'
import Image from 'next/image';
import { Checkbox, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link';


export default function Register() {

  const [rol, setRol] = React.useState('');

  const handleChange = (event) => {
    setRol(event.target.value);
  };

  return (
    <div className='body'>
      <Image src={logo} width={207} height={129} />
      <Link href="/">
        <FiArrowLeft color='black' size={40} style={{ position: "absolute", left: 0, top: 0 }} />
      </Link>
      <TextField type="text" required margin='dense' fullWidth id="filled-basic" label="Nombre" variant="filled" />
      <TextField type="text" required margin='dense' fullWidth id="filled-basic" label="Apellido" variant="filled" />
      <TextField type="text" required margin='dense' fullWidth id="filled-basic" label="Email" variant="filled" />
      <TextField type="text" required margin='dense' fullWidth id="filled-basic" label="Contraseña" variant="filled" />
      <TextField type="text" required margin='dense' fullWidth id="filled-basic" label="Telefono" variant="filled" />
      <TextField type="text" required margin='dense' fullWidth id="filled-basic" label="País" variant="filled" />
      <FormControl variant="filled" fullWidth margin='dense'>
        <InputLabel required id="demo-simple-select-filled-label">Rol</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={rol}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Alumno">Alumno</MenuItem>
          <MenuItem value="Instructor">Instructor</MenuItem>
        </Select>
      </FormControl>
      <div className='recuerdame-container'>
        <Checkbox />
        <small>Acepto los terminos de uso y la política de privacidad</small>
      </div>
      <p style={{ margin: "2px" }}>¿Ya tienes cuenta? <a href='/Login' className='blue-link'>Inicia Sesión</a></p>
      <button className='cta-container-register'>CREAR CUENTA</button>
    </div>
  )
}
