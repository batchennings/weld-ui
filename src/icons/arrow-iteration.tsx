import { IconProps } from './shared/IconProps';
const ArrowIteration = ({
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
      d="M16.2916 17C17.9525 15.5341 19 13.3894 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 13.3894 4.04751 15.5341 5.70836 17C7.11862 18.2447 8.97111 19 11 19H20.5858L19.2929 20.2929L20.7071 21.7071L24.4142 18L20.7071 14.2929L19.2929 15.7071L20.5858 17H16.2916ZM17 11C17 14.3137 14.3137 17 11 17C7.68629 17 5 14.3137 5 11C5 7.68629 7.68629 5 11 5C14.3137 5 17 7.68629 17 11Z"
      fill={color}
    />
    <path
      d="M3.99927 17H1V19H5.99903C5.24185 18.4311 4.56806 17.7572 3.99927 17Z"
      fill={color}
    />
  </svg>
);
export { ArrowIteration };
