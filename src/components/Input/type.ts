import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  errors?: string | string[];
  title?: string;
  name: string;
  placeholder?: string;
}
