import { IconProps } from './shared/IconProps';
const Wallet = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
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
      d="M18 4H4C2.89543 4 2 4.92859 2 6.07407V17.9259C2 19.0714 2.89543 20 4 20H18C19.1046 20 20 19.0714 20 17.9259V16C21.1046 16 22 15.1046 22 14V10C22 8.89543 21.1046 8 20 8V6.07407C20 4.92859 19.1046 4 18 4ZM16 14C16 15.1046 16.8954 16 18 16V17.4815C18 17.7678 17.7761 18 17.5 18H4.5C4.22386 18 4 17.7678 4 17.4815V6.5C4 6.21363 4.22386 5.98148 4.5 5.98148H17.5C17.7761 5.98148 18 6.21363 18 6.5V8C16.8954 8 16 8.89543 16 10V14ZM20 10H18V14H20V10Z"
      fill={color}
    />
  </svg>
);
export { Wallet };
