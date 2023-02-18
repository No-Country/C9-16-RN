'use client'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../utils/firebase'
import Loader from '@/components/Loader'
import { useRouter } from 'next/navigation'

export default function Home() {
  const route = useRouter();

  const [user, loading] = useAuthState(auth)

  const handleLogOut = async () => {
    await auth.signOut()
    alert("successfuly logged out")
    route.push("/Login")
  }

  if (loading) return <Loader />
  return (
    <div className='body'>
      <h1 className='text-4xl'>Home page</h1>
      {user && (
        <div className='flex justify-between mb-5'>
          <div className='flex items-center'>
            <img referrerPolicy='no-referrer' src={user.photoURL} className="rounded-full w-12 h-12" alt="photoUser" />
            <p>{user.displayName}</p>
          </div>
          <button onClick={handleLogOut} className='bg-red-400 p-3 rounded-md text-white'>Log out</button>
        </div>
      )}
      {
        !user & !loading ? (
          <div className='flex justify-between'>
            <Link className='bg-purple-400 p-3 rounded-md text-white' href="/Register">Go to Register</Link>
            <Link className='bg-purple-400 p-3 rounded-md text-white' href="/Login">Go to Login</Link>
          </div>
        ) : ""
      }
    </div>
  )
}
