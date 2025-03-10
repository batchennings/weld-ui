import { IconProps } from './shared/IconProps';
const ArrowDown = ({
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
      d="M19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929C19.3166 10.9024 18.6834 10.9024 18.2929 11.2929L13 16.5856L13 5C13 4.44771 12.5523 4 12 4C11.4477 4 11 4.44771 11 5L11 16.5858L5.70711 11.2929C5.31658 10.9024 4.68342 10.9024 4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L11.2928 19.707C11.3704 19.7846 11.4577 19.8468 11.5507 19.8936C11.6858 19.9617 11.8384 20 12 20C12.2828 20 12.5382 19.8826 12.7201 19.6939L19.7071 12.7071Z"
      fill={color}
    />
  </svg>
);
export { ArrowDown };
