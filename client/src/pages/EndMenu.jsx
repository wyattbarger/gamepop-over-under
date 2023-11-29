import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

// Add the history prop to the EndMenu component, as indicated by react-router docs, so t.
function EndMenu() {
  return (
    <div>
      <Typography> start game</Typography>
      <NavLink to="/play">
        <Button>
          play again
        </Button>
      </NavLink>
    </div>
  );
}

export default EndMenu;
// leaderboard, way to add yourself into leaderboard, play again or start menu