import { IconProps } from './shared/IconProps';
const ImageAdd = ({
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
      d="M16 4H4C2.89543 4 2 4.9286 2 6.07408V17.9259C2 19.0714 2.89543 20 4 20H20C21.1046 20 22 19.0714 22 17.9259V10H20V17.4815C20 17.7679 19.7761 18 19.5 18H4.5C4.22386 18 4 17.7679 4 17.4815V6.5C4 6.21363 4.22386 5.98148 4.5 5.98148H16V4Z"
      fill={color}
    />
    <path
      d="M18 16H6V14C6.49977 13.8657 7.14473 13.8131 8.13223 13.9466C11.3266 14.3754 12.1255 14.1814 13.1235 13.5398C13.8831 13.049 15.9624 11.6805 18 12V16Z"
      fill={color}
    />
    <path d="M18 4H24V6H18V4Z" fill={color} />
    <path d="M22 1.99998V7.99998H20V1.99998L22 1.99998Z" fill={color} />
  </svg>
);
export { ImageAdd };
