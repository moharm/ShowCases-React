import React, { useState } from 'react';
import Header from './Header';
import Columns from './Columns';
import { Data, ListCheckItemsProps } from './types';

const ListCheckItems = (props: ListCheckItemsProps) => {
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
        } else {
          if (data.body.params.type === 'radioButton') {
            item.isChecked = false;
          }
        }
        if (item.childs) {
          item.childs.items.map(child => {
            if (child.id === event.target.name) {
              child.isChecked = !child.isChecked;
              item.isChecked = true;
            } else {
              if (item.childs!.params.type === 'radioButton') {
                child.isChecked = false;
              }
            }
            if (!item.isChecked && child.isChecked) {
              child.isChecked = !child.isChecked;
            }
            return child;
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

export default ListCheckItems;
