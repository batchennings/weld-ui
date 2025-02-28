import { IconProps } from './shared/IconProps';
const Archive = ({
  size = 20,
  color = 'currentColor',
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 12C9.44772 12 9 12.4477 9 13C9 13.5523 9.44772 14 10 14H14C14.5523 14 15 13.5523 15 13C15 12.4477 14.5523 12 14 12H10Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM19 4H5C4.44771 4 4 4.44772 4 5V6H20V5C20 4.44771 19.5523 4 19 4ZM4 19V8H20V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19Z"
      fill={color}
    />
  </svg>
);
export { Archive };
