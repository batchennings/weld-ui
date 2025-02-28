import { IconProps } from './shared/IconProps';
const Trash = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 5C9 3.89551 9.89551 3 11 3H13C14.1045 3 15 3.89551 15 5H18C18.5522 5 19 5.44775 19 6C19 6.55225 18.5522 7 18 7H6C5.44775 7 5 6.55225 5 6C5 5.44775 5.44775 5 6 5H9Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 8H18V19C18 20.6569 16.6569 22 15 22H9C7.34315 22 6 20.6569 6 19V8ZM8 10H16V19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19V10Z"
      fill={color}
    />
  </svg>
);
export { Trash };
