import { WindowContext } from '@/context/window';
import postPhoto from '@/lib/api/axios/feature/postPhoto';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

type Props = {
  userChallengeId: string;
}

const ImageUploader = ({ userChallengeId }: Props) => {
  const router = useRouter();
  const [imageSrc, setImageSrc] = useState<string | ArrayBuffer | null>(null);
  const { handleModalState } = useContext(WindowContext);

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      const res = await postPhoto(
        userChallengeId, 
        file
      );
      if (res === undefined || res === null || res.status === 0) {
        router.push('/error');
        return ;
      }
      if (res.status === 200) {
        handleModalState('upload');
        setTimeout(() => {
          handleModalState(undefined);
          router.push(`/challenge/my/detail/${userChallengeId}?state=my`);
        }, 3000)
      }
    }
  };
  
  return (
    <Container>
      <input
        id='image'
        accept="image/*"
        name='image'
        type="file"
        onChange={onUpload}
        style={{ display: "none" }}
      />
      <ButtonItem
        htmlFor='image'
      >
        Complete Mission
      </ButtonItem>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  left: 50%;
  bottom: 30px;
  width: 90%;
  transform: translateX(-50%);
  height: 60px;
  max-width: 500px;
  margin: 0 auto;
  color: #ffffff;
`

const ButtonItem = styled.label`
  font-size: 18px;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  border: 1px solid #000000;
  border-radius: 20px;
`


export default ImageUploader