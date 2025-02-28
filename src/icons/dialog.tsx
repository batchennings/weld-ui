import { IconProps } from './shared/IconProps';
const Dialog = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
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
      d="M4 2C2.89543 2 2 2.92859 2 4.07407V13.9259C2 15.0714 2.89543 16 4 16H6V21L11 16H20C21.1046 16 22 15.0714 22 13.9259V4.07407C22 2.92859 21.1046 2 20 2H4ZM20 3.98148V13.9259H4V3.98148H20Z"
      fill={color}
    />
  </svg>
);
export { Dialog };
