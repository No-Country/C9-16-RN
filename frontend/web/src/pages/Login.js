import * as React from 'react';
import './authStyles.css'
import TextField from '@mui/material/TextField';
import logo from '../../public/logo3.png'
import Image from 'next/image';
import { Checkbox } from '@mui/material';
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, updateProfile } from 'firebase/auth';
import { auth } from 'utils/firebase';
import { useRouter } from 'next/router';

export default function Login() {
  const route = useRouter()
  //sign in with google
  const googleProvider = new GoogleAuthProvider()
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result.user)
      route.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  //sign in with facebook
  const fbProvider = new FacebookAuthProvider()
  const FacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider)
      const credential = await FacebookAuthProvider.credentialFromResult(result)
      const token = credential.accessToken;
      let photoURL = result.user.photoURL + '?height=500&access_token=' + token;
      await updateProfile(auth.currentUser, { photoURL: photoURL })
      console.log(result)
      route.push("/")
    } catch (error) {
      console.log(error)
    }
  }

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
        <FcGoogle id='socialAuth' onClick={GoogleLogin} size={32} style={{ marginRight: "6px" }} />
        <BsFacebook id='socialAuth' onClick={FacebookLogin} color='#1877F2' size={32} style={{ marginLeft: "6px" }} />
      </div>
      <p>Si no tienes cuenta, <a href='/Register' className='blue-link'>regístrate</a></p>
    </div>
  );
}