import { IconProps } from './shared/IconProps';
const Image = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
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
      d="M4 4H20C21.1046 4 22 4.92859 22 6.07407V17.9259C22 19.0714 21.1046 20 20 20H4C2.89543 20 2 19.0714 2 17.9259V6.07407C2 4.92859 2.89543 4 4 4ZM4 17.4815C4 17.7678 4.22386 18 4.5 18H19.5C19.7761 18 20 17.7678 20 17.4815V6.5C20 6.21363 19.7761 5.98148 19.5 5.98148H4.5C4.22386 5.98148 4 6.21363 4 6.5V17.4815Z"
      fill={color}
    />
    <path
      d="M18 16H6V14C6.49977 13.8657 7.14473 13.8131 8.13223 13.9466C11.3266 14.3754 12.1255 14.1814 13.1235 13.5398C13.8831 13.049 15.9624 11.6805 18 12V16Z"
      fill={color}
    />
  </svg>
);
export { Image };
