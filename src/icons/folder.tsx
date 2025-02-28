import { IconProps } from './shared/IconProps';
const Folder = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 10V6H4L4 18H20V10H14ZM20 8C21.1046 8 22 8.89543 22 10V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4H14C15.1046 4 16 4.89543 16 6V8H20Z"
      fill={color}
    />
  </svg>
);
export { Folder };
