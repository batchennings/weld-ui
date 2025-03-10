import { IconProps } from './shared/IconProps';
const NoteFilled = ({
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
      d="M8 0C7.44771 0 7 0.447715 7 1V3H6.07407C4.9286 3 4 3.89543 4 5V19C4 20.1046 4.92859 21 6.07407 21H17.9259C19.0714 21 20 20.1046 20 19V5C20 3.89543 19.0714 3 17.9259 3H17V1C17 0.447715 16.5523 0 16 0C15.4477 0 15 0.447715 15 1V3H13V1C13 0.447715 12.5523 0 12 0C11.4477 0 11 0.447715 11 1V3H9V1C9 0.447715 8.55228 0 8 0ZM16 7V8H8V7H16ZM14 10V11H8V10H14ZM8 13H16V14H8V13ZM14 16H8V17H14V16Z"
      fill={color}
    />
  </svg>
);
export { NoteFilled };
