import React, { useState } from 'react';
import Header from './Header';
import Columns from './Columns';
import { Data, ListCheckItemsProps, Items, Column } from './types';

const ListCheckItems = (props: ListCheckItemsProps) => {
  const {
    data,
    headerIconButtonOnClick,
    itemIconButtonOnClick,
    itemOnChange
  } = props;
  const [state, setState] = useState<Data>(data);

  const changeItemsState = (
    column: Column,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    column.items.map(item => {
      if (item.id === event.target.name) {
        item.isChecked = !item.isChecked;
      } else {
        if (data.body.params.type === 'radioButton') {
          item.isChecked = false;
        }
      }
      return changeChildItemState(item, event);
    });
    return column;
  };
  
  const changeChildItemState = (
    item: Items[0],
    event: React.ChangeEvent<HTMLInputElement>
  ): Items[0] => {
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
        // if the parent is unchecked
        // we need to uncheck his children also
        if (!item.isChecked && child.isChecked) {
          child.isChecked = !child.isChecked;
        }
        return child;
      });
    }
    return item;
  };

  // hundle items changes and change the state with updated items,
  // it send also updated items object by itemOnChange function
  const hundleItemOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist(); // Event Pooling
    const columnsUpdated = data.body.columns.map(column => {
      return changeItemsState(column, event);
    });

    setState((prevState: Data) => ({
      ...prevState,
      columnsUpdated
    }));

    itemOnChange(event, columnsUpdated);
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
        columns={state.body.columns}
        params={state.body.params}
        itemOnChange={hundleItemOnChange}
        iconButtonOnClick={itemIconButtonOnClick}
      />
    </div>
  );
};

export default ListCheckItems;
