import { IconProps } from './shared/IconProps';
const DialogFilled = ({
  size = 20,
  color = 'currentColor',
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 4.07407C2 2.92859 2.89543 2 4 2H20C21.1046 2 22 2.92859 22 4.07407V13.9259C22 15.0714 21.1046 16 20 16H11L6 21V16H4C2.89543 16 2 15.0714 2 13.9259V4.07407Z"
      fill={color}
    />
  </svg>
);
export { DialogFilled };
