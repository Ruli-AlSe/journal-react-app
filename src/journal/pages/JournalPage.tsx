import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officia praesentium tenetur
        similique totam dicta quis exercitationem! Id eum sapiente quae ipsum quibusdam corporis
        natus voluptates error dolores obcaecati! Expedita.
      </Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  );
};
