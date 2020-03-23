import React, { useState, useEffect, ChangeEvent } from 'react';
import ListRadioButton from '../../Modals/ListRadioButton';
import { data } from '../../../assets/mock/radioButtonData';
import { Data } from '../../Modals/ListRadioButton/types';

const ListRadioButtonDemo: React.FC = () => {
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
    checked: boolean,
    newColumns: Data['colomns']
  ) => {
    setState((prevState: Data) => ({
      ...prevState,
      newColumns
    }));
  };

  return (
    <div>
      <ListRadioButton
        data={state}
        headerIconButtonOnClick={headerIconButtonHundleClick}
        itemIconButtonOnClick={itemIconButtonHundleClick}
        itemOnChange={itemOnChange}
      />
    </div>
  );
};

export default ListRadioButtonDemo;
