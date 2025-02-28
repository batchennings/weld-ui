import { IconProps } from './shared/IconProps';
const PaperPlane = ({
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
      d="M1.6192 3.49348C1.17712 1.80554 2.95571 0.404728 4.48989 1.21926L22.8504 10.2339L22.8693 10.2442C24.259 11.0022 24.259 12.9978 22.8693 13.7558L22.8504 13.7661L4.48988 22.7807C2.95571 23.5953 1.17712 22.1945 1.6192 20.5065L3.8471 12L1.6192 3.49348ZM3.55394 21.0132L5.65265 13H12C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11H5.65265L3.55395 2.98676L3.5728 2.99704L21.9095 12L3.5728 21.003L3.55394 21.0132Z"
      fill={color}
    />
  </svg>
);
export { PaperPlane };
