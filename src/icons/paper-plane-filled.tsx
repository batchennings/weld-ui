import { IconProps } from './shared/IconProps';
const PaperPlaneFilled = ({
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
      d="M4.0328 22.8911L22.3904 12.8779C23.0853 12.4989 23.0853 11.5011 22.3904 11.1221L4.0328 1.10887C3.26327 0.689125 2.36449 1.39216 2.58658 2.24012L4.88083 11H12C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13H4.88083L2.58658 21.7599C2.36449 22.6078 3.26327 23.3109 4.0328 22.8911Z"
      fill={color}
    />
  </svg>
);
export { PaperPlaneFilled };
