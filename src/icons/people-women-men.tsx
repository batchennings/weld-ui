import { IconProps } from './shared/IconProps';
const PeopleWomenMen = ({
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
      d="M22 3.5C22 4.88071 20.8807 6 19.5 6C18.1193 6 17 4.88071 17 3.5C17 2.11929 18.1193 1 19.5 1C20.8807 1 22 2.11929 22 3.5Z"
      fill={color}
    />
    <path
      d="M17 7L15 14H16.6667L17.8333 22H21.1667L22.3333 14H24L22 7H17Z"
      fill={color}
    />
    <path
      d="M5.5 6C6.88071 6 8 4.88071 8 3.5C8 2.11929 6.88071 1 5.5 1C4.11929 1 3 2.11929 3 3.5C3 4.88071 4.11929 6 5.5 6Z"
      fill={color}
    />
    <path
      d="M1 18L1.72727 14H0L3 7H8L11 14H9.27273L10 18H7V22H4L3.83333 18H1Z"
      fill={color}
    />
  </svg>
);
export { PeopleWomenMen };
