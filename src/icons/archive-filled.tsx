import { IconProps } from './shared/IconProps';
const ArchiveFilled = ({
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
      d="M4.66667 2C3.19391 2 2 3.19391 2 4.66667V6H22V4.66667C22 3.19391 20.8061 2 19.3333 2H4.66667ZM22 8H2V19.3333C2 20.8061 3.19391 22 4.66667 22H19.3333C20.8061 22 22 20.8061 22 19.3333V8ZM9 13C9 12.4477 9.44772 12 10 12H14C14.5523 12 15 12.4477 15 13C15 13.5523 14.5523 14 14 14H10C9.44772 14 9 13.5523 9 13Z"
      fill={color}
    />
  </svg>
);
export { ArchiveFilled };
