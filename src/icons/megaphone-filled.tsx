import { IconProps } from './shared/IconProps';
const MegaphoneFilled = ({
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
      d="M8 7L22 3V20L15.1955 17.5698L14.2688 20.2727C13.9105 21.3176 12.7731 21.8742 11.7282 21.5159L6.99849 19.8943C5.95363 19.536 5.39702 18.3986 5.75527 17.3537L6.56228 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7H8ZM8.60276 15.2153L7.64716 18.0024L12.3769 19.624L13.3119 16.8971L8.60276 15.2153Z"
      fill={color}
    />
  </svg>
);
export { MegaphoneFilled };
