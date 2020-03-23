export type Items = Array<{
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

export interface Header {
  title: string;
  hasIconButton: boolean;
  Icon?: (props: any) => JSX.Element;
}

export interface Colomns {}
export interface Data {
  header?: Header;
  colomns: { items: Items }[];
}

export interface ListRadioButtonProps {
  data: Data;
  headerIconButtonOnClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  itemIconButtonOnClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  itemOnChange: (
    eventChecked: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    newItems: Data['colomns']
  ) => void;
}
export interface HeaderProps {
  header: Data['header'];
  iconButtonOnClick?: (arg: React.MouseEvent<HTMLInputElement>) => void;
}

export interface ColumnsProps {
  columns: Data['colomns'];
  itemOnChange: (event: React.ChangeEvent<any>, checked: boolean) => void;
  iconButtonOnClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export interface ItemsProps {
  items: Data['colomns'][0]['items'];
  iconButtonOnClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  itemOnChange: (event: React.ChangeEvent<any>, checked: boolean) => void;
}
