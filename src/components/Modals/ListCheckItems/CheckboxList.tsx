import React from 'react';
import {
  FormControlLabel,
  Checkbox,
  makeStyles,
  Theme,
  createStyles,
  RadioGroup
} from '@material-ui/core';
import IconButton from '../IconButton';
import { CheckboxListProps } from './types';
import RadioButtonList from './RadioButtonList';

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

const CheckboxList = (props: CheckboxListProps) => {
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
                value={item.label}
                name={item.id}
                control={<Checkbox color="primary" />}
                label={item.label}
                labelPlacement="end"
                checked={item.isChecked}
                onChange={itemOnChange}
                disabled={disabled}
              />
              {hasIconButton && Icon && (
                // Icon Button *******************
                <IconButton
                  size="small"
                  style={classes.icon}
                  onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                    iconButtonOnClick(e, item)
                  }
                  disabled={disabled}
                >
                  <Icon id={item.id} />
                </IconButton>
              )}
              <div style={{ marginLeft: '10px' }}>
                {item.hasChild && item.childs ? (
                  // Children *********************
                  item.childs.params.type === 'radioButton' ? (
                    <RadioGroup name="children" onChange={itemOnChange}>
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

export default CheckboxList;
