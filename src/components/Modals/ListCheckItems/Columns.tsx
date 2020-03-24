import React from 'react';
import { ColumnsProps } from './types';
import { RadioGroup } from '@material-ui/core';
import CheckboxList from './CheckboxList';
import RadioButtonList from './RadioButtonList';

function Columns(props: ColumnsProps) {
  const { columns, itemOnChange, iconButtonOnClick, params } = props;

  return (
    <table>
      <tbody>
        <tr style={{ display: 'flex' }}>
          {params.type === 'checkBox' ? (
            columns.map((colomn, index) => (
              <td key={index} style={{ display: 'block' }}>
                <CheckboxList //checkbox
                  items={colomn.items}
                  itemOnChange={itemOnChange}
                  iconButtonOnClick={iconButtonOnClick}
                  disabled={false}
                  params={params}
                />
              </td>
            ))
          ) : (
            <RadioGroup
              name={params.name}
              //   value={value}
              onChange={itemOnChange}
            >
              {columns.map((colomn, index) => (
                <td key={index} style={{ display: 'block' }}>
                  <RadioButtonList //radio
                    items={colomn.items}
                    itemOnChange={itemOnChange}
                    iconButtonOnClick={iconButtonOnClick}
                    disabled={false}
                    params={params}
                  />
                </td>
              ))}
            </RadioGroup>
          )}
        </tr>
      </tbody>
    </table>
  );
}

export default Columns;
