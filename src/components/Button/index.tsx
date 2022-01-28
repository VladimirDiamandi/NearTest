import { cloneElement, FC, forwardRef, isValidElement } from "react";
import { IButtonProps } from './type';

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({
  children,
  title,
  variant = "primary",
  className = "",
  startIcon,
  endIcon,
 ...props

}, ref) => {
  return (
    <button
      ref={ref}
      className={`btn ${className} ${variant} w-max h-max inline-flex rounded-[10px] text-center text-white items-center transition duration-200`}
      {...props}
    >
       <>
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            className: "mr-[0.5rem]",
          })}
           <p className="font-semibold text-base">{title}</p>
        {children}
        {isValidElement(endIcon) &&
          cloneElement(endIcon, {
            className: "ml-[0.5rem]",
            ...endIcon.props,
          })}
      </>

    </button>
  );
});
export default Button
