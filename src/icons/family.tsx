import { IconProps } from './shared/IconProps';
const Family = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 6C7 7.10457 6.10457 8 5 8C3.89543 8 3 7.10457 3 6C3 4.89543 3.89543 4 5 4C6.10457 4 7 4.89543 7 6Z"
      fill={color}
    />
    <path
      d="M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
      fill={color}
    />
    <path
      d="M3.5 9L1.5 14H3.16667L4.33333 21H5.66667L6.83333 14H8.5L6.5 9H3.5Z"
      fill={color}
    />
    <path
      d="M15 16H13.7778L12.6667 21H11.3333L10.2222 16H9L11 12H13L15 16Z"
      fill={color}
    />
    <path
      d="M19 8C20.1046 8 21 7.10457 21 6C21 4.89543 20.1046 4 19 4C17.8954 4 17 4.89543 17 6C17 7.10457 17.8954 8 19 8Z"
      fill={color}
    />
    <path
      d="M15.5 17L18 9H20L22.5 17H21L19.6667 21H18.3333L17 17H15.5Z"
      fill={color}
    />
  </svg>
);
export { Family };
