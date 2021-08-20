
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../hooks/useStyles';
import React from 'react';

export const Footer:React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Products List
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Muhammad Salman (FrontEnd Developer Inc.)
      </Typography>
    </footer>
  );
};
