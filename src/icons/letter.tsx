import { IconProps } from './shared/IconProps';
const Letter = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
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
      d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM18.8492 6H5.15084L12 9.85265L18.8492 6ZM4 7.64735V18H20V7.64735L12.4903 11.8716C12.1858 12.0428 11.8142 12.0428 11.5097 11.8716L4 7.64735Z"
      fill={color}
    />
  </svg>
);
export { Letter };
