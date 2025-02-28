import { IconProps } from './shared/IconProps';
const Souscription = ({
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
      d="M12 14.5C12.9468 14.5 13.7143 13.7165 13.7143 12.75C13.7143 11.7835 12.9468 11 12 11C11.0532 11 10.2857 11.7835 10.2857 12.75C10.2857 13.7165 11.0532 14.5 12 14.5Z"
      fill={color}
    />
    <path
      d="M15 18C15 16.3086 13.6569 14.9375 12 14.9375C10.3431 14.9375 9 16.3086 9 18H15Z"
      fill={color}
    />
  </svg>
);
export { Souscription };
