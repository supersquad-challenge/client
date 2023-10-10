import { AuthContext } from '@/context/auth'
import React, { useContext } from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import Image from 'next/image'

const Profile = () => {
  const { userProfile } = useContext(AuthContext)
  return (
    <>
      {userProfile ? (
        <Image
          src={userProfile}  
          alt='user'
          width={28}
          height={28}      
        />
      ) : (
        <HiOutlineUserCircle
          size='28'
        />
      )}
    </>
  )
}

export default Profile