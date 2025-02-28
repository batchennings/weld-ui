import { IconProps } from './shared/IconProps';
const Attachment = ({
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
      d="M7.4875 3.85C7.1312 4.32507 7 5.0396 7 6V16C7 17.2869 7.4301 18.5412 8.24741 19.4606C9.04836 20.3617 10.2714 21 12 21C13.7286 21 14.9516 20.3617 15.7526 19.4606C16.5699 18.5412 17 17.2869 17 16V6C17 5.44772 17.4477 5 18 5C18.5523 5 19 5.44772 19 6V16C19 17.7131 18.4301 19.4588 17.2474 20.7894C16.0484 22.1383 14.2714 23 12 23C9.72864 23 7.95164 22.1383 6.75259 20.7894C5.5699 19.4588 5 17.7131 5 16V6C5 4.9604 5.1188 3.67493 5.8875 2.65C6.70323 1.56237 8.06073 1 10 1C11.9393 1 13.2968 1.56237 14.1125 2.65C14.8812 3.67493 15 4.9604 15 6V15C15 15.8267 14.8688 16.7041 14.3762 17.3937C13.8356 18.1506 12.9966 18.5 12 18.5C11.0034 18.5 10.1644 18.1506 9.62377 17.3937C9.1312 16.7041 9 15.8267 9 15V8C9 7.44772 9.44771 7 10 7C10.5523 7 11 7.44772 11 8V15C11 15.6733 11.1188 16.0459 11.2512 16.2313C11.3356 16.3494 11.4966 16.5 12 16.5C12.5034 16.5 12.6644 16.3494 12.7488 16.2313C12.8812 16.0459 13 15.6733 13 15V6C13 5.0396 12.8688 4.32507 12.5125 3.85C12.2032 3.43763 11.5607 3 10 3C8.43927 3 7.79677 3.43763 7.4875 3.85Z"
      fill={color}
    />
  </svg>
);
export { Attachment };
