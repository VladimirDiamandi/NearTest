import Button from "components/Button";
import Header from "components/Header";
import Input from "components/Input";
import Layout from "components/Layout";
import { ArrowRightIcon, HomePageIcon } from "components/Svg";
import React, { FC } from "react";
import { formatPhoneNumber } from "utils/formatPhoneNumber";
import { useRegistrationEmailPageState } from "./hooks/useRegistrationEmailPageState";

const RegistrationEmailPage: FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    errors,
    isValid,
    onSubmit,
    setEmailWay,
    setPhoneWay,
    isEmail,
  } = useRegistrationEmailPageState();

  return (
    <Layout>
      <Header className="justify-center">
        <HomePageIcon />
      </Header>
      <div className="flex flex-col w-full justify-center items-center px-[23px]">
        <div className="flex w-max mt-[20px] mb-[26px] space-x-2">
          <Button
            onClick={setEmailWay}
            title="Email"
            variant="third"
            className={`${
              isEmail ? "border border-[#BEBEC2] text-[#414047]" : ""
            }`}
          />
          <Button
            onClick={setPhoneWay}
            title="Phone"
            variant="third"
            className={`${
              !isEmail ? "border border-[#BEBEC2] text-[#414047]" : ""
            }`}
          />
        </div>
        <div className=" border-b border-[#DFDFE0] ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center"
          >
            {isEmail ? (
              <Input
                {...register(
                  "email",
                  isEmail && {
                    required: "Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }
                )}
                errors={errors ? errors?.email?.message : ""}
                name="email"
              />
            ) : (
              <Input
                {...register(
                  "phoneNumber",
                  !isEmail && {
                    required: "Required",
                    onChange: (e) =>
                      setValue(
                        "phoneNumber",
                        formatPhoneNumber(e.target.value),
                        { shouldDirty: true }
                      ),
                  }
                )}
                errors={errors ? errors?.phoneNumber?.message : ""}
                name="phoneNumber"
              />
            )}
            <Button
              disabled={!isValid ? true : false}
              title="Continue"
              variant="primary"
              endIcon={<ArrowRightIcon />}
              type="submit"
            />
          </form>
          <div className=" text-center px-[16px] mt-[24px] mb-[17px]">
            <span>
              by clicking continue you must agree to near labs Terms &
              Conditions ans Privacy Policy
            </span>
          </div>
        </div>
        <div className="grid pt-[24px] gap-[10px] items-center justify-items-center">
          <span>Already have NEAR account?</span>
          <Button
            variant="secondary"
            title="Log in with NEAR"
            endIcon={<ArrowRightIcon className="ml-[18px]" />}
          />
        </div>
      </div>
    </Layout>
  );
};

export default RegistrationEmailPage;
