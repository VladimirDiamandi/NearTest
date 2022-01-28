import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  title?: string;
  variant?: Variant;
  startIcon?: ReactNode
  endIcon?: ReactNode
}
export const variants ={
  PRIMARY: "primary",
  SECONDARY: "secondary",
  THIRD: "third",
  OUTLINED: "outlined",
} as const;

export type Variant = typeof variants[keyof typeof variants];