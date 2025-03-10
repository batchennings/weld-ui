import { IconProps } from './shared/IconProps';
const List = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5C3.55228 5 4 4.55228 4 4C4 3.44772 3.55228 3 3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5Z"
      fill={color}
    />
    <path
      d="M7 3C6.44772 3 6 3.44772 6 4C6 4.55228 6.44772 5 7 5H15C15.5523 5 16 4.55228 16 4C16 3.44772 15.5523 3 15 3H7Z"
      fill={color}
    />
    <path
      d="M7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9H19C19.5523 9 20 8.55229 20 8C20 7.44772 19.5523 7 19 7H7Z"
      fill={color}
    />
    <path
      d="M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44771 13 6 12.5523 6 12Z"
      fill={color}
    />
    <path
      d="M7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H21C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15H7Z"
      fill={color}
    />
    <path
      d="M6 20C6 19.4477 6.44772 19 7 19H13C13.5523 19 14 19.4477 14 20C14 20.5523 13.5523 21 13 21H7C6.44772 21 6 20.5523 6 20Z"
      fill={color}
    />
    <path
      d="M4 8C4 8.55229 3.55228 9 3 9C2.44772 9 2 8.55229 2 8C2 7.44772 2.44772 7 3 7C3.55228 7 4 7.44772 4 8Z"
      fill={color}
    />
    <path
      d="M3 13C3.55228 13 4 12.5523 4 12C4 11.4477 3.55228 11 3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13Z"
      fill={color}
    />
    <path
      d="M4 16C4 16.5523 3.55228 17 3 17C2.44772 17 2 16.5523 2 16C2 15.4477 2.44772 15 3 15C3.55228 15 4 15.4477 4 16Z"
      fill={color}
    />
    <path
      d="M3 21C3.55228 21 4 20.5523 4 20C4 19.4477 3.55228 19 3 19C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21Z"
      fill={color}
    />
  </svg>
);
export { List };
