import { IconProps } from './shared/IconProps';
const Check = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
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
      d="M21.7071 5.29289C22.0976 5.68342 22.0976 6.31658 21.7071 6.70711L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929C4.68342 10.9024 5.31658 10.9024 5.70711 11.2929L10 15.5858L20.2929 5.29289C20.6834 4.90237 21.3166 4.90237 21.7071 5.29289Z"
      fill={color}
    />
  </svg>
);
export { Check };
