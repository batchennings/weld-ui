import { IconProps } from './shared/IconProps';
const ResizeDownHorizontal = ({
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
      d="M17.6569 16.2426L13.4142 12L17.6569 7.75736L17.6569 11L21.8995 11C22.4518 11 22.8995 11.4477 22.8995 12C22.8995 12.5523 22.4518 13 21.8995 13L17.6569 13V16.2426Z"
      fill={color}
    />
    <path
      d="M6.34315 7.75736L10.5858 12L6.34315 16.2426V13L2.1005 13C1.54822 13 1.10051 12.5523 1.1005 12C1.10051 11.4477 1.54822 11 2.1005 11L6.34315 11V7.75736Z"
      fill={color}
    />
  </svg>
);
export { ResizeDownHorizontal };
