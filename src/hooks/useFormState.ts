import { useState } from "react";
import { FormParam, FormStateType, defaultFormState } from "../const";

export const useFormState = () => {
  const [formState, setFormState] = useState<FormStateType>(defaultFormState);

  const handleFormUpdate = (
    param: FormParam,
    value: FormStateType[FormParam]
  ) => {
    setFormState((prev) => ({ ...prev, [param]: value }));
  };

  return { formState, handleFormUpdate };
};
