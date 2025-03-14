import { IconProps } from './shared/IconProps';
const People = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 6C13.8807 6 15 4.88071 15 3.5C15 2.11929 13.8807 1 12.5 1C11.1193 1 10 2.11929 10 3.5C10 4.88071 11.1193 6 12.5 6Z"
      fill={color}
    />
    <path
      d="M8 14L10 7H15L17 14H15.3333L14.1667 22H10.8333L9.66667 14H8Z"
      fill={color}
    />
  </svg>
);
export { People };
