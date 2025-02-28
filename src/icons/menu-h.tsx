import { IconProps } from './shared/IconProps';
const MenuH = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 3C7 2.44772 6.55228 2 6 2C5.44772 2 5 2.44772 5 3V21C5 21.5523 5.44771 22 6 22C6.55228 22 7 21.5523 7 21L7 3Z"
      fill={color}
    />
    <path
      d="M12 2C12.5523 2 13 2.44772 13 3L13 21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21L11 3C11 2.44772 11.4477 2 12 2Z"
      fill={color}
    />
    <path
      d="M18 2C18.5523 2 19 2.44772 19 3L19 21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21L17 3C17 2.44772 17.4477 2 18 2Z"
      fill={color}
    />
  </svg>
);
export { MenuH };
