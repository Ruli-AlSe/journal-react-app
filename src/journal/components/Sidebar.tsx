import { TurnedInNot } from '@mui/icons-material';
import {
  Box,
  Divider,
  Drawer,
  Grid2,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

export const Sidebar = ({ drawerWidth }: { drawerWidth: number }) => {
  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth } }} flexShrink={{ sm: 0 }}>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Raul Almanza
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {['January', 'February', 'March', 'April'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>

                <Grid2 container>
                  <ListItemText primary={text} />

                  <ListItemText
                    secondary={
                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                    }
                  />
                </Grid2>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};