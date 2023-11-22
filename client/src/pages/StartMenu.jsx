import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

function StartMenu() {
  return (
    <div>
      <Typography> start game</Typography>
      <NavLink to="/play">
        <Button>
          Start Game
        </Button>
      </NavLink>
    </div>
  );
}

export default StartMenu;

// three js implementation