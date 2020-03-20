import React, { ChangeEvent } from 'react';
import Items from './Items';
import Header from './Header';

type Items = Array<{
  id: string;
  label: string;
  hasIconButton: boolean;
  Icon?: (props: any) => JSX.Element;
  hasChild: boolean;
  isChecked: boolean;
  childs?: {
    id: string;
    label: string;
    hasIconButton: boolean;
    Icon?: (props: any) => JSX.Element;
    isChecked: boolean;
  }[];
}>;

export interface Data {
  header: {
    title: string;
    hasIconButton: boolean;
    Icon?: (props: any) => JSX.Element;
  };
  colomns: { items: Items }[];
}
interface ListRadioButtonProps {
  data: Data;
  headerIconButtonOnClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  itemIconButtonOnClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  itemOnChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

// const hundleChange = (
//   event: React.ChangeEvent<HTMLInputElement>,
//   checked: boolean
// ) => {};

const ListRadioButton = (props: ListRadioButtonProps) => {
  const {
    data,
    headerIconButtonOnClick,
    itemIconButtonOnClick,
    itemOnChange
  } = props;
  const { header, colomns } = data;

  return (
    <div>
      <Header
        key="header"
        headerData={header}
        iconButtonOnClick={headerIconButtonOnClick}
      />
      <Items
        key="items"
        itemsData={colomns}
        itemOnChange={itemOnChange}
        iconButtonOnClick={itemIconButtonOnClick}
      />
    </div>
  );
};

export default ListRadioButton;
