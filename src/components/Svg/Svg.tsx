import React, { FC } from 'react';
import { SvgProps } from './type';

const Svg:FC<SvgProps> = ({children,...props}) => {
  return <svg {...props}>
    {children}
  </svg>;
};

export default Svg;
