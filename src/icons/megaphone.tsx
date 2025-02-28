import { IconProps } from './shared/IconProps';
const Megaphone = ({
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
      d="M22 20V3L8 7H4C2.89543 7 2 7.89543 2 9V13C2 14.1046 2.89543 15 4 15H6.56228L5.75527 17.3537C5.39711 18.3983 5.95336 19.5355 6.99774 19.894L11.7282 21.5159C12.7723 21.8739 13.9088 21.3184 14.2679 20.2751L14.2688 20.2727L15.1955 17.5699L22 20ZM8.34643 13H7.24802H4V9H8.28011L20 5.65146V17.162L9.25149 13.3232L8.34643 13ZM7.64716 18.0024L12.3769 19.624L13.3119 16.8971L8.60276 15.2153L7.64716 18.0024Z"
      fill={color}
    />
  </svg>
);
export { Megaphone };
