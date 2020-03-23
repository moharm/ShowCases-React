import React from 'react';
import Header from './Header';
import Columns from './Columns';
import { ListRadioButtonProps } from './types';

const ListRadioButton = (props: ListRadioButtonProps) => {
  const {
    data,
    headerIconButtonOnClick,
    itemIconButtonOnClick,
    itemOnChange
  } = props;
  const { header, colomns } = data;

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

    itemOnChange(event, checked, colomnsUpdated);
  };

  return (
    <div>
      <Header
        key="header"
        header={header}
        iconButtonOnClick={headerIconButtonOnClick}
      />
      <Columns
        key="columns"
        columns={colomns}
        itemOnChange={hundleItemOnChange}
        iconButtonOnClick={itemIconButtonOnClick}
      />
    </div>
  );
};

export default ListRadioButton;
