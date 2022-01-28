import React, { FC } from 'react';

const Layout:FC = ({children}) => {
  return <div className='w-full h-full flex'>
    <div className='flex h-full max-w-[362px] w-full mx-auto justify-center items-center flex-col'>
      {children}
    </div>
  </div>;
};

export default Layout;
