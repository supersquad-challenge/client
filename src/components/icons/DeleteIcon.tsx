import { IconProps } from "@/types/Icon"

const DeleteIcon = ({ color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
    >
      <g clipPath="url(#a)">
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m7 7 10 10m0-10L7 17"
        />
      </g>
    </svg>
  )
} 

export default DeleteIcon