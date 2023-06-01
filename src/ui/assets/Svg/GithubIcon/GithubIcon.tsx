import { FC } from "react";

interface IconProps {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
}

export const GithubIcon: FC<IconProps> = ({
  className,
  color = "#FFFFFF",
  width = "33",
  height = "33",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.6117 0.103027C7.77636 0.103027 0.611816 7.44739 0.611816 16.5081C0.611816 23.7566 5.19627 29.9056 11.5535 32.0751C12.3529 32.2272 12.6464 31.7192 12.6464 31.2859C12.6464 30.8947 12.6316 29.6024 12.6247 28.2316C8.17352 29.224 7.23427 26.2961 7.23427 26.2961C6.50645 24.3999 5.45777 23.8957 5.45777 23.8957C4.00584 22.8775 5.5672 22.8987 5.5672 22.8987C7.1736 23.0141 8.01985 24.5892 8.01985 24.5892C9.44688 27.0966 11.7628 26.3718 12.6758 25.9529C12.8194 24.8927 13.2341 24.1687 13.6917 23.759C10.1379 23.3447 6.40179 21.9378 6.40179 15.6518C6.40179 13.8608 7.02708 12.3973 8.05058 11.2482C7.88419 10.8353 7.33654 9.16673 8.20532 6.90705C8.20532 6.90705 9.54862 6.46615 12.6062 8.58864C13.8827 8.22488 15.2517 8.04205 16.6117 8.03581C17.9709 8.04205 19.3407 8.22434 20.6196 8.58809C23.6734 6.4656 25.0151 6.90651 25.0151 6.90651C25.886 9.16592 25.3384 10.8347 25.1723 11.2477C26.1981 12.3968 26.8189 13.8602 26.8189 15.6513C26.8189 21.9522 23.076 23.3393 19.5132 23.7457C20.0873 24.2548 20.5987 25.2534 20.5987 26.7837C20.5987 28.9787 20.5801 30.7453 20.5801 31.2857C20.5801 31.7222 20.8684 32.2338 21.6791 32.0727C28.0327 29.901 32.6118 23.7538 32.6118 16.5081C32.6116 7.44793 25.4478 0.103299 16.6117 0.103299V0.103027Z"
        fill={color}
      />
      <path
        d="M6.67183 23.6569C6.63659 23.7384 6.51153 23.7628 6.3976 23.7071C6.28102 23.6539 6.21611 23.5428 6.25373 23.461C6.28818 23.3768 6.4135 23.3537 6.52928 23.4099C6.64586 23.4634 6.7121 23.5756 6.67156 23.6571L6.67183 23.6569ZM7.3199 24.3982C7.24386 24.4708 7.09469 24.4371 6.99348 24.3222C6.88856 24.2081 6.86895 24.0551 6.94658 23.9815C7.02554 23.9092 7.1702 23.9435 7.27512 24.0576C7.37951 24.1733 7.40018 24.3249 7.32016 24.3985L7.3199 24.3982ZM7.95101 25.3428C7.85298 25.4129 7.69242 25.3474 7.59333 25.2015C7.49529 25.0554 7.49529 24.8801 7.59598 24.8103C7.6948 24.7402 7.85298 24.8035 7.95366 24.9481C8.05116 25.0961 8.05116 25.2713 7.95101 25.3425V25.3428ZM8.81502 26.2558C8.72758 26.355 8.54053 26.3284 8.40381 26.1934C8.26418 26.0611 8.22523 25.8728 8.31293 25.7739C8.40196 25.6745 8.58981 25.7022 8.72732 25.8364C8.86695 25.9684 8.90907 26.157 8.81555 26.2556L8.81502 26.2558ZM10.0073 26.7858C9.96835 26.9143 9.78871 26.9727 9.60722 26.9179C9.42626 26.8616 9.30783 26.7114 9.34492 26.5816C9.38201 26.452 9.56297 26.3914 9.74552 26.4498C9.92649 26.5058 10.0449 26.6552 10.0073 26.7858ZM11.3169 26.8839C11.3215 27.0192 11.1678 27.1311 10.9778 27.1338C10.7863 27.1385 10.6313 27.0287 10.6294 26.8956C10.6294 26.759 10.7799 26.6484 10.9712 26.6446C11.1612 26.6411 11.3172 26.7497 11.3172 26.8836L11.3169 26.8839ZM12.5352 26.6715C12.558 26.8032 12.4258 26.9388 12.2369 26.9749C12.0514 27.0102 11.8792 26.9282 11.8553 26.7975C11.8325 26.6622 11.9671 26.5267 12.1526 26.4916C12.3418 26.4582 12.5113 26.5378 12.5352 26.6717V26.6715Z"
        fill={color}
      />
    </svg>
  );
};