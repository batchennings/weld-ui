import { IconProps } from './shared/IconProps';
const CautionFilled = ({
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
      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16ZM12 13C11.4477 13 11 12.5523 11 12L11 8C11 7.44771 11.4477 7 12 7C12.5523 7 13 7.44771 13 8L13 12C13 12.5523 12.5523 13 12 13Z"
      fill={color}
    />
  </svg>
);
export { CautionFilled };
