import { IconProps } from './shared/IconProps';
const Binoculars = ({
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
      d="M7.53021 7.02315C8.78397 7.13311 9.92853 7.6292 10.8416 8.39091C11.1672 8.61608 11.5709 8.75 12 8.75C12.5134 8.75 12.9893 8.55827 13.3383 8.25026L13.3664 8.22544L13.3963 8.20279C14.272 7.53968 15.3218 7.1217 16.469 7.02275C15.193 6.377 13.6552 6 12 6C10.3445 6 8.80642 6.37715 7.53021 7.02315Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.2305 16.8164C9.35912 17.5547 8.23156 18 7 18C4.23858 18 2 15.7614 2 13C2 10.2386 4.23858 8 7 8C8.23156 8 9.35912 8.44526 10.2305 9.18358C10.7271 9.53998 11.3448 9.75 12 9.75C12.7608 9.75 13.4555 9.46677 13.9844 9V9.01143C14.8227 8.37661 15.8674 8 17 8C19.7614 8 22 10.2386 22 13C22 15.7614 19.7614 18 17 18C15.8674 18 14.8383 17.6348 14 17C13.4712 16.5332 12.7608 16.25 12 16.25C11.3448 16.25 10.7271 16.46 10.2305 16.8164ZM10 13C10 14.6569 8.65685 16 7 16C5.34315 16 4 14.6569 4 13C4 11.3431 5.34315 10 7 10C8.65685 10 10 11.3431 10 13ZM20 13C20 14.6569 18.6569 16 17 16C15.3431 16 14 14.6569 14 13C14 11.3431 15.3431 10 17 10C18.6569 10 20 11.3431 20 13Z"
      fill={color}
    />
  </svg>
);
export { Binoculars };
