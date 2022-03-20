import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Drawer,List,ListItem, ListItemText,ButtonBase} from '@mui/material';
export default function NavbarComp() {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Box style={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:'#262524'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={()=>setIsDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />

        <Drawer open={isDrawerOpen} >
          <List >
            <ListItem button>
         <Button onClick={()=>window.location.href = "https://4thought.egrep6021ad.repl.co/"}>Home </Button>
            </ListItem>

            <ListItem button >
              <Button onClick={()=>window.location.href = "https://4thought.egrep6021ad.repl.co/aboutPage"}>About </Button>
          
            </ListItem>

          </List>
        </Drawer>

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            4Thought
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
