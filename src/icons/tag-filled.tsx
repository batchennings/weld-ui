import { IconProps } from './shared/IconProps';
const TagFilled = ({
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
      d="M0 9.07407C0 7.92859 0.895431 7 2 7H18C18.9094 7 19.677 7.728 20.1989 8.22297C20.3109 8.32922 20.4116 8.42473 20.5 8.5C21 8.92593 24 12 24 12L20.5 15.5C20.4624 15.5376 20.4225 15.5781 20.3804 15.6208C19.864 16.1449 19.0214 17 18 17H2C0.89543 17 0 16.0714 0 14.9259V9.07407ZM18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13Z"
      fill={color}
    />
  </svg>
);
export { TagFilled };
