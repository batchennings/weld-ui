import { IconProps } from './shared/IconProps';
const SpecialCheckboxFull = ({
  size = 20,
  color = 'currentColor',
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    {...props}
    viewBox="0 0 20 20"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.5812 5.18627C15.0307 5.50728 15.1347 6.13183 14.8137 6.58124L9.81373 13.5812C9.64288 13.8204 9.37543 13.9723 9.08248 13.9966C8.78953 14.0208 8.50075 13.915 8.29289 13.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L8.8724 11.4582L13.1863 5.41876C13.5073 4.96935 14.1318 4.86526 14.5812 5.18627Z"
      fill={color}
    />
  </svg>
);
export { SpecialCheckboxFull };
