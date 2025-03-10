import { IconProps } from './shared/IconProps';
const CalendarIcon = ({
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
      d="M18.5 3.98148H5.5C5.22386 3.98148 5 4.21363 5 4.5V19.4815C5 19.7678 5.22386 20 5.5 20H18.5C18.7761 20 19 19.7678 19 19.4815V4.5C19 4.21363 18.7761 3.98148 18.5 3.98148ZM5 2C3.89543 2 3 2.92859 3 4.07407V19.9259C3 21.0714 3.89543 22 5 22H19C20.1046 22 21 21.0714 21 19.9259V4.07407C21 2.92859 20.1046 2 19 2H5Z"
      fill={color}
    />
    <path d="M4 3H20V6H4V3Z" fill={color} />
    <path d="M7 8H9V10H7V8Z" fill={color} />
    <path d="M11 8H13V10H11V8Z" fill={color} />
    <path d="M7 12H9V14H7V12Z" fill={color} />
    <path d="M15 8H17V10H15V8Z" fill={color} />
    <path d="M11 12H13V14H11V12Z" fill={color} />
    <path d="M15 12H17V14H15V12Z" fill={color} />
    <path d="M7 16H9V18H7V16Z" fill={color} />
    <path d="M11 16H13V18H11V16Z" fill={color} />
  </svg>
);
export { CalendarIcon };
