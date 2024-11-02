import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid2, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid2 container direction="column">
          <Grid2 container sx={{ mt: 2 }}>
            <TextField label="Full Name" type="text" placeholder="John Doe" fullWidth />
          </Grid2>
          <Grid2 container sx={{ mt: 2 }}>
            <TextField label="Email" type="email" placeholder="email@example.com" fullWidth />
          </Grid2>
          <Grid2 container sx={{ mt: 2 }}>
            <TextField label="Password" type="password" placeholder="password" fullWidth />
          </Grid2>

          <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid2 size={{ xs: 12 }}>
              <Button variant="contained" fullWidth>
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
