import { FC } from "react";

interface IconProps {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
}

export const HomeBottomForm: FC<IconProps> = ({
  className,
  color = "#FFFFFF",
  width = "1440",
  height = "106",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 1440 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1057.08 106C1273.75 102.488 1440 52.8611 1440 52.8611V106H1057.08ZM0 106H1009.19C901.408 104.224 783.841 90.0965 669.5 52.8611C559.797 17.1361 456.075 2.68189 364.497 0H299.772C119.465 5.27173 0.139286 52.8055 0 52.861V106Z"
        fill={color}
      />
    </svg>
  );
};
