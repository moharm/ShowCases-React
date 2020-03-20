import React from 'react';
import { Container, Box, Button } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import Upperdrawer from './Upperdrawer';
import { useStyles, useIconsStyles } from './assets/style';
import { code } from './assets/code';
import Drawer from '../../Modals/Drawer';
import IconButton from '../../Modals/IconButton';
import DisplayCode from '../../Modals/DisplayCode';

interface DrawerView {
  isDrawerOpen: boolean;
  DrawerSide: 'top' | 'left' | 'bottom' | 'right';
  isHorizontal: boolean;
  displayCode: boolean;
  DisplayCodeoptions: object;
}
type TDrawerSide = 'top' | 'left' | 'bottom' | 'right';

const DrawerView: React.FC = () => {
  const classes = useStyles();
  const initialDisplayCodeoptions = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: false,
    theme: 'vs-dark'
  };
  const [state, setState] = React.useState<DrawerView>({
    isDrawerOpen: false,
    DrawerSide: 'right',
    displayCode: false,
    isHorizontal: true,
    DisplayCodeoptions: initialDisplayCodeoptions
  });

  /* Open drawer */
  const toggleDrawer = (
    side: TDrawerSide,
    open: boolean,
    isHorizontal: boolean
  ) => {
    setState({
      ...state,
      DrawerSide: side,
      isDrawerOpen: open,
      isHorizontal: isHorizontal
    });
  };

  /* close drawer */
  const closeDrawer = () => {
    setState({ ...state, isDrawerOpen: false });
  };

  /* display code of the demo */
  const displayCodeSource = () => {
    setState({
      ...state,
      displayCode: !state.displayCode
    });
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.displayComponents}>
        <Box className={classes.BottonsBox}>
          <Button onClick={() => toggleDrawer('left', true, true)}>
            Open Left
          </Button>
          <Button onClick={() => toggleDrawer('right', true, true)}>
            Open Right
          </Button>
          <Button onClick={() => toggleDrawer('top', true, false)}>
            Open Top
          </Button>
          <Button onClick={() => toggleDrawer('bottom', true, false)}>
            Open Bottom
          </Button>
        </Box>

        <Drawer
          id="MyDrawer"
          isOpen={state.isDrawerOpen}
          side={state.DrawerSide}
          onClose={() => closeDrawer()}
        >
          <Upperdrawer
            side={state.DrawerSide}
            onClose={closeDrawer}
            isHorizontal={state.isHorizontal}
          ></Upperdrawer>
        </Drawer>

        <Box className={classes.ButtonsDispalyCode}>
          <IconButton
            style={useIconsStyles().iconBotton}
            onClick={() => displayCodeSource()}
            size="small"
          >
            <CodeIcon htmlColor="black" fontSize="small" />
          </IconButton>
        </Box>
      </Container>
      <Box className={classes.CodeSource}>
        {state.displayCode && (
          <DisplayCode
            code={code}
            options={state.DisplayCodeoptions}
          ></DisplayCode>
        )}
      </Box>
    </div>
  );
};

export default DrawerView;
