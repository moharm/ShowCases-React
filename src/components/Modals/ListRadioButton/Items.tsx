import React, { ChangeEvent, useState } from 'react';
import { Data } from '.';
import {
  FormControlLabel,
  Checkbox,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core';
import IconButton from '../IconButton';
/* eslint-disable */
interface ItemsProps {
  itemsData: Data['colomns'];
  iconButtonOnClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  itemOnChange: (event: React.ChangeEvent<any>, checked: boolean) => void;
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

const Items = (props: ItemsProps) => {
  const { itemsData, itemOnChange, iconButtonOnClick } = props;
  // const [state, setstate] = useState(itemsData)
  const classes = useStyles();

  // const hundleChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   checked: boolean
  // ) => {

  // };
  return (
    <>
      <table>
        <tbody>
          <tr>
            {itemsData.map(colomn => (
              <td>
                <table>
                  <tbody>
                    {colomn.items.map(item => (
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
                                    checked={item.isChecked}
                                  />
                                ))
                              : undefined}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Items;
