import { useFormContext } from "react-hook-form";
import {
  InputBaseComponentProps,
  TextField,
  TextFieldProps,
} from "@mui/material";

type TextFieldVariants = "outlined" | "filled" | "standard";
type TextFieldTypes = "text" | "password" | "email";

type TFieldProps = {
  label: string;
  name: string;
  variant?: TextFieldVariants;
  inputProps?: InputBaseComponentProps;
  type: TextFieldTypes;
  fullWidth?: boolean;
} & TextFieldProps;

const TextInput = ({
  label,
  name,
  inputProps,
  variant,
  type,
  fullWidth,
}: TFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextField
        label={label}
        variant={variant}
        error={!!errors[name]}
        type={type}
        fullWidth={fullWidth}
        // helperText={
        //   errors[name] && typeof errors[name]?.message === "string"
        //     ? errors[name]?.message
        //     : ""
        // }
        inputProps={inputProps}
        {...register(name)}
      />
    </>
  );
};

export default TextInput;
