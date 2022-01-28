import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUseRegistrationEmailPageState } from "./types";

export const useRegistrationEmailPageState =
  (): IUseRegistrationEmailPageState => {
    const [isEmail, setIsEmail] = useState(true);
    const {
      register,
      handleSubmit,
      reset,
      setValue,
      formState: { errors, isValid },
    } = useForm({ mode: "onBlur" });

    // const navigate = useNavigate();

    const setEmailWay = () => {
      if (!isEmail) {
        setIsEmail(true);
        reset();
      }
    };
    const setPhoneWay = () => {
      if (isEmail) {
        setIsEmail(false);
        reset();
      }
    };
    const onSubmit = (data: any, e: any) => {
      alert(JSON.stringify(data));
      //AC set user data
      // navigate("/registration/verify");
    };
    return {
      register,
      handleSubmit,
      setValue,
      errors,
      isValid,
      onSubmit,
      setEmailWay,
      setPhoneWay,
      isEmail,
    };
  };
