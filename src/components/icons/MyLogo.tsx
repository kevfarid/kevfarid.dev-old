import { useTheme } from '@emotion/react';
import ITheme from 'models/ITheme';

export default function MyLogo({ witdh, height, color }: MyLogoProps) {
  const theme = useTheme() as ITheme;
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={witdh || height || 50}
      height={height || witdh || 50}
      viewBox="0 0 500.000000 600.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
        fill={color || theme.colors.primary}
        stroke="none"
      >
        <path
          d="M3419 5842 c-133 -136 -1383 -1452 -1447 -1524 l-24 -26 203 -264
c255 -330 349 -448 359 -448 10 0 476 474 1572 1600 l784 805 -220 6 c-122 4
-413 7 -647 8 l-426 1 -154 -158z"
        />
        <path
          d="M17 3913 c-4 -1143 -10 -2491 -14 -2995 l-6 -918 526 0 527 0 0 2995
0 2995 -513 0 -514 0 -6 -2077z"
        />
        <path
          d="M1467 3789 l-335 -341 419 -561 c231 -309 810 -1085 1287 -1724 l867
-1162 648 -1 649 0 -50 63 c-27 34 -374 485 -772 1002 -1596 2073 -2340 3034
-2364 3054 -11 9 -76 -52 -349 -330z"
        />
        <path
          d="M4175 3114 c-440 -338 -804 -619 -808 -624 -13 -12 12 -53 134 -215
209 -278 425 -545 442 -545 16 0 973 737 1015 782 l22 24 -2 597 -3 596 -800
-615z"
        />
      </g>
    </svg>
  );
}

type MyLogoProps = {
  witdh?: number;
  height?: number;
  color?: string;
};
