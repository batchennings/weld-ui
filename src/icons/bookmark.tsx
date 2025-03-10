import { IconProps } from './shared/IconProps';
const Bookmark = ({
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
      d="M20 4C20 2.89543 19.0714 2 17.9259 2H6.07407C4.9286 2 4 2.89543 4 4V22L12 18L20 22L20 4ZM6 5C6 4.44772 6.44772 4 7 4H17C17.5523 4 18 4.44772 18 5V19L12 16L6 19V5Z"
      fill={color}
    />
  </svg>
);
export { Bookmark };
