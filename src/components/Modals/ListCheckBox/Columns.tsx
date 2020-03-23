import React from 'react';
import Items from './Items';
import { ColumnsProps } from './types';

function Columns(props: ColumnsProps) {
  const { columns, itemOnChange, iconButtonOnClick } = props;

  return (
    <table>
      <tbody>
        <tr style={{ display: 'flex' }}>
          {columns.map((colomn, index) => (
            <td key={index} style={{ display: 'block' }}>
              <table>
                <tbody>
                  <Items
                    items={colomn.items}
                    itemOnChange={itemOnChange}
                    iconButtonOnClick={iconButtonOnClick}
                  />
                </tbody>
              </table>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Columns;
