import { IconProps } from './shared/IconProps';
const LetterOpen = ({
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
      d="M2 8.23605C2 7.47851 2.428 6.78598 3.10557 6.4472L11.1056 2.4472C11.6686 2.16567 12.3314 2.16567 12.8944 2.4472L20.8944 6.4472C21.572 6.78598 22 7.47851 22 8.23605V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V8.23605ZM20 9.64733V20H4V9.64733L11.5097 13.8716C11.8142 14.0428 12.1858 14.0428 12.4903 13.8716L20 9.64733ZM19.1686 7.82033L12 4.23605L4.83145 7.82033L12 11.8526L19.1686 7.82033Z"
      fill={color}
    />
  </svg>
);
export { LetterOpen };
