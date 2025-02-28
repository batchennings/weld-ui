import { IconProps } from './shared/IconProps';
const Pen = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 5L6 16L5 18.9999L8 18L19 7L17 5Z" fill={color} />
  </svg>
);
export { Pen };
