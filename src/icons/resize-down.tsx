import { IconProps } from './shared/IconProps';
const ResizeDown = ({
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
      d="M19 11L13 11V5L15.2929 7.29289L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L16.7071 8.70711L19 11Z"
      fill={color}
    />
    <path
      d="M5 13H11V19L8.70711 16.7071L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L7.29289 15.2929L5 13Z"
      fill={color}
    />
  </svg>
);
export { ResizeDown };
