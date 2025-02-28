import { IconProps } from './shared/IconProps';
const Equal = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 8H6C5.44772 8 5 8.44771 5 9C5 9.55229 5.44772 10 6 10H18C18.5523 10 19 9.55229 19 9C19 8.44771 18.5523 8 18 8Z"
      fill={color}
    />
    <path
      d="M18 14H6C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16H18C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14Z"
      fill={color}
    />
  </svg>
);
export { Equal };
