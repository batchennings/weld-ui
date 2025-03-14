import { IconProps } from './shared/IconProps';
const Wrench = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
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
      d="M20.9637 0.40033C20.3608 0.142639 19.6971 0 19 0C16.2386 0 14 2.23859 14 5C14 5.31296 14.0288 5.61921 14.0838 5.91624L5.91624 14.0838C5.61921 14.0288 5.31296 14 5 14C2.23859 14 0 16.2386 0 19C0 21.7614 2.23859 24 5 24C7.76141 24 10 21.7614 10 19C10 18.687 9.97125 18.3808 9.91624 18.0838L18.0838 9.91624C18.3808 9.97125 18.687 10 19 10C21.7614 10 24 7.76141 24 5C24 4.4079 23.8971 3.83978 23.7082 3.31268L21.2427 5.7782C20.4616 6.5592 19.1953 6.5592 18.4143 5.7782C17.6332 4.99713 17.6332 3.73077 18.4143 2.94977L20.9637 0.40033ZM5 21C6.10458 21 7 20.1046 7 19C7 17.8954 6.10458 17 5 17C3.89542 17 3 17.8954 3 19C3 20.1046 3.89542 21 5 21Z"
      fill={color}
    />
  </svg>
);
export { Wrench };
