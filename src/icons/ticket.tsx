import { IconProps } from './shared/IconProps';
const Ticket = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 7V6H8V7H16Z" fill={color} />
    <path d="M16 12V13H8V12H16Z" fill={color} />
    <path d="M14 9V10H8V9H14Z" fill={color} />
    <path d="M14 15V16H8V15H14Z" fill={color} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 23V1H4V23L6 21L8 23L10 21L12 23L14 21L16 23L18 21L20 23ZM18 3V18.1716L16 20.1716L14 18.1716L12 20.1716L10 18.1716L8 20.1716L6 18.1716V3H18Z"
      fill={color}
    />
  </svg>
);
export { Ticket };
