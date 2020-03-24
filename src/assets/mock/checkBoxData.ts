import ControlPointRoundedIcon from '@material-ui/icons/ControlPointRounded';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Data } from '../../components/Modals/ListCheckBox/types';

export const data: Data = {
  header: {
    title: 'Composent(s)',
    hasIconButton: true,
    Icon: ControlPointRoundedIcon
  },
  body: {
    params: {
      type: 'checkBox',
      hasIconButton: true,
      Icon: VisibilityIcon
    },
    colomns: [
      {
        items: [
          {
            id: 'Adience public1',
            label: 'Adience public 1',

            hasChild: false,
            isChecked: false
          },
          {
            id: 'Adience public2',
            label: 'Adience public 2',

            hasChild: false,
            isChecked: false
          },
          {
            id: 'Adience public3',
            label: 'Adience public 3',

            hasChild: false,
            isChecked: false
          },
          {
            id: 'Adience public4',
            label: 'Adience public 4',

            hasChild: true,
            isChecked: true,
            childs: {
              params: {
                type: 'checkBox',
                hasIconButton: true,
                Icon: VisibilityIcon
              },
              items: [
                {
                  id: 'Adience public4.1',
                  label: 'Adience public 4.1',

                  isChecked: false
                }
              ]
            }
          }
        ]
      },
      {
        items: [
          {
            id: 'Adience public5',
            label: 'Adience public 5',

            hasChild: false,
            isChecked: false
          },
          {
            id: 'Adience public6',
            label: 'Adience public 6',

            hasChild: false,
            isChecked: false
          },
          {
            id: 'Adience public7',
            label: 'Adience public 7',

            hasChild: false,
            isChecked: true
          },
          {
            id: 'Adience public8',
            label: 'Adience public 8',

            hasChild: true,

            isChecked: false,
            childs: {
              params: {
                type: 'checkBox',
                name: 'radioButton',
                hasIconButton: true,
                Icon: VisibilityIcon
              },
              items: [
                {
                  id: 'Adience public8.1',
                  label: 'Adience public 8.1',

                  isChecked: false
                }
              ]
            }
          }
        ]
      },
      {
        items: [
          {
            id: 'Adience public9',
            label: 'Adience public 9',

            hasChild: false,
            isChecked: false
          },

          {
            id: 'Adience public10',
            label: 'Adience public 10',

            hasChild: true,
            isChecked: false,
            childs: {
              params: {
                type: 'radioButton',
                name: 'radioButton',

                hasIconButton: true,
                Icon: VisibilityIcon
              },

              items: [
                {
                  id: 'Adience public10.1',
                  label: 'Adience public 10.1',

                  isChecked: false
                },
                {
                  id: 'Adience public10.2',
                  label: 'Adience public 10.2',

                  isChecked: false
                },
                {
                  id: 'Adience public10.3',
                  label: 'Adience public 10.3',

                  isChecked: false
                }
              ]
            }
          }
        ]
      }
    ]
  }
};
