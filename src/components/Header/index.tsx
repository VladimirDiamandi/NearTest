import React, { FC, HTMLAttributes } from 'react';

const Header:FC<HTMLAttributes<HTMLDivElement>> = ({children, className=""}) => {
  return <div className={`${className} h-[50px] w-full flex items-center bg-[#F5F5F5] border-b border-b-[#DFDFE0]`}>
    {children}
  </div>;
};

export default Header;
