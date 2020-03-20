import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '1em'
    },
    displayComponents: {
      padding: '2em 0'
    },
    list: {
      width: 500
    },
    fullList: {
      width: 'auto',
      height: 250
    },
    BottonsBox: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      margin: '0 auto'
    },
    ButtonsDispalyCode: {
      display: 'flex',
      float: 'right'
    },
    CodeSource: {
      marginTop: 10
    }
  })
);

export const useIconsStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconBotton: {
      border: '1px solid  #c6c6c6',
      borderRadius: '3px',
      height: '2pc',
      width: '2pc'
    }
  })
);
