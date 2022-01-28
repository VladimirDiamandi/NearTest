import React, { forwardRef, useMemo } from "react";
import { FC } from "react";
import { InputProps } from './type';

const Input = forwardRef<HTMLInputElement, InputProps>(({
  placeholder,
  errors,
  title,
  name,
  ...props
},ref) => {
  const error = useMemo(() => {
    if(errors){
      if( Array.isArray(errors) ){
        return errors[errors.length-1]
      }
      return errors
    }


  }, [errors]);

  return (
    <label htmlFor={name} className="flex w-full h-full flex-col">
      {title && <span className="color-[#828282] text-sm mb-[10px]">{title}</span>}
        <input
          ref={ref}
          name={name}
          className={` input relative w-full h-full`}
          placeholder={ props.type === "password" ? "" : placeholder}
          {...props}
        />
      <span className=" text-error h-[24px] ">{errors && error}</span>
    </label>
  );
});

export default Input;
