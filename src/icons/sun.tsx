import { IconProps } from './shared/IconProps';
const Sun = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 1H13V4H11V1Z" fill={color} />
    <path
      d="M5.63605 7.05025L7.05026 5.63604L4.92894 3.51472L3.51473 4.92893L5.63605 7.05025Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
      fill={color}
    />
    <path d="M13 20V23H11V20H13Z" fill={color} />
    <path
      d="M7.05026 18.364L5.63605 16.9497L3.51473 19.0711L4.92894 20.4853L7.05026 18.364Z"
      fill={color}
    />
    <path d="M4 11V13H1L1 11H4Z" fill={color} />
    <path
      d="M20.4853 4.92893L19.0711 3.51472L16.9498 5.63604L18.364 7.05025L20.4853 4.92893Z"
      fill={color}
    />
    <path d="M23 13H20V11H23V13Z" fill={color} />
    <path
      d="M19.0711 20.4853L20.4853 19.0711L18.364 16.9497L16.9498 18.364L19.0711 20.4853Z"
      fill={color}
    />
  </svg>
);
export { Sun };
