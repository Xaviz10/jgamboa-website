import { FC } from "react";

interface IconProps {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
}

export const SmallEllipseWatermark: FC<IconProps> = ({
  className,
  color = "#91A4AE",
  width = "478",
  height = "600",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 478 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: "overlay" }} opacity="0.7">
        <path
          d="M592 300.402C592 465.865 459.476 600 296 600C132.524 600 0 465.865 0 300.402C0 134.939 132.524 0.804413 296 0.804413C459.476 0.804413 592 134.939 592 300.402ZM81.8578 300.402C81.8578 420.107 177.733 517.147 296 517.147C414.267 517.147 510.142 420.107 510.142 300.402C510.142 180.697 414.267 83.6572 296 83.6572C177.733 83.6572 81.8578 180.697 81.8578 300.402Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
