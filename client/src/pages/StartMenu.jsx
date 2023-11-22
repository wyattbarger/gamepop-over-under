import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

function StartMenu() {
  return (
    <div>
      <Typography> GAME POP</Typography>
      <NavLink to="/game">
        <Button>
          Start Game
        </Button>
      </NavLink>
    </div>
  );
}

export default StartMenu;

// three js implementation