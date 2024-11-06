import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { FormValidationRules, useForm } from '../../hooks';
import { useState } from 'react';

const formData = {
  email: '',
  password: '',
  displayName: '',
};

const formValidations: FormValidationRules<typeof formData> = {
  email: [(value: string) => value.includes('@'), 'The email must have an @'],
  password: [(value: string) => value.length >= 6, 'The password must have more than 6 letters'],
  displayName: [(value: string) => value.length >= 1, 'The name is required'],
};

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { formState, onInputChange, isFormValid, displayNameValid, emailValid, passwordValid } =
    useForm(formData, formValidations);
  const { email, password, displayName } = formState;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    console.log(formState);
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid2 container direction="column">
          <Grid2 container sx={{ mt: 2 }}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="John Doe"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid2>
          <Grid2 container sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@example.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid2>
          <Grid2 container sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{ xs: 12 }}>
              <Button variant="contained" fullWidth type="submit">
                Create Account
              </Button>
            </Grid2>

            <Grid2 container direction="row" justifyContent="end" sx={{ width: '100%' }}>
              <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Login
              </Link>
            </Grid2>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
