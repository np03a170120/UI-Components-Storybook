import { FormProvider, useForm } from "react-hook-form";
import { FormAutocomplete } from "./FormAutocomplete";

export default {
  title: "FormAutocomplete",
  component: FormAutocomplete,
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
  { id: "1", label: "Option 1" },
  { id: "2", label: "Option 2" },
  { id: "3", label: "Option 3" },
];

export const Default = () => {
  const methods = useForm({
    defaultValues: {
      formAutocompleteValues: [],
    },
  });

  return (
    <FormProvider {...methods}>
      <FormAutocomplete
        size="small"
        name="formAutocompleteValues"
        label="Form Autocomplete"
        options={options}
      />
    </FormProvider>
  );
};
