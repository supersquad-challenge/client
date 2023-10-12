import { ImageProps } from '@/interface';

interface IFixedSizeImage {
  width: number;
  height: number;
  $borderRadius: number;
  imageUrl: string;
}

const FixedSizeImage = ({
  width,
  height,
  $borderRadius: borderRadius,
  imageUrl,
}: IFixedSizeImage) => {
  return (
    <div
      style={{
        width: `${width}px`, // 원하는 크기로 설정
        height: `${height}px`,
        overflow: 'hidden', // 이미지 영역을 넘어가는 부분은 보이지 않도록 설정
        borderRadius: `${borderRadius}px`,
      }}
    >
      <img
        src={imageUrl}
        alt="Cropped Image"
        style={{
          height: '100%',
          objectFit: 'cover', // 이미지 비율에 맞게 잘리도록 설정
        }}
      />
    </div>
  );
};

export default FixedSizeImage;
