import { IconProps } from './shared/IconProps';
const SpecialCheckboxHalf = ({
  size = 20,
  color = 'currentColor',
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 20 20"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 10C4 9.44772 4.44772 9 5 9L15 9C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11L5 11C4.44772 11 4 10.5523 4 10Z"
      fill={color}
    />
  </svg>
);
export { SpecialCheckboxHalf };
