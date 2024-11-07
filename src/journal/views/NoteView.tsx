import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid2, TextField, Typography } from '@mui/material';

import { ImageGallery } from '../components';
import { Note, useAppSelector } from '../../store';
import { useForm } from '../../hooks';
import { useMemo } from 'react';

export const NoteView = () => {
  const { active: note } = useAppSelector((state) => state.journal);

  const { formState, onInputChange } = useForm(note as Note);
  const { title, body, date } = formState;

  const dateString = useMemo(() => {
    const newDate = new Date(date);

    return newDate.toUTCString();
  }, [date]);

  return (
    <Grid2
      container
      direction="column"
      justifyContent="space-between"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid2 container display="flex" direction="row">
        <Typography fontSize={39} fontWeight="light">
          {dateString}
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
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid2>

      <ImageGallery />
    </Grid2>
  );
};
