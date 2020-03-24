import React from 'react';
import {
  FormControlLabel,
  Checkbox,
  makeStyles,
  Theme,
  createStyles,
  Radio,
  RadioGroup
} from '@material-ui/core';
import IconButton from '../IconButton';
import { ItemsProps } from './types';
import CheckboxList from './CheckboxList';

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

const RadioButtonList = (props: ItemsProps) => {
  const { items, itemOnChange, iconButtonOnClick, params, disabled } = props;
  const { Icon, hasIconButton, type } = params;
  const classes = useStyles();

  return (
    <table>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>
              <FormControlLabel
                key={item.id}
                name={item.id}
                value={item.label}
                control={<Radio />}
                label={item.label}
                //   checked={item.isChecked}
                disabled={disabled}
              />
              {hasIconButton && Icon && (
                <IconButton
                  size="small"
                  style={classes.icon}
                  onClick={iconButtonOnClick}
                >
                  <Icon id={item.label} />
                </IconButton>
              )}
              <div style={{ marginLeft: '10px' }}>
                {item.hasChild && item.childs ? (
                  item.childs.params.type === 'radioButton' ? (
                    <RadioGroup
                      name="children"
                      //   value={value}
                      onChange={itemOnChange}
                    >
                      <RadioButtonList
                        items={item.childs.items}
                        itemOnChange={itemOnChange}
                        iconButtonOnClick={iconButtonOnClick}
                        disabled={item.isChecked ? false : true}
                        params={item.childs.params}
                      />
                    </RadioGroup>
                  ) : (
                    <CheckboxList
                      items={item.childs.items}
                      itemOnChange={itemOnChange}
                      iconButtonOnClick={iconButtonOnClick}
                      disabled={item.isChecked ? false : true}
                      params={item.childs.params}
                    />
                  )
                ) : (
                  undefined
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RadioButtonList;
