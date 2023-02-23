import Head from 'next/head'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link';
import NavBar from '@/components/navBar';

export default function Home() {
  const route = useRouter();

  const handleLogOut = () => {
    localStorage.setItem("token", "")
    route.push("/Login")
  }

  const [token, setToken] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("token"))
    } else {
      setToken("")
    }
  }, [token])

  return (
    <div className='body'>
      <NavBar />
      <h1 className='text-red-500'>Home page</h1>
      {
        token === "" || token === [] || token === undefined ? (
          <>
            <p>You Dont have a token</p>
            <a href='/Login'>Login</a>
          </>
        ) : (
          <>
            <p>You have a token</p>
            <button onClick={handleLogOut}>Log Out</button>
          </>
        )
      }

    </div>
  )
}
