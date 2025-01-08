import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

type Props<T extends FieldValues> = {
  name: Path<T>;
  size?: "small" | "medium";
  label?: string;
} & Pick<TextFieldProps, "label">;

export function FormInputText<T extends FieldValues>({
  name,
  size = "small",
  ...props
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          fullWidth
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          size={size}
          {...field}
          {...props}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}
