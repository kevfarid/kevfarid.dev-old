import IconsProps from 'models/IconsProps';
import WrapperIcon from './WrapperIcon';

export default function PaperPlane({ color, size, ...other }: IconsProps) {
  return (
    <WrapperIcon color={color} size={size} {...other}>
      <g
        transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M145 221 c-55 -20 -106 -40 -112 -44 -17 -11 -7 -30 28 -56 l30 -22
45 36 c50 41 55 36 19 -17 -14 -20 -25 -44 -25 -52 0 -15 50 -56 68 -56 5 0
21 46 36 103 14 56 29 112 32 125 8 29 0 28 -121 -17z"
        />
      </g>
    </WrapperIcon>
  );
}
