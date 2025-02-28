import { IconProps } from './shared/IconProps';
const Phone = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.50934 11.4435C7.27539 14.5208 9.87805 17.0568 13.0071 18.7412L16 15L22 17V21C22 21 22 21 22 21L22 23C22 23 22.0001 23 22 23C10.7903 23 1.63186 14.2168 1.03137 3.15686L1 3H7L9 9L5.50934 11.4435ZM4.59261 9.62649C3.95387 8.17066 3.49242 6.61939 3.23555 5H5.55848L6.63085 8.2171L4.84173 9.46947L4.59261 9.62649ZM20 20.896V18.4415L16.6906 17.3384L15.2458 19.1443L14.9649 19.655C16.5494 20.2869 18.2389 20.7117 20 20.896Z"
      fill={color}
    />
  </svg>
);
export { Phone };
