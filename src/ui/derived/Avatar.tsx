import { Avatar, IconButton, CircularProgress } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { useState } from "react";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};

export function FormAvatar<T extends FieldValues>({ name, label }: Props<T>) {
  const { control } = useFormContext();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);

      setIsLoading(true);
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <label>{label}</label>
          <div>
            <Avatar
              src={imagePreview || field.value || ""} // Use the preview URL or fallback to the form value (URL)
              alt="avatar"
              sx={{ width: 100, height: 100 }}
            />
            <IconButton
              color="primary"
              aria-label="upload avatar"
              component="label"
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: "white",
                borderRadius: "50%",
              }}
            >
              {isLoading ? <CircularProgress size={24} /> : <PhotoCamera />}
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                  handleFileChange(e);
                  field.onChange(e.target.files ? e.target.files[0] : null);
                }}
              />
            </IconButton>
            {error && <div style={{ color: "red" }}>{error?.message}</div>}
          </div>
        </div>
      )}
    />
  );
}
