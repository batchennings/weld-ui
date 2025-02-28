import { IconProps } from './shared/IconProps';
const LocationFilled = ({
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
      d="M19 9C19 10.5771 18.25 12 17.5984 13.2028L12 23L6.40163 13.2028C5.75 12.0324 5 10.5771 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
      fill={color}
    />
  </svg>
);
export { LocationFilled };
