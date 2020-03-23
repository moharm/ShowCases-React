import React, { useState } from 'react';
import Header from './Header';
import Columns from './Columns';
import { ListRadioButtonProps, Data } from './types';

const ListCheckBox = (props: ListRadioButtonProps) => {
  const {
    data,
    headerIconButtonOnClick,
    itemIconButtonOnClick,
    itemOnChange
  } = props;
  const [state, setState] = useState<Data>(data);

  const hundleItemOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    event.persist(); // Event Pooling
    const colomnsUpdated = data.colomns.map(colomn => {
      colomn.items.map(item => {
        if (item.id === event.target.name) {
          item.isChecked = checked;
        }
        if (item.childs) {
          item.childs.map(child => {
            if (child.id === event.target.name) {
              child.isChecked = checked;
            }
            if (!item.isChecked && child.isChecked) {
              child.isChecked = checked;
            }
          });
        }
        return item;
      });
      return colomn;
    });

    setState((prevState: Data) => ({
      ...prevState,
      colomnsUpdated
    }));

    itemOnChange(event, checked, colomnsUpdated);
  };

  return (
    <div>
      <Header
        key="header"
        header={state.header}
        iconButtonOnClick={headerIconButtonOnClick}
      />
      <Columns
        key="columns"
        columns={state.colomns}
        itemOnChange={hundleItemOnChange}
        iconButtonOnClick={itemIconButtonOnClick}
      />
    </div>
  );
};

export default ListCheckBox;
