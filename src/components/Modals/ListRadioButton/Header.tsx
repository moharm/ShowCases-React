import React from 'react';
import { Box, createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import IconButton from '../IconButton';
import { HeaderProps } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    title: {
      marginRight: 10
    },
    icon: {
      color: 'green',
      height: '20px',
      '& .MuiSvgIcon-root': {
        width: '16px'
      }
    }
  })
);

const Header = (props: HeaderProps) => {
  const classes = useStyles();
  const { header, iconButtonOnClick } = props;
  const { title, hasIconButton, Icon } = header!;

  return (
    <div className={classes.root}>
      <Box component="span" className={classes.title}>
        {title}
      </Box>
      {hasIconButton && Icon && (
        <IconButton
          style={classes.icon}
          size="small"
          color="inherit"
          onClick={iconButtonOnClick}
        >
          <Icon />
        </IconButton>
      )}
    </div>
  );
};

export default Header;
