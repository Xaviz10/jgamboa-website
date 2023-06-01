import { FC } from "react";

interface IconProps {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
}

export const SmallEllipseWatermarkContact: FC<IconProps> = ({
  className,
  color = "#91A4AE",
  width = "123",
  height = "119",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 123 119"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: "overlay" }} opacity="0.7">
        <path
          d="M123 59.5C123 92.3609 95.4655 119 61.5 119C27.5345 119 0 92.3609 0 59.5C0 26.6391 27.5345 0 61.5 0C95.4655 0 123 26.6391 123 59.5ZM26.4 59.5C26.4 78.2548 42.1148 93.4585 61.5 93.4585C80.8852 93.4585 96.6 78.2548 96.6 59.5C96.6 40.7452 80.8852 25.5415 61.5 25.5415C42.1148 25.5415 26.4 40.7452 26.4 59.5Z"
          fill={color}
        />
      </g>
    </svg>
  );
};
