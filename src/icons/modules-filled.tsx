import { IconProps } from './shared/IconProps';
const ModulesFilled = ({
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
      d="M2 4.07407C2 2.92859 2.89543 2 4 2H9C10.1046 2 11 2.92859 11 4.07407V8.92593C11 10.0714 10.1046 11 9 11H4C2.89543 11 2 10.0714 2 8.92593V4.07407Z"
      fill={color}
    />
    <path
      d="M2 15.0741C2 13.9286 2.89543 13 4 13H9C10.1046 13 11 13.9286 11 15.0741V19.9259C11 21.0714 10.1046 22 9 22H4C2.89543 22 2 21.0714 2 19.9259V15.0741Z"
      fill={color}
    />
    <path
      d="M13 4.07407C13 2.92859 13.8954 2 15 2H20C21.1046 2 22 2.92859 22 4.07407V8.92593C22 10.0714 21.1046 11 20 11H15C13.8954 11 13 10.0714 13 8.92593V4.07407Z"
      fill={color}
    />
    <path
      d="M13 15.0741C13 13.9286 13.8954 13 15 13H18C19.1046 13 20 13.9286 20 15.0741V17.9259C20 19.0714 19.1046 20 18 20H15C13.8954 20 13 19.0714 13 17.9259V15.0741Z"
      fill={color}
    />
  </svg>
);
export { ModulesFilled };
