import { IconProps } from './shared/IconProps';
const PeopleWoman = ({
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
      d="M15 3.5C15 4.88071 13.8807 6 12.5 6C11.1193 6 10 4.88071 10 3.5C10 2.11929 11.1193 1 12.5 1C13.8807 1 15 2.11929 15 3.5Z"
      fill={color}
    />
    <path
      d="M8.72727 14L8 18H10.8333L11 22H14V18H17L16.2727 14H18L15 7H10L7 14H8.72727Z"
      fill={color}
    />
  </svg>
);
export { PeopleWoman };
