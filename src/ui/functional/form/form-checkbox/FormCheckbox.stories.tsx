import { FormProvider, useForm } from "react-hook-form";
import { FormCheckbox } from "./FromCheckbox";

export default {
  title: "FormCheckbox",
  component: FormCheckbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This component is designed to create a form input using MUI and react-hook-form. It needs to be wrapped with the FormProvider component from react-hook-form.",
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
    <FormProvider {...methods}>
      <FormCheckbox name={"checkbox"} label="Checkbox" />
    </FormProvider>
  );
};
