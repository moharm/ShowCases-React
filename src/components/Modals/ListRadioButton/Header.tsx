import React from 'react';
import { Box, createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import IconButton from '../IconButton';
import { Data } from '.';

interface HeaderProps {
  headerData: Data['header'];
  iconButtonOnClick?: (arg: React.MouseEvent<HTMLInputElement>) => void;
}

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
  const { headerData, iconButtonOnClick } = props;
  const { title, hasIconButton, Icon } = headerData;

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
