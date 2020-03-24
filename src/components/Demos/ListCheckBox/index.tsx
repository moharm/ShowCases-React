import React, { useState, ChangeEvent } from 'react';
import { Data, Items } from '../../Modals/ListCheckItems/types';
import { data } from '../../../assets/mock/checkBoxData';
import ListCheckItems from '../../Modals/ListCheckItems';

const ListCheckBoxDemo: React.FC = () => {
  const [state, setState] = useState<Data>(data);

  //hundle click of header icon
  const headerIconButtonHundleClick = (
    event: React.MouseEvent<HTMLInputElement>
  ) => {
    event.persist(); //=> Event Pooling
    alert("event from header's iconButtom");
  };

  //hundle click of item icon
  const itemIconButtonHundleClick = (
    event: React.MouseEvent<any>,
    item: Items[0]
  ) => {
    event.persist(); //=> Event Pooling
    alert("event from item's iconButtom");
    console.log(event);
    console.log(item);
  };
  //hundle change of item state
  const itemOnChange = (
    event: ChangeEvent,
    newColumns: Data['body']['colomns']
  ) => {
    //log the items updated
    console.log(newColumns);
  };

  return (
    <div>
      <ListCheckItems
        data={state}
        headerIconButtonOnClick={headerIconButtonHundleClick}
        itemIconButtonOnClick={itemIconButtonHundleClick}
        itemOnChange={itemOnChange}
      />
    </div>
  );
};

export default ListCheckBoxDemo;
