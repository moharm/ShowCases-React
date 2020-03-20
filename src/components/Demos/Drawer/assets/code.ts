export const code = ` 
import React from "react";
import { Container,Box,Button } from "@material-ui/core";
import Upperdrawer from "../../Modals/Upperdrawer";

const DrawerView = () => {
  return (
    <Container maxWidth="sm" className={classes.displayComponents}>
      <Button onClick={toggleDrawer("left", true)}>Open Left</Button>
      <Button onClick={toggleDrawer("right", true)}>Open Right</Button>
      <Button onClick={toggleDrawer("top", true)}>Open Top</Button>
      <Button onClick={toggleDrawer("bottom", true)}>Open Bottom</Button>
    </Box>

    <DrawerModal
    id="MyDrawer"
    isOpen={state.isDrawerOpen}
    side={state.DrawerSide}
    onClose={() => closeDrawer()}
    > 
    {/* could it be any component */}
      {MyComponent}
    </Container>
)
};

export default DrawerView;
`;
