import { IconProps } from './shared/IconProps';
const ResizeUpHorizontal = ({
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
      d="M23.3137 12L19.0711 7.75736L19.0711 11L14.8284 11C14.2761 11 13.8284 11.4477 13.8284 12C13.8284 12.5523 14.2761 13 14.8284 13L19.0711 13L19.0711 16.2426L23.3137 12Z"
      fill={color}
    />
    <path
      d="M0.686292 12L4.92893 16.2426L4.92893 13L9.17157 13C9.72386 13 10.1716 12.5523 10.1716 12C10.1716 11.4477 9.72386 11 9.17157 11H4.92893V7.75736L0.686292 12Z"
      fill={color}
    />
  </svg>
);
export { ResizeUpHorizontal };
