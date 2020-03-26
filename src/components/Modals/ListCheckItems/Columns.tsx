import React from 'react';
import { ColumnsProps } from './types';
import { RadioGroup } from '@material-ui/core';
import CheckboxList from './CheckboxList';
import RadioButtonList from './RadioButtonList';

function Columns(props: ColumnsProps) {
  const { columns, itemOnChange, iconButtonOnClick, params } = props;

  return (
    <div style={{ display: 'flex' }}>
      {params.type === 'checkBox' ? (
        columns.map((colomn, index) => (
          <CheckboxList //checkbox
            items={colomn.items}
            itemOnChange={itemOnChange}
            iconButtonOnClick={iconButtonOnClick}
            disabled={false}
            params={params}
          />
        ))
      ) : (
        <RadioGroup name={params.name} onChange={itemOnChange}>
          {columns.map((colomn, index) => (
            <RadioButtonList //radio
              items={colomn.items}
              itemOnChange={itemOnChange}
              iconButtonOnClick={iconButtonOnClick}
              disabled={false}
              params={params}
            />
          ))}
        </RadioGroup>
      )}
    </div>
  );
}

export default Columns;
