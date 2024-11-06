import { useEffect, useMemo, useState } from 'react';

export type FormValidationRules<T extends {}> = {
  [key in keyof T]: [(value: any) => boolean, string];
};

type FormValidations<T extends {}> = {
  [key in keyof T as `${string & key}Valid`]: string | null;
};

export const useForm = <T extends {}>(
  initialState: T,
  formValidationRules?: FormValidationRules<T>
) => {
  const [formState, setFormState] = useState(initialState);
  const [formValidation, setFormValidation] = useState<FormValidations<T>>(
    {} as FormValidations<T>
  );

  useEffect(() => {
    createValidators();
  }, [formState]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue as keyof FormValidations<T>] !== null) return false;
    }

    return true;
  }, [formValidation]);

  const onInputChange = ({ target }: any) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialState);
  };

  const createValidators = () => {
    if (!formValidationRules) return;
    const formCheckValues = {} as FormValidations<T>;

    for (const formField of Object.keys(formValidationRules) as (keyof T)[]) {
      const [fn, errorMessage] = formValidationRules[formField];

      formCheckValues[`${String(formField)}Valid` as keyof FormValidations<T>] = (
        fn(formState[formField]) ? null : errorMessage
      ) as FormValidations<T>[keyof FormValidations<T>];
    }

    setFormValidation(formCheckValues as FormValidations<T>);
  };

  return {
    formState,
    onInputChange,
    onResetForm,
    isFormValid,
    ...formValidation,
  };
};
