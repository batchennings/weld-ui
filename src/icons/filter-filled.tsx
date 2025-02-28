import { IconProps } from './shared/IconProps';
const FilterFilled = ({
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
      d="M9.99999 11.3028C9.99999 11.1054 9.94155 10.9123 9.83204 10.7481L5.03645 3.5547C4.59342 2.89015 5.06981 2 5.8685 2H18.1315C18.9302 2 19.4066 2.89015 18.9635 3.5547L14.1679 10.7481C14.0584 10.9123 14 11.1054 14 11.3028V19.382C14 19.7607 13.786 20.107 13.4472 20.2764L11.4472 21.2764C10.7823 21.6088 9.99999 21.1253 9.99999 20.382V11.3028Z"
      fill={color}
    />
  </svg>
);
export { FilterFilled };
