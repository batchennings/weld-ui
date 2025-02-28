import { IconProps } from './shared/IconProps';
const Flash = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 13L9 0H18L12.9677 8.97391H18L7 24L9 13H5Z" fill={color} />
  </svg>
);
export { Flash };
