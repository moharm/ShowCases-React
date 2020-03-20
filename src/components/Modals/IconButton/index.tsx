import React, { ReactNode } from 'react';
import { default as IconButtonCom } from '@material-ui/core/IconButton';

interface propstype {
  size?: 'medium' | 'small' | undefined;
  color?: 'inherit' | 'default' | 'primary' | 'secondary' | undefined;
  BackColor?: string;
  borderStyle?: string;
  onClick?: (arg: React.MouseEvent<any>) => void;
  children?: ReactNode;
  style: string;
  otherProps?: any;
}

const IconButton = (props: propstype & any) => {
  const { size, color, onClick, children, style, otherProps } = props;

  return (
    <IconButtonCom
      className={style}
      size={size}
      color={color}
      aria-label="upload picture"
      component="span"
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </IconButtonCom>
  );
};

export default IconButton;
