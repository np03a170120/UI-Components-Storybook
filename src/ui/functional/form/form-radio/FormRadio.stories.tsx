import { FormProvider, useForm } from "react-hook-form";
import { FormRadio } from "./FormRadio";

export default {
  title: "FormRadio",
  component: FormRadio,
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

const options = [
  { label: "option 1", value: "option 1" },
  { label: "option 2", value: "option 2" },
];

export const Default = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <FormRadio
        name={"formRadio"}
        size="small"
        label="Form Radio"
        options={options}
      />
    </FormProvider>
  );
};
