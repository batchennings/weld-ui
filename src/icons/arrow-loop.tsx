import { IconProps } from './shared/IconProps';
const ArrowLoop = ({
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
      d="M5.01361 0.835602L3.84921 7.822L10.8356 8.98639L11.1644 7.01361L7.47861 6.39931C8.76486 5.51655 10.3221 5 12 5C16.4183 5 20 8.58172 20 13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13H2C2 18.5228 6.47715 23 12 23C17.5228 23 22 18.5228 22 13C22 7.47715 17.5228 3 12 3C9.92255 3 7.99306 3.63349 6.39416 4.71783L6.98639 1.1644L5.01361 0.835602Z"
      fill={color}
    />
  </svg>
);
export { ArrowLoop };
