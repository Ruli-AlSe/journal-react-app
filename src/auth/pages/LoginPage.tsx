import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid2, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailAndPassword, useAppSelector } from '../../store';
import { useAppDispatch } from '../../store';
import { useMemo } from 'react';

export const LoginPage = () => {
  const { status, errorMessage } = useAppSelector((state) => state.auth);
  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const dispatch = useAppDispatch();

  const { formState, onInputChange } = useForm({
    email: '',
    password: '',
  });
  const { email, password } = formState;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(startLoginWithEmailAndPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid2 container direction="column">
          <Grid2 container sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@example.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
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
            />
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{ xs: 12 }} display={!!errorMessage ? '' : 'none'}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button variant="contained" fullWidth type="submit" disabled={isAuthenticating}>
                Login
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>

            <Grid2 container direction="row" justifyContent="end" sx={{ width: '100%' }}>
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Create an account
              </Link>
            </Grid2>
          </Grid2>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
