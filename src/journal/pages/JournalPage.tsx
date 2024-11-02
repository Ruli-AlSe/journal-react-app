import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { NoteView, NothingSelectedView } from '../views';
import { JournalLayout } from '../layout/JournalLayout';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia praesentium tenetur
        similique totam dicta quis exercitationem! Id eum sapiente quae ipsum quibusdam corporis
        natus voluptates error dolores obcaecati! Expedita.
      </Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
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
      >
        {' '}
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};
