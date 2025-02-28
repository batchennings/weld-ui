import { IconProps } from './shared/IconProps';
const ResizeUp = ({
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
      d="M20 4H14L16.2929 6.29289L13.2929 9.29289C12.9024 9.68342 12.9024 10.3166 13.2929 10.7071C13.6834 11.0976 14.3166 11.0976 14.7071 10.7071L17.7071 7.70711L20 10V4Z"
      fill={color}
    />
    <path
      d="M4 20L10 20L7.70711 17.7071L10.7071 14.7071C11.0976 14.3166 11.0976 13.6834 10.7071 13.2929C10.3166 12.9024 9.68342 12.9024 9.29289 13.2929L6.29289 16.2929L4 14V20Z"
      fill={color}
    />
  </svg>
);
export { ResizeUp };
