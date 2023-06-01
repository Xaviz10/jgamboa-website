import { FC } from "react";

interface IconProps {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
}

export const BigEllipseWatermarkContact: FC<IconProps> = ({
  className,
  color = "#91A4AE",
  width = "313",
  height = "533",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 313 533"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: "overlay" }} opacity="0.7">
        <path
          d="M313 266.5C313 413.684 193.236 533 45.5 533C-102.236 533 -222 413.684 -222 266.5C-222 119.316 -102.236 0 45.5 0C193.236 0 313 119.316 313 266.5ZM-168.241 266.5C-168.241 384.104 -72.5456 479.442 45.5 479.442C163.546 479.442 259.241 384.104 259.241 266.5C259.241 148.896 163.546 53.5585 45.5 53.5585C-72.5456 53.5585 -168.241 148.896 -168.241 266.5Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
