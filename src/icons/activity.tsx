import { IconProps } from './shared/IconProps';
const Activity = ({
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
    <path d="M17 2L15 2L15 22L17 22L17 2Z" fill={color} />
    <path d="M13 6L11 6L11 18L13 18L13 6Z" fill={color} />
    <path d="M9 2L7 2L7 22L9 22L9 2Z" fill={color} />
    <path d="M21 8L19 8L19 16L21 16L21 8Z" fill={color} />
    <path d="M5 8L3 8L3 16L5 16L5 8Z" fill={color} />
  </svg>
);
export { Activity };
