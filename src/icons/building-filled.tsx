import { IconProps } from './shared/IconProps';
const BuildingFilled = ({
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
      d="M3 4.07407C3 2.92859 3.89543 2 5 2H11C12.1046 2 13 2.92859 13 4.07407V8H19C20.1046 8 21 8.92859 21 10.0741V19.9259C21 19.9507 20.9996 19.9754 20.9987 20H24V22H0V20H3.00125C3.00042 19.9754 3 19.9507 3 19.9259V4.07407ZM9 6H7V8H9V6ZM9 10H7V12H9V10ZM9 14H7V16H9V14ZM17 12H15V14H17V12ZM17 16H15V18H17V16ZM9 18H7V20H9V18Z"
      fill={color}
    />
  </svg>
);
export { BuildingFilled };
