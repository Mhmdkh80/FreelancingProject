import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";

function CheckOTPForm() {
  const [otp, setOtp] = useState("");

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async(e) => {
    e.preventDefault();
    try {
   const data=await   mutateAsync({ phoneNumber: "ddd", otp: "3333" });
    } catch (error) {}
  };

  return (
    <div>
      <form className="container space-y-10" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>

        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          inputType="number"
          renderInput={(props) => <input type="number" {...props} />}
          renderSeparator={<span>-</span>}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem ",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
        />
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
