import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid2, TextField, Typography } from '@mui/material';

import { ImageGallery } from '../components';

export const NoteView = () => {
  return (
    <Grid2
      container
      direction="column"
      justifyContent="space-between"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid2 display="flex" direction="row" sx={{}}>
        <Typography fontSize={39} fontWeight="light">
          November 2, 2024
        </Typography>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid2>

      <Grid2 container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Write a title"
          label="Title"
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={5}
        />
      </Grid2>

      <ImageGallery />
    </Grid2>
  );
};
