import { Box } from '@mui/material';
import { Navbar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Navbar */}
      <Navbar drawerWidth={drawerWidth} />

      {/* Sidebar */}

      {/* Main */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Toolbar */}

        {children}
      </Box>
    </Box>
  );
};
