import { IconProps } from './shared/IconProps';
const HeartFilled = ({
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
      d="M0.500041 6C1.02298 1.8275 7.00009 -5.24521e-06 10.0325 5.04717C13.0001 -5.24521e-06 18.9771 1.8275 19.5 6C20.0862 10.6774 17.0036 14.3227 14.6583 16.1257C12.782 17.568 10.8143 18.5993 10.0325 19C9.25077 18.5993 7.21816 17.568 5.34191 16.1257C2.9966 14.3228 -0.0861732 10.6774 0.500041 6Z"
      fill={color}
    />
  </svg>
);
export { HeartFilled };
