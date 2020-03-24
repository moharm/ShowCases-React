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

  const hundleItemOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist(); // Event Pooling
    const colomnsUpdated = data.body.colomns.map(colomn => {
      colomn.items.map(item => {
        if (item.id === event.target.name) {
          item.isChecked = !item.isChecked;
        }
        if (item.childs) {
          item.childs.items.map(child => {
            if (child.id === event.target.name) {
              child.isChecked = !child.isChecked;
            }
            if (!item.isChecked && child.isChecked) {
              child.isChecked = !child.isChecked;
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

    itemOnChange(event, colomnsUpdated);
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
        columns={state.body.colomns}
        params={state.body.params}
        itemOnChange={hundleItemOnChange}
        iconButtonOnClick={itemIconButtonOnClick}
      />
    </div>
  );
};

export default ListCheckBox;
