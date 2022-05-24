import { useTheme } from '@emotion/react';
import IconsProps from 'models/IconsProps';
import ITheme from 'models/ITheme';

export default function WrapperIcon({
  color,
  size,
  children,
  label,
  ...otherProps
}: WrapperProps) {
  const theme = useTheme() as ITheme;

  const svgSize = size || 30;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      width={svgSize}
      height={svgSize}
      fill={color || theme.basic.text}
      {...otherProps}
    >
      <title>{label}</title>
      {children}
    </svg>
  );
}

interface WrapperProps extends IconsProps {
  children: React.ReactNode;
}
