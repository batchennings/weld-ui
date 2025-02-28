import { IconProps } from './shared/IconProps';
const Building = ({
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
    <path d="M15 16H17V18H15V16Z" fill={color} />
    <path d="M17 12H15V14H17V12Z" fill={color} />
    <path d="M7 6H9V8H7V6Z" fill={color} />
    <path d="M9 10H7V12H9V10Z" fill={color} />
    <path d="M7 14H9V16H7V14Z" fill={color} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 4.07407C3 2.92859 3.89543 2 5 2H11C12.1046 2 13 2.92859 13 4.07407V8H19C20.1046 8 21 8.92859 21 10.0741V19.9259C21 19.9507 20.9996 19.9754 20.9987 20H24V22H0V20H3.00125C3.00042 19.9754 3 19.9507 3 19.9259V4.07407ZM13 19.9259V9.98148H19V19.9259H13ZM11 3.98148V19.9259H9V18H7V19.9259H5V3.98148H11Z"
      fill={color}
    />
  </svg>
);
export { Building };
