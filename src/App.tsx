import { FormProvider, useForm } from "react-hook-form";
import "./App.css";
import { FormInputText } from "./ui/functional/form/form-input/FormInputText";
import { Button, Stack } from "@mui/material";
import { FormRadio } from "./ui/functional/form/form-radio/FormRadio";

function App() {
  const methods = useForm({
    defaultValues: {
      name: "",
      age: "",
      sex: "",
      formRadio: "option 1",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const options = [
    { label: "option 1", value: "option 1" },
    { label: "option 2", value: "option 2" },
  ];

  return (
    <FormProvider {...methods}>
      <h1>Playground</h1>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <FormInputText name="name" label="Name" size="small" />
          <FormInputText name="age" label="Age" size="small" />
          <FormInputText name="sex" label="Sex" size="small" />
          <FormRadio
            name="formRadio"
            size="small"
            label="Form Radio"
            options={options}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
}

export default App;
