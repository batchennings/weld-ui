import { IconProps } from './shared/IconProps';
const Lock = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C14.7614 0 17 2.23858 17 5V8H17.9259C19.0714 8 20 8.89543 20 10L20 20C20 21.1046 19.0714 22 17.9259 22H6.07407C4.92859 22 4 21.1046 4 20V10C4 8.89543 4.9286 8 6.07407 8L7 8V5C7 2.23858 9.23858 0 12 0ZM9 8H15V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V8ZM18.0185 10.5C18.0185 10.2239 17.7864 10 17.5 10L6.51852 10C6.23215 10 6 10.2239 6 10.5L6 19.5C6 19.7761 6.23215 20 6.51852 20H17.5C17.7864 20 18.0185 19.7761 18.0185 19.5L18.0185 10.5Z"
      fill={color}
    />
  </svg>
);
export { Lock };
