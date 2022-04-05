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

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={size || '30'}
      height={size || '30'}
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
