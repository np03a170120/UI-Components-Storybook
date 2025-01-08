import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  options: { label: string; value: string | number }[];
  size?: "small" | "medium";
} & Pick<SelectProps, "label">;

export function FormSelect<T extends FieldValues>({
  name,
  options,
  label,
  size = "small",
  ...props
}: Props<T>) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl size={size} fullWidth error={!!error}>
          <InputLabel shrink>{label}</InputLabel>
          <Select {...field} label={label} {...props}>
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
