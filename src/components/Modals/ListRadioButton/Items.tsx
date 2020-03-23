import React, { ChangeEvent, useState } from 'react';
import {
  FormControlLabel,
  Checkbox,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core';
import IconButton from '../IconButton';
import { ItemsProps } from './types';

//style should be replace by props or by theme ???
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

const Items = (props: ItemsProps) => {
  const { items, itemOnChange, iconButtonOnClick } = props;
  const classes = useStyles();

  return (
    <>
      {items.map(item => (
        <tr>
          <td>
            <FormControlLabel
              key={item.id}
              value={item.label}
              name={item.id}
              control={<Checkbox color="primary" />}
              label={item.label}
              labelPlacement="end"
              checked={item.isChecked}
              onChange={itemOnChange}
            />
            {item.hasIconButton && item.Icon && (
              <IconButton
                size="small"
                style={classes.icon}
                onClick={iconButtonOnClick}
              >
                <item.Icon id={item.label} />
              </IconButton>
            )}
            <div style={{ marginLeft: '10px' }}>
              {item.hasChild && item.childs
                ? item.childs.map(child => (
                    <FormControlLabel
                      key={child.id}
                      value={child.label}
                      name={child.id}
                      control={<Checkbox color="primary" />}
                      label={child.label}
                      labelPlacement="end"
                      checked={child.isChecked}
                      onChange={itemOnChange}
                      disabled={item.isChecked ? false : true}
                    />
                  ))
                : undefined}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Items;
