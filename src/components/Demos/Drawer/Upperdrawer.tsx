import React, { useState } from 'react';
import {
  Typography,
  Button,
  Grid,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core';
import Drawer from '../../Modals/Drawer';
import clsx from 'clsx';

const Upperdrawer = (props: any) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      rootSide: {
        width: 600,
        height: '100vh'
      },
      rootvertical: {
        width: '100%',
        height: '20vh'
      },
      leftArea: {
        backgroundColor: '#cfe8aa',
        height: '100%'
      },
      rightArea: {
        backgroundColor: '#cfe8fc',
        height: '100%'
      },
      upperDrawerVertical: {
        backgroundColor: 'red',
        height: '100vh',
        width: '25em'
      },
      upperDrawerHorisantal: {
        backgroundColor: 'red',
        height: '20vh',
        width: '100%'
      },
      dataSide: {
        zIndex: 2000
      }
    })
  );
  const classes = useStyles();
  const { side, onClose, isHorizontal } = props;
  const initialState = {
    isUpperDrawerOpen: false,
    side: side
  };
  const [state, setstate] = useState(initialState);

  const ToggeleUpperDrawer = () => {
    setstate({ ...state, isUpperDrawerOpen: !state.isUpperDrawerOpen });
  };
  return (
    <div>
      <Grid
        container
        className={clsx(
          { [classes.rootSide]: isHorizontal },
          { [classes.rootvertical]: !isHorizontal }
        )}
      >
        <Grid item xs={3} className={clsx(classes.leftArea)}>
          <Button
            variant="contained"
            className={clsx(classes.dataSide)}
            color="secondary"
          >
            test1
          </Button>
          <Button
            variant="contained"
            className={clsx(classes.dataSide)}
            color="secondary"
          >
            test2
          </Button>
          <Button
            variant="contained"
            className={clsx(classes.dataSide)}
            color="secondary"
          >
            test3
          </Button>
        </Grid>
        <Grid item xs={9} className={classes.rightArea}>
          <Button
            onClick={() => ToggeleUpperDrawer()}
            variant="contained"
            color="primary"
          >
            UpperDrawer
          </Button>
          <Button
            onClick={() => onClose()}
            variant="contained"
            color="secondary"
          >
            close
          </Button>
          <Drawer
            id="myUpperDrawer"
            isOpen={state.isUpperDrawerOpen}
            side={state.side}
            onClose={() => ToggeleUpperDrawer()}
          >
            <Typography
              component="div"
              className={clsx(
                { [classes.upperDrawerHorisantal]: !isHorizontal },
                { [classes.upperDrawerVertical]: isHorizontal }
              )}
              onClick={() => ToggeleUpperDrawer()}
            ></Typography>
          </Drawer>
        </Grid>
      </Grid>{' '}
    </div>
  );
};

export default Upperdrawer;
