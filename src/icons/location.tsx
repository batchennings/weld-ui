import { IconProps } from './shared/IconProps';
const Location = ({
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
      d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 9C19 10.5771 18.25 12 17.5984 13.2028L12 23L6.40163 13.2028C5.75 12.0324 5 10.5771 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9ZM17 9C17 9.99218 16.5264 10.9816 15.8506 12.2304L12 18.9689L8.14371 12.2204C7.48331 11.0333 7 9.99661 7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9Z"
      fill={color}
    />
  </svg>
);
export { Location };
