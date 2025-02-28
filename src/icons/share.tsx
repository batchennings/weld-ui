import { IconProps } from './shared/IconProps';
const Share = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
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
      d="M13.8091 9.41249C14.5395 10.3769 15.697 11 17 11C19.2091 11 21 9.20914 21 7C21 4.79086 19.2091 3 17 3C14.7909 3 13 4.79086 13 7C13 7.1919 13.0135 7.38065 13.0396 7.56534L9.0296 9.38809C8.29609 8.53804 7.21088 8 6 8C3.79086 8 2 9.79086 2 12C2 14.2091 3.79086 16 6 16C7.21088 16 8.29609 15.462 9.0296 14.6119L13.0396 16.4346C13.0135 16.6193 13 16.8081 13 17C13 19.2091 14.7909 21 17 21C19.2091 21 21 19.2091 21 17C21 14.7909 19.2091 13 17 13C15.697 13 14.5395 13.6231 13.8091 14.5875L9.91628 12.818C9.97116 12.554 10 12.2803 10 12C10 11.7197 9.97116 11.446 9.91628 11.182L13.8091 9.41249ZM15 7C15 8.10457 15.8954 9 17 9C18.1046 9 19 8.10457 19 7C19 5.89543 18.1046 5 17 5C15.8954 5 15 5.89543 15 7ZM17 19C15.8954 19 15 18.1046 15 17C15 15.8954 15.8954 15 17 15C18.1046 15 19 15.8954 19 17C19 18.1046 18.1046 19 17 19ZM4 12C4 13.1046 4.89543 14 6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12Z"
      fill={color}
    />
  </svg>
);
export { Share };
