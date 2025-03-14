import { IconProps } from './shared/IconProps';
const BellFilled = ({
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
      d="M14 4C14 4.11304 13.9906 4.22388 13.9726 4.33181C16.3173 5.14769 18 7.37734 18 10V15L20 17V18H4V17L6 15V10C6 7.37734 7.68271 5.14769 10.0274 4.33181C10.0094 4.22388 10 4.11304 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z"
      fill={color}
    />
    <path
      d="M12 21C10.6938 21 9.58254 20.1652 9.17071 19H14.8293C14.4175 20.1652 13.3062 21 12 21Z"
      fill={color}
    />
  </svg>
);
export { BellFilled };
