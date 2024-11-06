import { CircularProgress, Grid2 } from '@mui/material';

export const CheckingAuth = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid2 container direction="row" justifyContent="center">
        <CircularProgress color="warning" size={90} />
      </Grid2>
    </Grid2>
  );
};
