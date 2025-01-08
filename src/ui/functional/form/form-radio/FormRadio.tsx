import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  options: { label: string; value: string }[];
  size?: "small" | "medium";
};

export function FormRadio<T extends FieldValues>({
  name,
  label,
  options,
  size = "small",
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <FormControl component="fieldset">
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <RadioGroup {...field}>
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio size={size} />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
            {error && <FormHelperText error>{error?.message}</FormHelperText>}
          </>
        )}
      />
    </FormControl>
  );
}
