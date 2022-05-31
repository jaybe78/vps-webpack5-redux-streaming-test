import React, { ChangeEvent } from "react";
import { FormControl, InputLabel, Input } from "@mui/material";

type CustomInputProps = {
  labelId: string;
  labelText: string;
  handleChange?: (
    value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
};

export default function CustomInput({
  labelId,
  labelText,
  handleChange,
  type = "text",
}: CustomInputProps) {
  return (
    <FormControl>
      {labelText && <InputLabel htmlFor={labelId}>{labelText}</InputLabel>}
      <Input id={labelId} onChange={handleChange} type={type} />
    </FormControl>
  );
}
