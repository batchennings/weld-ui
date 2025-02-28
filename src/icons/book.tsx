import { IconProps } from './shared/IconProps';
const Book = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 6H12V10H16V6Z" fill={color} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4.07407C4 4.04928 4.00042 4.02458 4.00125 4H4V2H18C19.1046 2 20 2.92859 20 4.07407V19.9259C20 21.0714 19.1046 22 18 22H4V20H4.00125C4.00042 19.9754 4 19.9507 4 19.9259V4.07407ZM6 3.98148H8V19.9259H6V3.98148ZM18 3.98148V19.9259H10V3.98148H18Z"
      fill={color}
    />
  </svg>
);
export { Book };
