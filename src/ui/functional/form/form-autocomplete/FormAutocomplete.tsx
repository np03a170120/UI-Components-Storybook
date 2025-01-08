import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { Autocomplete, Box, Checkbox, TextField } from "@mui/material";

type Option = { id: string; label: string };

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: Option[];
  label: string;
  size?: "small" | "medium";
};

export function FormAutocomplete<T extends FieldValues>({
  name,
  options,
  label,
  size = "medium",
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <Autocomplete
          options={options || []}
          value={value.map((id: string) =>
            options?.find((item) => item.id === id)
          )}
          getOptionLabel={(option) =>
            options?.find((item) => item.id === option.id)?.label ?? ""
          }
          isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
          onChange={(_, newValue) => {
            onChange(newValue.map((item) => item.id));
          }}
          disableCloseOnSelect
          multiple
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              inputRef={ref}
              error={!!error}
              helperText={error?.message}
              label={label}
              size={size}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
          )}
          renderOption={(props, option, { selected }) => (
            <Box component="li" {...props}>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize={size} />}
                checkedIcon={<CheckBoxIcon fontSize={size} />}
                checked={selected}
              />
              {option.label}
            </Box>
          )}
        />
      )}
    />
  );
}
