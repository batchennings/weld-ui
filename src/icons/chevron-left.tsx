import { IconProps } from './shared/IconProps';
const ChevronLeft = ({
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
      d="M14.7071 6.29288C14.3166 5.90236 13.6834 5.90238 13.2929 6.29291L8.293 11.293C7.90249 11.6836 7.9025 12.3167 8.29302 12.7072L13.2929 17.7071C13.6834 18.0976 14.3166 18.0976 14.7071 17.7071C15.0976 17.3166 15.0976 16.6834 14.7071 16.2929L10.4143 12.0001L14.7071 7.70709C15.0976 7.31656 15.0976 6.68339 14.7071 6.29288Z"
      fill={color}
    />
  </svg>
);
export { ChevronLeft };
