import { IconProps } from './shared/IconProps';
const FileDuplicateFilled = ({
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
      d="M18 2C18 0.895431 17.1046 0 16 0H7.82843C7.298 0 6.78929 0.210713 6.41421 0.585786L2.58579 4.41421C2.21071 4.78929 2 5.29799 2 5.82843V16C2 17.1046 2.89543 18 4 18H7V22C7 23.1046 7.89543 24 9 24H20C21.1046 24 22 23.1046 22 22V8C22 6.89543 21.1046 6 20 6H18V2ZM16 6V2H8V5C8 5.55228 7.55228 6 7 6H4V16H7V11.8284C7 11.298 7.21071 10.7893 7.58579 10.4142L11.4142 6.58579C11.7893 6.21071 12.298 6 12.8284 6H16ZM9 12L13 8V11C13 11.5523 12.5523 12 12 12H9Z"
      fill={color}
    />
  </svg>
);
export { FileDuplicateFilled };
