import { IconProps } from './shared/IconProps';
const UserFilled = ({
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
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM17.7871 17.5235C16.3304 19.0494 14.2762 20 12 20C9.72379 20 7.66962 19.0494 6.21283 17.5235C6.93276 16.1189 8.79098 14 12 14C15.209 14 17.0672 16.1189 17.7871 17.5235Z"
      fill={color}
    />
  </svg>
);
export { UserFilled };
