import { IconProps } from './shared/IconProps';
const BookFilled = ({
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
      d="M8 2H4V4H4.00125C4.00042 4.02458 4 4.04928 4 4.07407V19.9259C4 19.9507 4.00042 19.9754 4.00125 20H4V22H8V2ZM10 22H18C19.1046 22 20 21.0714 20 19.9259V4.07407C20 2.92859 19.1046 2 18 2H10V22ZM13 6H17V10H13V6Z"
      fill={color}
    />
  </svg>
);
export { BookFilled };
