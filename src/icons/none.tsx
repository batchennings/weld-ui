import { IconProps } from './shared/IconProps';
const None = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
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
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C10.1513 20 8.44905 19.3729 7.09436 18.3199L18.3199 7.09436C19.3729 8.44905 20 10.1513 20 12ZM5.68015 16.9057L16.9057 5.68015C15.551 4.62708 13.8487 4 12 4C7.58172 4 4 7.58172 4 12C4 13.8487 4.62708 15.551 5.68015 16.9057Z"
      fill={color}
    />
  </svg>
);
export { None };
