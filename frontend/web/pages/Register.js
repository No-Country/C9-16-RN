import * as React from 'react';
import TextField from '@mui/material/TextField';
// import logo from '../../public/logo3.png'
import Image from 'next/image';
import { Checkbox, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import axios from 'axios';


export default function Register() {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    axios.post(
      "https://movemind-academy.onrender.com/api/v1/MoveMind-Academy/auth/register",
      data
    )
      .then((res) => {
        console.log("-------this is the data you send-----")
        console.log(data)
        console.log("-------this is Your res.data cioé your response-----")
        console.log(res.data)
        alert(
          "Great! you have an account now, you just have to log in and start shopping, have fun!"
        );
        router.push("/Login");
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          alert(
            "Invalid Information, please check the info you send"
          );
          console.log(error.response);
        } else {
          alert("something went wrong");
          console.log(error.response);
        }
      });
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      country: "",
      role: "",
    });
  };

  const [rol, setRol] = React.useState('');

  const handleChange = (event) => {
    setRol(event.target.value);
  };

  return (
    <div className='body'>
      {/* <Image src={logo} width={207} height={129} /> */}
      <Link href="/">
        <FiArrowLeft color='black' size={40} style={{ position: "absolute", left: 0, top: 0 }} />
      </Link>
      <form onSubmit={handleSubmit(submit)}>
        <TextField
          {...register(
            "firstName"
          )} type="text"
          required
          margin='dense'
          fullWidth
          id="filled-basic"
          label="Nombre"
          variant="filled" />
        <TextField {...register("lastName")} type="text" required margin='dense' fullWidth id="filled-basic" label="Apellido" variant="filled" />
        <TextField {...register("email")} type="text" required margin='dense' fullWidth id="filled-basic" label="Email" variant="filled" />
        <TextField {...register("password")} type="text" required margin='dense' fullWidth id="filled-basic" label="Contraseña" variant="filled" />
        <TextField {...register("phone")} type="text" required margin='dense' fullWidth id="filled-basic" label="Telefono" variant="filled" />
        <TextField {...register("country")} type="text" required margin='dense' fullWidth id="filled-basic" label="País" variant="filled" />
        <FormControl variant="filled" fullWidth margin='dense'>
          <InputLabel required id="demo-simple-select-filled-label">Rol</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            defaultValue="Student"
            {...register("role")}
          >
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="instructor">Instructor</MenuItem>
          </Select>
        </FormControl>
        <div className='recuerdame-container'>
          <Checkbox />
          <small>Acepto los terminos de uso y la política de privacidad</small>
        </div>
        <p style={{ margin: "2px" }}>¿Ya tienes cuenta? <a href='/Login' className='blue-link'>Inicia Sesión</a></p>
        <button type='submit' className='cta-container-register'>CREAR CUENTA</button>
      </form>
    </div>
  )
}
