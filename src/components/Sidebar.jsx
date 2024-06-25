import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Drawer open={isOpen} onClose={toggleSidebar}>
      <List>
        <ListItem button component={Link} to="/" onClick={toggleSidebar}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/reports" onClick={toggleSidebar}>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button component={Link} to="/kanban" onClick={toggleSidebar}>
          <ListItemText primary="Kanban Board" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
