import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid2, IconButton, Toolbar, Typography } from '@mui/material';
import { startLogout, useAppDispatch } from '../../store';

export const Navbar = ({ drawerWidth }: { drawerWidth: number }) => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <AppBar
      position="fixed"
      sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` } }}
    >
      <Toolbar>
        <IconButton color="inherit" edge="start" sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuOutlined />
        </IconButton>

        <Grid2
          container
          direction="row"
          justifyContent="space-between"
          sx={{ width: '100%' }}
          alignContent="center"
        >
          <Typography variant="h6" noWrap component="div">
            Journal app
          </Typography>

          <IconButton color="error" onClick={onLogout}>
            <LogoutOutlined />
          </IconButton>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};
