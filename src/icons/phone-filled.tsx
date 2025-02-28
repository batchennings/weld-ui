import { IconProps } from './shared/IconProps';
const PhoneFilled = ({
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
      d="M5.50934 11.4435C7.27539 14.5208 9.87805 17.0568 13.0071 18.7412L16 15L22 17V21L22 23C10.7903 23 1.63186 14.2168 1.03137 3.15686L1 3H7L9 9L5.50934 11.4435Z"
      fill={color}
    />
  </svg>
);
export { PhoneFilled };
