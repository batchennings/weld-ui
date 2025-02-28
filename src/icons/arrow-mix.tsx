import { IconProps } from './shared/IconProps';
const ArrowMix = ({
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
      d="M22 7L18 3V6H15.5858L5.58579 16H3V18H6.41421L16.4142 8H18V11L22 7Z"
      fill={color}
    />
    <path
      d="M9.70711 9.29289L6.41421 6H3V8H5.58579L8.29289 10.7071L9.70711 9.29289Z"
      fill={color}
    />
    <path
      d="M18 18V21L22 17L18 13V16H16.4142L13.7071 13.2929L12.2929 14.7071L15.5858 18H18Z"
      fill={color}
    />
    <circle cx="3" cy="7" r="1" fill={color} />
    <circle cx="3" cy="17" r="1" fill={color} />
  </svg>
);
export { ArrowMix };
