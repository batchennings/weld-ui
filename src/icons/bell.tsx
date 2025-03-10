import { IconProps } from './shared/IconProps';
const Bell = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
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
      d="M13.9726 4.33181C13.9906 4.22388 14 4.11304 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 4.11304 10.0094 4.22388 10.0274 4.33181C7.68271 5.14769 6 7.37734 6 10V15L4 17V18H20V17L18 15V10C18 7.37734 16.3173 5.14769 13.9726 4.33181ZM8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V16H8V10Z"
      fill={color}
    />
    <path
      d="M9.17071 19C9.58254 20.1652 10.6938 21 12 21C13.3062 21 14.4175 20.1652 14.8293 19H9.17071Z"
      fill={color}
    />
  </svg>
);
export { Bell };
