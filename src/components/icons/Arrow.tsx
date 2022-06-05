import IconsProps from 'models/IconsProps';
import WrapperIcon from '../atoms/WrapperIcon';

export default function Arrow({ color, size, ...other }: IconsProps) {
  return (
    <WrapperIcon color={color} size={size} {...other}>
      <g
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
        fill="{color}"
        stroke="none"
      >
        <path d="M145 206 c-12 -9 -16 -19 -11 -31 9 -24 -39 -75 -71 -75 -25 0 -31 -15 -10 -23 6 -3 2 -6 -10 -6 -25 -1 -32 -21 -8 -21 8 0 15 -7 15 -15 0 -24 20 -17 21 8 0 12 3 16 6 10 8 -21 23 -14 23 10 0 31 45 72 78 72 19 0 29 7 36 26 5 15 6 34 3 43 -8 20 -46 21 -72 2z m55 -25 c0 -27 -12 -31 -32 -10 -12 12 -13 19 -5 23 25 10 37 5 37 -13z" />
      </g>
    </WrapperIcon>
  );
}
