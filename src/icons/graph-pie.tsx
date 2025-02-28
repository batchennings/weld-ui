import { IconProps } from './shared/IconProps';
const GraphPie = ({
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
      d="M4.25705 5.67127C2.84637 7.39514 2 9.59873 2 12C2 13.5009 2.33065 14.9246 2.92309 16.2021L10.381 11.7952L4.25705 5.67127Z"
      fill={color}
    />
    <path
      d="M11 9.58579V2.04938C8.98878 2.24906 7.15285 3.04464 5.67127 4.25706L11 9.58579Z"
      fill={color}
    />
    <path
      d="M3.94206 17.9231C5.76262 20.3957 8.69395 22 12 22C13.3789 22 14.6927 21.7209 15.8878 21.2161L11.6177 13.3875L3.94206 17.9231Z"
      fill={color}
    />
    <path
      d="M22 12C22 15.4294 20.2738 18.4555 17.6428 20.257L13 11.7451V2.04938C18.0533 2.5511 22 6.81465 22 12Z"
      fill={color}
    />
  </svg>
);
export { GraphPie };
