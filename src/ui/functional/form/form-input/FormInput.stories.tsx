import { FormProvider, useForm } from "react-hook-form";
import { FormInputText } from "./FormInputText";

export default {
  title: "FormInput",
  component: FormInputText,
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
      <FormInputText name="name" label="Name" size="small" />
    </FormProvider>
  );
};
