import { IconProps } from './shared/IconProps';
const GraphBars = ({
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
      d="M8 5C7.44772 5 7 5.44772 7 6V19C7 19.5523 7.44772 20 8 20H9C9.55228 20 10 19.5523 10 19V6C10 5.44772 9.55228 5 9 5H8Z"
      fill={color}
    />
    <path
      d="M2 15C1.44772 15 1 15.4477 1 16V19C1 19.5523 1.44772 20 2 20H3C3.55228 20 4 19.5523 4 19V16C4 15.4477 3.55228 15 3 15H2Z"
      fill={color}
    />
    <path
      d="M19 14C19 13.4477 19.4477 13 20 13H21C21.5523 13 22 13.4477 22 14V19C22 19.5523 21.5523 20 21 20H20C19.4477 20 19 19.5523 19 19V14Z"
      fill={color}
    />
    <path
      d="M14 10C13.4477 10 13 10.4477 13 11V19C13 19.5523 13.4477 20 14 20H15C15.5523 20 16 19.5523 16 19V11C16 10.4477 15.5523 10 15 10H14Z"
      fill={color}
    />
  </svg>
);
export { GraphBars };
