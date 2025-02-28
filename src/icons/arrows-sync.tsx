import { IconProps } from './shared/IconProps';
const ArrowsSync = ({
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
      d="M6.66667 6H17.3333C17.7015 6 18 6.29848 18 6.66667V9H15L19 13L23 9H20V6.66667C20 5.19391 18.8061 4 17.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V8C4 8.55229 4.44772 9 5 9C5.55228 9 6 8.55229 6 8V6.66667C6 6.29848 6.29848 6 6.66667 6Z"
      fill={color}
    />
    <path
      d="M4 15H1L5 11L9 15H6V17.3333C6 17.7015 6.29848 18 6.66667 18H17.3333C17.7015 18 18 17.7015 18 17.3333V16C18 15.4477 18.4477 15 19 15C19.5523 15 20 15.4477 20 16V17.3333C20 18.8061 18.8061 20 17.3333 20H6.66667C5.19391 20 4 18.8061 4 17.3333V15Z"
      fill={color}
    />
  </svg>
);
export { ArrowsSync };
