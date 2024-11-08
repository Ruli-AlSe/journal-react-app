import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { NoteView, NothingSelectedView } from '../views';
import { JournalLayout } from '../layout/JournalLayout';
import { startNewNote, useAppDispatch, useAppSelector } from '../../store';

export const JournalPage = () => {
  const dispatch = useAppDispatch();
  const { isSaving, active } = useAppSelector((state) => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia praesentium tenetur
        similique totam dicta quis exercitationem! Id eum sapiente quae ipsum quibusdam corporis
        natus voluptates error dolores obcaecati! Expedita.
      </Typography> */}

      {!!active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
        color="primary"
        disabled={isSaving}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};
