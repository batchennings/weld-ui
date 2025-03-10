import { IconProps } from './shared/IconProps';
const Card = ({ size = 20, color = 'currentColor', ...props }: IconProps) => (
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
      d="M19.5 5.98148H4.5C4.22386 5.98148 4 6.21363 4 6.5V17.4815C4 17.7678 4.22386 18 4.5 18H19.5C19.7761 18 20 17.7678 20 17.4815V6.5C20 6.21363 19.7761 5.98148 19.5 5.98148ZM4 4C2.89543 4 2 4.92859 2 6.07407V17.9259C2 19.0714 2.89543 20 4 20H20C21.1046 20 22 19.0714 22 17.9259V6.07407C22 4.92859 21.1046 4 20 4H4Z"
      fill={color}
    />
    <path d="M13 8H18V10H13V8Z" fill={color} />
    <path d="M13 11H16V13H13V11Z" fill={color} />
    <path d="M6 8H12V14H6V8Z" fill={color} />
  </svg>
);
export { Card };
