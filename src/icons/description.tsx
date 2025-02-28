import { IconProps } from './shared/IconProps';
const Description = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 2C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V7.82843C4 7.29799 4.21071 6.78929 4.58579 6.41421L8.41421 2.58579C8.78929 2.21071 9.298 2 9.82843 2H18ZM10 4V7C10 7.55228 9.55228 8 9 8H6V20H18V4H10Z"
      fill={color}
    />
    <path
      d="M8 13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H9C8.44772 14 8 13.5523 8 13Z"
      fill={color}
    />
    <path
      d="M8 17C8 16.4477 8.44772 16 9 16H13C13.5523 16 14 16.4477 14 17C14 17.5523 13.5523 18 13 18H9C8.44772 18 8 17.5523 8 17Z"
      fill={color}
    />
  </svg>
);
export { Description };
