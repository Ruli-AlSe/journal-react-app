import { StarOutline } from '@mui/icons-material';
import { Grid2, Typography } from '@mui/material';

export const NothingSelectedView = () => {
  return (
    <Grid2
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
    >
      <Grid2 size={{ xs: 12 }} sx={{ width: { sm: '100%' }, textAlign: 'center' }}>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid2>
      <Grid2 size={{ xs: 12 }} sx={{ width: { sm: '100%' }, textAlign: 'center' }}>
        <Typography color="white" variant="h5">
          Select or create a new note
        </Typography>
      </Grid2>
    </Grid2>
  );
};
