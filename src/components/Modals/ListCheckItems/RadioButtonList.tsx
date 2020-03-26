import React from 'react';
import {
  FormControlLabel,
  makeStyles,
  Theme,
  createStyles,
  Radio,
  RadioGroup
} from '@material-ui/core';
import IconButton from '../IconButton';
import CheckboxList from './CheckboxList';
import { ListRadioButtonProps } from './types';

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

const RadioButtonList = (props: ListRadioButtonProps) => {
  const { items, itemOnChange, iconButtonOnClick, params, disabled } = props;
  const { Icon, hasIconButton } = params;
  const classes = useStyles();
  return (
    <div style={{ display: 'block', padding: '0 0 0 10px' }}>
      {items.map(item => (
        <div key={item.id}>
          <FormControlLabel
            key={item.id}
            name={item.id}
            value={item.id}
            control={<Radio />}
            label={item.label}
            disabled={disabled}
          />
          {hasIconButton && Icon && (
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
          {/* Children *********************** */}
          <div style={{ marginLeft: '10px' }}>
            {item.hasChild && item.childs ? (
              item.childs.params.type === 'radioButton' ? (
                <RadioGroup
                  name="children"
                  value={
                    item.isChecked &&
                    item.childs.items.some(child => child.isChecked)
                      ? item.childs.items.find(item => item.isChecked === true)!
                          .id
                      : null
                  }
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
            {/* end cildren ************** */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RadioButtonList;
