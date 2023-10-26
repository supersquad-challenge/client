import { AuthContext } from '@/context/auth'
import React, { useContext } from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import Image from 'next/image'
import styled from 'styled-components'

type Props = {
  color: string;
  size: number
}

const Profile = ({ color, size }: Props) => {
  const { userProfile } = useContext(AuthContext)
  return (
    <>
      {userProfile ? (
        <ImageContainer
          $width={size}
          $height={size}
        >
        <Image
          src={userProfile}  
          alt='user'
          width={size}
          height={size}      
          />
        </ImageContainer>
      ) : (
        <HiOutlineUserCircle
          size={size}
          color={color}
        />
      )}
    </>
  )
}

const ImageContainer = styled.div<{
  $width: number,
  $height: number
}>`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
`

export default Profile