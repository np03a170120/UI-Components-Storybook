import { FormProvider, useForm } from "react-hook-form";
import { FormSelect } from "./FormSelect";

export default {
  title: "FormSelect",
  component: FormSelect,
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
  { label: "option 1", value: "1" },
  { label: "option 2", value: "2" },
  { label: "option 3", value: "3" },
];

export const Default = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <FormSelect
        size="small"
        name={"formSelect"}
        label="Form Select"
        options={options}
      />
    </FormProvider>
  );
};
