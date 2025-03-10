import { IconProps } from './shared/IconProps';
const ArrowsRotate = ({
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
      d="M19.9711 16.1827C18.4651 19.0468 15.4606 21 12 21C7.71683 21 4.13248 18.008 3.22302 14H0L4 10L8 14H5.28988C6.15043 16.8915 8.82898 19 12 19C14.7324 19 17.0992 17.4344 18.2522 15.1513L19.9711 16.1827Z"
      fill={color}
    />
    <path
      d="M16 10H18.7101C17.8496 7.10851 15.171 5 12 5C9.51994 5 7.34112 6.28974 6.09766 8.23509L4.33833 7.27545C5.92389 4.70966 8.76229 3 12 3C16.2832 3 19.8675 5.99202 20.777 10H24L20 14L16 10Z"
      fill={color}
    />
  </svg>
);
export { ArrowsRotate };
