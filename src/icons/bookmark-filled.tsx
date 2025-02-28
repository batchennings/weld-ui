import { IconProps } from './shared/IconProps';
const BookmarkFilled = ({
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
      d="M20 4C20 2.89543 19.0714 2 17.9259 2L6.07407 2C4.9286 2 4 2.89543 4 4L4 22L12 18L20 22L20 4Z"
      fill={color}
    />
  </svg>
);
export { BookmarkFilled };
