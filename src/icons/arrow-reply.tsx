import { IconProps } from './shared/IconProps';
const ArrowReply = ({
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
      d="M9 12V9H17.3333C17.7015 9 18 9.29848 18 9.66667V16.3333C18 16.7015 17.7015 17 17.3333 17H7C6.44772 17 6 17.4477 6 18C6 18.5523 6.44772 19 7 19H17.3333C18.8061 19 20 17.8061 20 16.3333V9.66667C20 8.19391 18.8061 7 17.3333 7H9V4L5 8L9 12Z"
      fill={color}
    />
  </svg>
);
export { ArrowReply };
