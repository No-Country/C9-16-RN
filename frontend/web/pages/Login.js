import * as React from 'react';
import TextField from '@mui/material/TextField';
// import logo from '../../public/logo3.png'
// import Image from 'next/image';
import { Checkbox } from '@mui/material';
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
// import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, updateProfile } from 'firebase/auth';
// import { auth } from 'utils/firebase';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Image from 'next/image';

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const route = useRouter();


  const submit = (data) => {
    axios.post(
      "https://movemind-academy.onrender.com/api/v1/MoveMind-Academy/auth/login",
      data
    )
      .then((res) => {
        // console.log(res.data);
        alert("succesfuly authenticated");
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "token",
            res.data.token
          )
        }
        route.push("/");
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          alert("Invalid User");
        } else {
          console.log(error.response);
        }
      });
    reset({
      email: "",
      password: "",
    });
  };

  //sign in with google
  // const googleProvider = new GoogleAuthProvider()
  // const GoogleLogin = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, googleProvider)
  //     console.log(result.user)
  //     route.push("/")
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  //sign in with facebook
  // const fbProvider = new FacebookAuthProvider()
  // const FacebookLogin = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, fbProvider)
  //     const credential = await FacebookAuthProvider.credentialFromResult(result)
  //     const token = credential.accessToken;
  //     let photoURL = result.user.photoURL + '?height=500&access_token=' + token;
  //     await updateProfile(auth.currentUser, { photoURL: photoURL })
  //     console.log(result)
  //     route.push("/")
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  if (typeof window !== "undefined") {
    if (localStorage.getItem("token")) {
      route.push("/")
    }
  }

  return (
    <div className='body'>
      {/* <Image id='logo' src={logo} width={237} height={159} /> */}
      <form
        onSubmit={handleSubmit(submit)}
      >
        <TextField {...register("email")} type="text" required margin='normal' fullWidth id="filled-basic" label="Email" variant="filled" />
        <TextField {...register("password")} type="password" required margin='normal' fullWidth id="filled-basic" label="Contraseña" variant="filled" />
        <div className='recuerdame-container'>
          <p>Recuérdame</p>
          <Checkbox />
        </div>
        <button type='submit' className='login-btn'>INICIA SESION</button>
      </form>
      <a className='blue-link' href='/'>¿Has olvidado tu contraseña?</a>
      <p>o Inicia Sesión con</p>
      <div>
        <FcGoogle id='socialAuth' size={32} style={{ marginRight: "6px" }} />
        <BsFacebook id='socialAuth' color='#1877F2' size={32} style={{ marginLeft: "6px" }} />
      </div>
      <p>Si no tienes cuenta, <a href='/Register' className='blue-link'>regístrate</a></p>
    </div>
  );
}