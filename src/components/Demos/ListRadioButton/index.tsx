import React, { useState, useEffect } from 'react';
import { data } from './data';
import ListRadioButton, { Data } from '../../Modals/ListRadioButton';

const ListRadioButtonDemo: React.FC = () => {
  const [state, setState] = useState<Data>(data);

  const headerIconButtonHundleClick = (event: React.MouseEvent<any>) => {
    event.persist(); // Event Pooling
    console.log(event);
  };
  const itemIconButtonHundleClick = (event: React.MouseEvent<any>) => {
    event.persist(); // Event Pooling
    console.log(event);
  };

  const itemOnChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    event.persist(); // Event Pooling
    let dataUpdated = state;
    const colomnsUpdated = data.colomns.map(colomn => {
      colomn.items.map(item => {
        console.log(item.id + ' ' + event.target.name);

        if (item.id === event.target.name) {
          item.isChecked = checked;
          console.log('here ' + item.isChecked);
        }
      });
      return colomn;
    });
    data.colomns = colomnsUpdated;
    setState(prev => dataUpdated);
    console.log(event.target.name);
    console.log(checked);
  };
  useEffect(() => {
    console.log(state);
  });
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
