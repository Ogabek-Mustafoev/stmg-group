"use client"

import {MotionEl} from "@/components";
import {Input, InputProps, Textarea, TextAreaProps} from "@nextui-org/react";
import {ErrorMessage, FieldProps} from "formik";
import {get} from "lodash";
import {FC, useState} from "react";
import {PhoneInput} from 'react-international-phone';

import 'react-international-phone/style.css';

interface IMainInput extends Omit<InputProps, 'form'>, FieldProps {
}

export const MainInput: FC<IMainInput> = (props) => {
  const {
    type = 'text',
    form,
    size = "lg",
    field,
    label,
    placeholder,
    labelPlacement = "inside",
    ...otherProps
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <MotionEl>
      {type === "phone" ? (
        <PhoneInput
          {...field}
          inputClassName="w-full"
          className="w-full bg-white"
          defaultCountry="uz"
          value={field?.value}
          placeholder={placeholder}
          onChange={(phone) => form.setFieldValue(field.name, phone)}
        />
      ) : type === "description" ? (
        <Textarea
          {...otherProps as TextAreaProps}
          {...field}
          className="w-full h-full"
          size={size}
          labelPlacement={labelPlacement}
          placeholder={placeholder}
          minRows={4}
          label={label}
          variant="bordered"
          autoComplete="off"
          classNames={{
            base: "w-full h-full mb-3",
            label: "z-0 text-lg font-medium",
            inputWrapper: `border-1 bg-white ${(get(form.touched, field.name) && get(form.errors, field.name)) ? "border-red-600" : "border-gray-300"}`
          }}
        />
      ) : (
        <Input
          {...otherProps as InputProps}
          {...field}
          size={size}
          label={label}
          placeholder={placeholder}
          classNames={{
            label: "z-0 text-lg font-medium",
            base: "w-full flex-1",
            inputWrapper: `border-1 bg-white h-[58px] ${(get(form.touched, field.name) && get(form.errors, field.name)) ? "border-red-600" : "border-gray-300"}`
          }}
          variant="bordered"
          autoComplete="off"
          labelPlacement={labelPlacement}
        />
      )}
      <ErrorMessage
        component="p"
        name={field.name}
        className="text-red-600 font-medium"
      />
    </MotionEl>
  )
}
