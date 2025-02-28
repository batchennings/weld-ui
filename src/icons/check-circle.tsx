import { IconProps } from './shared/IconProps';
const CheckCircle = ({
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
      d="M17.7071 9.70711C18.0976 9.31658 18.0976 8.68342 17.7071 8.29289C17.3166 7.90237 16.6834 7.90237 16.2929 8.29289L10 14.5858L7.70711 12.2929C7.31658 11.9024 6.68342 11.9024 6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071L9.29289 16.7071C9.68342 17.0976 10.3166 17.0976 10.7071 16.7071L17.7071 9.70711Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
      fill={color}
    />
  </svg>
);
export { CheckCircle };
