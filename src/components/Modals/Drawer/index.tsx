import React from 'react';
import { default as DrawerCom } from '@material-ui/core/Drawer';

interface DrawerProps {
  id: string;
  isOpen: boolean;
  side: 'top' | 'left' | 'bottom' | 'right';
  onClose: () => void;
  children?: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = props => {
  const { id, isOpen, side } = props;

  return (
    <DrawerCom id={id} open={isOpen} anchor={side} {...props}>
      {/* could it be any component */}
      {props.children}
    </DrawerCom>
  );
};

// Set default props
Drawer.defaultProps = {
  isOpen: false,
  side: 'left'
};

export default Drawer;
