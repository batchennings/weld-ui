import { IconProps } from './shared/IconProps';
const ChevronRight = ({
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
      d="M9.29291 6.29288C9.68344 5.90236 10.3166 5.90238 10.7071 6.29291L15.707 11.293C16.0975 11.6836 16.0975 12.3167 15.707 12.7072L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5857 12.0001L9.29288 7.70709C8.90236 7.31656 8.90238 6.68339 9.29291 6.29288Z"
      fill={color}
    />
  </svg>
);
export { ChevronRight };
