import ControlPointRoundedIcon from '@material-ui/icons/ControlPointRounded';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Data } from '../../Modals/ListRadioButton';

export const data: Data = {
  header: {
    title: 'Composent(s)',
    hasIconButton: true,
    Icon: ControlPointRoundedIcon
  },
  colomns: [
    {
      items: [
        {
          id: 'Adience public1',
          label: 'Adience public 1',
          hasIconButton: true,
          Icon: VisibilityIcon,
          hasChild: false,
          isChecked: false
        },
        {
          id: 'Adience public2',
          label: 'Adience public 2',
          hasIconButton: false,

          Icon: VisibilityIcon,
          hasChild: false,
          isChecked: false
        },
        {
          id: 'Adience public3',
          label: 'Adience public 3',
          hasIconButton: false,
          Icon: VisibilityIcon,
          hasChild: false,
          isChecked: true
        },
        {
          id: 'Adience public4',
          label: 'Adience public 4',
          hasIconButton: true,

          Icon: VisibilityIcon,
          hasChild: true,

          isChecked: false,
          childs: [
            {
              id: 'Adience public4.1',
              label: 'Adience public 4.1',
              hasIconButton: true,

              Icon: VisibilityIcon,
              isChecked: false
            }
          ]
        }
      ]
    },
    {
      items: [
        {
          id: 'Adience public5',
          label: 'Adience public 5',
          hasIconButton: true,
          Icon: VisibilityIcon,
          hasChild: false,
          isChecked: false
        },
        {
          id: 'Adience public6',
          label: 'Adience public 6',
          hasIconButton: false,

          Icon: VisibilityIcon,
          hasChild: false,
          isChecked: false
        },
        {
          id: 'Adience public7',
          label: 'Adience public 7',
          hasIconButton: false,
          Icon: VisibilityIcon,
          hasChild: false,
          isChecked: true
        },
        {
          id: 'Adience public8',
          label: 'Adience public 8',
          hasIconButton: true,

          Icon: VisibilityIcon,
          hasChild: true,

          isChecked: false,
          childs: [
            {
              id: 'Adience public8.1',
              label: 'Adience public 8.1',
              hasIconButton: true,

              Icon: VisibilityIcon,
              isChecked: false
            }
          ]
        }
      ]
    }
  ]
};
