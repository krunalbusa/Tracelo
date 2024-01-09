import * as React from "react";
import { useForm, Controller } from "react-hook-form";

import PhoneInput, {
  parsePhoneNumber,
  getCountryCallingCode,
} from "react-phone-number-input";

import "react-phone-number-input/style.css";

export default function Country() {
  const [countryCode, setCountryCode] = React.useState("DE");

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="cellphone"
          rules={{
            validate: {
              isValid: (value) => {
                if (value) {
                  const callingCode = getCountryCallingCode(countryCode);
                  if (!new RegExp(`^\\+${callingCode}$`).test(value)) {
                    return !!parsePhoneNumber(value);
                  }
                }
                return true;
              },
            },
          }}
          control={control}
          render={({ field }) => (
            <PhoneInput
              {...field}
              onCountryChange={(v) => setCountryCode(v)}
              limitMaxLength={true}
              international={true}
              defaultCountry="DE"
            />
          )}
        />
        {errors.cellphone?.type === "isValid" && (
          <span className="validation-message">Enter a valid phone number</span>
        )}
      </form>
    </>
  );
}
