import { IconProps } from './shared/IconProps';
const ChevronDown = ({
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
      d="M17.7071 9.29291C18.0976 9.68344 18.0976 10.3166 17.7071 10.7071L12.707 15.707C12.3164 16.0975 11.6833 16.0975 11.2928 15.707L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L11.9999 13.5857L16.2929 9.29288C16.6834 8.90236 17.3166 8.90238 17.7071 9.29291Z"
      fill={color}
    />
  </svg>
);
export { ChevronDown };
