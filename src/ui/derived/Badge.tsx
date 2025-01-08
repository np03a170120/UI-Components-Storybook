import { Badge } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  badgeContent: React.ReactNode;
  max: number;
};

export function FormBadge<T extends FieldValues>({
  name,
  label,
  badgeContent,
  max,
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Badge
              {...field}
              badgeContent={badgeContent}
              max={max}
              color="primary"
            />
            {error && <div style={{ color: "red" }}>{error?.message}</div>}
          </>
        )}
      />
    </div>
  );
}
