import { IconProps } from './shared/IconProps';
const Filter = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
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
      d="M7.73702 4L11.4961 9.63868C11.8247 10.1315 12 10.7105 12 11.3028C12 10.7105 12.1753 10.1315 12.5038 9.63868L16.263 4H7.73702ZM9.83204 10.7481C9.94155 10.9123 9.99999 11.1054 9.99999 11.3028V20.382C9.99999 21.1253 10.7823 21.6088 11.4472 21.2764L13.4472 20.2764C13.786 20.107 14 19.7607 14 19.382V11.3028C14 11.1054 14.0584 10.9123 14.1679 10.7481L18.9635 3.5547C19.4066 2.89015 18.9302 2 18.1315 2H5.8685C5.06981 2 4.59342 2.89015 5.03645 3.5547L9.83204 10.7481Z"
      fill={color}
    />
  </svg>
);
export { Filter };
