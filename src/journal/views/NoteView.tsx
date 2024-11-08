import { useEffect, useMemo, useRef } from 'react';
import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid2, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { ImageGallery } from '../components';
import {
  Note,
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
  useAppDispatch,
  useAppSelector,
} from '../../store';
import { useForm } from '../../hooks';

export const NoteView = () => {
  const dispatch = useAppDispatch();
  const { active: note, messageSaved, isSaving } = useAppSelector((state) => state.journal);

  const { formState, onInputChange } = useForm(note as Note);
  const { title, body, date } = formState;

  const dateString = useMemo(() => {
    const newDate = new Date(date);

    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Note updated', messageSaved, 'success');
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files === null || target.files.length === 0) return;

    dispatch(startUploadingFiles(target.files));
  };

  const onDeleteNote = () => {
    dispatch(startDeletingNote());
  };

  return (
    <Grid2
      container
      direction="column"
      justifyContent="space-between"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid2 container display="flex" direction="row" justifyContent="space-between">
        <Grid2 display="flex" justifyContent="left">
          <Typography fontSize={39} fontWeight="light">
            {dateString}
          </Typography>
        </Grid2>

        <Grid2 display="flex" justifyContent="right">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={onFileInputChange}
            style={{ display: 'none' }}
          />

          <IconButton
            color="primary"
            disabled={isSaving}
            onClick={() => fileInputRef.current?.click()}
          >
            <UploadOutlined />
          </IconButton>
          <Button color="primary" sx={{ padding: 2 }} onClick={onSaveNote} disabled={isSaving}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid2>
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

      <Grid2 container justifyContent="end">
        <Button onClick={onDeleteNote} color="error" sx={{ marginTop: 2 }}>
          <DeleteOutline />
          Delete
        </Button>
      </Grid2>

      <ImageGallery images={note?.imageUrls} />
    </Grid2>
  );
};
