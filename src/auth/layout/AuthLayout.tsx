import { Grid2, Typography } from '@mui/material';

interface Props {
  children: React.ReactNode;
  title: string;
}

export const AuthLayout = ({ children, title }: Props) => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid2
        container
        className="box-shadow"
        direction="column"
        sx={{
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2,
          width: { xs: '100%', sm: '40%' },
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {children}
      </Grid2>
    </Grid2>
  );
};
