import { RefObject, SVGProps } from 'react';
import { Override } from './override';

type IconProps = Override<
  SVGProps<SVGSVGElement>,
  {
    title?: string;
    size?: number;
    color?: string;
    className?: string;
    animateOnHover?: boolean;
    ref?: RefObject<SVGSVGElement>;
  }
>;

export type { IconProps };
