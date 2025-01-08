import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  size?: "small" | "medium";
};

export function FormDate<T extends FieldValues>({
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
        <DatePicker
          label={label}
          value={field.value ? dayjs(field.value) : null}
          onChange={(newValue) =>
            field.onChange(newValue ? dayjs(newValue) : null)
          }
          slotProps={{
            textField: {
              variant: "outlined",
              fullWidth: true,
              error: !!error,
              helperText: error?.message,
              size: size,
              InputLabelProps: { shrink: true },
            },
          }}
        />
      )}
    />
  );
}
