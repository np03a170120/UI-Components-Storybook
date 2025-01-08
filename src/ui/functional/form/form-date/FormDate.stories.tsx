import { FormProvider, useForm } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FormDate } from "./FormDate";

export default {
  title: "FormDate",
  component: FormDate,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This component is designed to create a form input using MUI and react-hook-form. It needs to be wrapped with the FormProvider component from react-hook-form. The component must be wrapped with the LocalizationProvider component from @mui/x-date-pickers. The LocalizationProvider component in Material-UI is used to configure the date library for date-related components like DatePicker. By setting dateAdapter={AdapterDayjs}, it integrates Day.js as the date library, ensuring proper date manipulation and formatting in components that require date input.",
      },
    },
  },
  argTypes: {
    size: {
      description: "small, medium",
    },
  },
};

export const Default = () => {
  const methods = useForm();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormProvider {...methods}>
        <FormDate name={"date"} size="small" label="Select Date" />
      </FormProvider>
    </LocalizationProvider>
  );
};
