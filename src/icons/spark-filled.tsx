import { IconProps } from './shared/IconProps';
const SparkFilled = ({
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
      d="M12.7311 22.217C12.3358 22.6405 11.6645 22.6405 11.2692 22.217L9.72651 20.5647C9.49148 20.3129 9.14343 20.1998 8.80531 20.2654L6.58604 20.6954C6.01733 20.8056 5.47426 20.411 5.40333 19.8361L5.12653 17.5926C5.08436 17.2508 4.86926 16.9547 4.5572 16.809L2.509 15.8524C1.98413 15.6073 1.77669 14.9689 2.05725 14.4621L3.15204 12.4843C3.31883 12.183 3.31883 11.817 3.15204 11.5157L2.05725 9.53793C1.77669 9.03111 1.98413 8.39269 2.509 8.14757L4.5572 7.19103C4.86926 7.04529 5.08436 6.74923 5.12653 6.40741L5.40333 4.16387C5.47426 3.58894 6.01733 3.19437 6.58604 3.30458L8.80531 3.73462C9.14344 3.80014 9.49148 3.68706 9.72651 3.43531L11.2692 1.78294C11.6645 1.3595 12.3358 1.3595 12.7311 1.78294L14.2737 3.43531C14.5088 3.68706 14.8568 3.80014 15.1949 3.73462L17.4142 3.30458C17.9829 3.19437 18.526 3.58894 18.5969 4.16387L18.8737 6.40741C18.9159 6.74923 19.131 7.04529 19.443 7.19103L21.4912 8.14757C22.0161 8.39269 22.2235 9.03111 21.943 9.53793L20.8482 11.5157C20.6814 11.817 20.6814 12.183 20.8482 12.4843L21.943 14.4621C22.2235 14.9689 22.0161 15.6073 21.4912 15.8524L19.443 16.809C19.131 16.9547 18.9159 17.2508 18.8737 17.5926L18.5969 19.8361C18.526 20.4111 17.9829 20.8056 17.4142 20.6954L15.1949 20.2654C14.8568 20.1998 14.5088 20.3129 14.2737 20.5647L12.7311 22.217Z"
      fill={color}
    />
  </svg>
);
export { SparkFilled };
