import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { purpleTheme } from './purple';

export const AppTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
