import { IconProps } from './shared/IconProps';
const Cloud = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
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
      d="M18.701 18C18.7405 17.9941 18.7803 17.9893 18.8205 17.9857C20.6023 17.8251 22 16.3246 22 14.5C22 12.5827 20.4581 11.0253 18.5472 11.0003C17.7092 10.9893 16.9669 10.4571 16.6877 9.66684C15.9318 7.52778 14.3917 6 12 6C8.96243 6 7 8.46243 7 11.5C7 11.6575 7.00657 11.813 7.01938 11.9664C7.07351 12.6142 6.8094 13.2479 6.31123 13.6655C5.81306 14.0832 5.14298 14.2326 4.51455 14.0663C4.35255 14.0234 4.18053 14 4 14C2.89543 14 2 14.8954 2 16C2 17.1046 2.89543 18 4 18H18.701ZM19 19.9776C21.8032 19.725 24 17.369 24 14.5C24 11.4869 21.5771 9.03977 18.5734 9.00048C17.544 6.08725 15.2657 4 12 4C8.33404 4 5.7824 6.6302 5.12922 10.1065C5.04438 10.558 5 11.0238 5 11.5C5 11.7132 5.00889 11.9242 5.02633 12.1329C4.6988 12.0462 4.35479 12 4 12C3.66191 12 3.33362 12.042 3.02004 12.1209C1.28465 12.558 0 14.129 0 16C0 18.2091 1.79086 20 4 20H19V19.9776Z"
      fill={color}
    />
  </svg>
);
export { Cloud };
