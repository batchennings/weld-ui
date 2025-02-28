import { IconProps } from './shared/IconProps';
const UserHalfFilled = ({
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
      d="M12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z"
      fill={color}
    />
    <path
      d="M19 21C19 17.134 15.866 14 12 14C8.13401 14 5 17.134 5 21H19Z"
      fill={color}
    />
  </svg>
);
export { UserHalfFilled };
