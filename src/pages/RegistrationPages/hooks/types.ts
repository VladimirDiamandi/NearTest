import { FieldValues, UseFormHandleSubmit, UseFormRegister, UseFormSetValue } from 'react-hook-form';

export interface IUseRegistrationEmailPageState{
  register: UseFormRegister<FieldValues>
    handleSubmit: UseFormHandleSubmit<FieldValues>
    setValue: UseFormSetValue<FieldValues>
    errors: {[x: string]: any}
    isValid: boolean
    onSubmit: (data: any, e: any) => void
    setEmailWay: () => void
    setPhoneWay: () => void
    isEmail: boolean,
}