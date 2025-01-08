import { Checkbox, FormControlLabel } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  size?: "small" | "medium";
};

export function FormCheckbox<T extends FieldValues>({
  name,
  label,
  size = "medium",
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControlLabel
          control={
            <Checkbox
              {...field}
              checked={field.value ?? false}
              onChange={(e) => field.onChange(e.target.checked)}
              size={size}
            />
          }
          label={label}
        />
      )}
    />
  );
}
