import { IconProps } from './shared/IconProps';
const ChevronUp = ({
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
      d="M17.7071 13.7071C18.0976 13.3166 18.0976 12.6834 17.7071 12.2929L12.707 7.293C12.3164 6.90249 11.6833 6.9025 11.2928 7.29302L6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071C6.68342 14.0976 7.31658 14.0976 7.70711 13.7071L11.9999 9.41432L16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071Z"
      fill={color}
    />
  </svg>
);
export { ChevronUp };
