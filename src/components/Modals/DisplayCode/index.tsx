import React from 'react';
//@ts-ignore
import MonacoEditor from '@uiw/react-monacoeditor';
import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 400,
      width: '50%',
      margin: 'auto'
    }
  })
);

const DisplayCode = (props: any) => {
  const classes = useStyles();
  const { code, options } = props;

  return (
    <div className={classes.root}>
      <MonacoEditor language="javascript" value={code} options={options} />
    </div>
  );
};

export default DisplayCode;
