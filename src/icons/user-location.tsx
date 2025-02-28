import { IconProps } from './shared/IconProps';
const UserLocation = ({
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
      d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V15C22 16.6569 20.6569 18 19 18H16L12 22L8 18H5C3.34315 18 2 16.6569 2 15V5ZM14.2857 8.25C14.2857 9.49264 13.2624 10.5 12 10.5C10.7376 10.5 9.71429 9.49264 9.71429 8.25C9.71429 7.00736 10.7376 6 12 6C13.2624 6 14.2857 7.00736 14.2857 8.25ZM12 11.4C14.2091 11.4 16 12.8254 16 15H8C8 12.8254 9.79086 11.4 12 11.4Z"
      fill={color}
    />
  </svg>
);
export { UserLocation };
