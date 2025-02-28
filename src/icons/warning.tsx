import { IconProps } from './shared/IconProps';
const Warning = ({
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
      d="M11 13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13L13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9L11 13Z"
      fill={color}
    />
    <path
      d="M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.3133 19.0159C24.0668 20.3491 23.1036 22 21.5721 22H2.42773C0.89625 22 -0.0669721 20.3491 0.686604 19.0159L10.2588 2.08046C11.0244 0.725948 12.9755 0.725946 13.7411 2.08046L23.3133 19.0159ZM12 3L2.5 20H21.5L12 3Z"
      fill={color}
    />
  </svg>
);
export { Warning };
