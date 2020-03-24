import React, { useState, useEffect, ChangeEvent } from 'react';
import { data } from '../../../assets/mock/checkBoxData';
import { Data } from '../../Modals/ListCheckBox/types';
import ListCheckBox from '../../Modals/ListCheckBox';

const ListCheckBoxDemo: React.FC = () => {
  const [state, setState] = useState<Data>(data);
  const headerIconButtonHundleClick = (event: React.MouseEvent<any>) => {
    event.persist(); // Event Pooling
    alert("event from header's iconButtom");
  };
  const itemIconButtonHundleClick = (event: React.MouseEvent<any>) => {
    event.persist(); // Event Pooling
    alert("event from item's iconButtom");
  };

  const itemOnChange = (
    event: ChangeEvent,

    newColumns: Data['body']['colomns']
  ) => {
    //log the items updated
    console.log(newColumns);
  };

  return (
    <div>
      <ListCheckBox
        data={state}
        headerIconButtonOnClick={headerIconButtonHundleClick}
        itemIconButtonOnClick={itemIconButtonHundleClick}
        itemOnChange={itemOnChange}
      />
    </div>
  );
};

export default ListCheckBoxDemo;
