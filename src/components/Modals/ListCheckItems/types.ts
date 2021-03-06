export type Items = Array<{
  id: string;
  label: string;
  hasChild?: boolean;
  isChecked: boolean;
  childs?: {
    params: {
      type: 'radioButton' | 'checkBox';
      name?: string;
      hasIconButton: boolean;
      Icon: (props: any) => JSX.Element;
    };
    items: {
      id: string;
      label: string;
      isChecked: boolean;
    }[];
  };
}>;

export interface Header {
  title: string;
  hasIconButton: boolean;
  Icon?: (props: any) => JSX.Element;
}

export interface Data {
  header: Header;
  body: {
    params: {
      type: 'radioButton' | 'checkBox';
      name?: string;
      hasIconButton: boolean;
      Icon: (props: any) => JSX.Element;
    };
    columns: {
      items: Items;
    }[];
  };
}
export type Columns = Data['body']['columns'];

export type Column = Data['body']['columns'][0];

export interface ListCheckItemsProps {
  data: Data;
  headerIconButtonOnClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  itemIconButtonOnClick: (
    event: React.MouseEvent<HTMLInputElement>,
    item: Items[0]
  ) => void;
  itemOnChange: (
    eventChecked: React.ChangeEvent<HTMLInputElement>,
    newColumns: Data['body']['columns']
  ) => void;
}
export interface HeaderProps {
  header: Data['header'];
  iconButtonOnClick?: (arg: React.MouseEvent<HTMLInputElement>) => void;
}

export interface ColumnsProps {
  columns: Data['body']['columns'];
  itemOnChange: (event: React.ChangeEvent<any>) => void;
  iconButtonOnClick: (
    event: React.MouseEvent<HTMLInputElement>,
    item: Items[0]
  ) => void;
  params: {
    type: 'radioButton' | 'checkBox';
    name?: string;

    hasIconButton: boolean;
    Icon: (props: any) => JSX.Element;
  };
}

export interface CheckboxListProps {
  items: Data['body']['columns'][0]['items'];
  iconButtonOnClick: (
    event: React.MouseEvent<HTMLInputElement>,
    item: Items[0]
  ) => void;
  itemOnChange: (event: React.ChangeEvent<any>) => void;
  disabled?: boolean;
  params: {
    type: 'radioButton' | 'checkBox';
    name?: string;

    hasIconButton: boolean;
    Icon: (props: any) => JSX.Element;
  };
}

export interface ListRadioButtonProps {
  items: Data['body']['columns'][0]['items'];
  iconButtonOnClick: (
    event: React.MouseEvent<HTMLInputElement>,
    item: Items[0]
  ) => void;
  itemOnChange: (event: React.ChangeEvent<any>) => void;
  disabled?: boolean;
  params: {
    type: 'radioButton' | 'checkBox';
    name?: string;

    hasIconButton: boolean;
    Icon: (props: any) => JSX.Element;
  };
}
