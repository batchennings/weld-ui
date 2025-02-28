import { IconProps } from './shared/IconProps';
const Draft = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
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
      d="M4 20C4 21.1046 4.89543 22 6 22L12.1716 22C12.702 22 13.2107 21.7893 13.5858 21.4142L19.4142 15.5858C19.7893 15.2107 20 14.702 20 14.1716L20 6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V20ZM12 15L12 20L6 20L6 6L18 6V14L13 14C12.4477 14 12 14.4477 12 15ZM14 16V18.5L16.5 16H14Z"
      fill={color}
    />
  </svg>
);
export { Draft };
