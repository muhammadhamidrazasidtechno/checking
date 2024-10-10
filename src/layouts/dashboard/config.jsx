import DashboardIcon from '@mui/icons-material/Dashboard'; // ! Dashboard
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront'; // ! Seller
import StarIcon from "@heroicons/react/24/solid/StarIcon" // ! Celebrity
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // ! Product
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'; // ! Finance
import InsightsIcon from '@mui/icons-material/Insights'; // ! Reports & Analytics
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'; // ! Admins
import InfoIcon from '@mui/icons-material/Info'; // ! Support
import { SvgIcon } from '@mui/material';

export const items = [
  {
    href: '/',
    icon: (
      <SvgIcon>
        <DashboardIcon />
      </SvgIcon>
    ),
    label: 'Dashboard'
  },
  {
    href: '/users',
    icon: (
      <SvgIcon>
        <PersonIcon />
      </SvgIcon>
    ),
    label: 'Users'
  },
  {
    href: '/sellers',
    icon: (
      <SvgIcon>
        <StorefrontIcon />
      </SvgIcon>
    ),
    label: 'Sellers'
  },
  {
    href: '/celebrities',
    icon: (
      <SvgIcon>
        <StarIcon />
      </SvgIcon>
    ),
    label: 'Celebrities'
  },
  {
    href: '/products',
    icon: (
      <SvgIcon>
        <ShoppingCartIcon />
      </SvgIcon>
    ),
    label: 'Products'
  },
  {
    href: '/finances',
    icon: (
      <SvgIcon>
        <AccountBalanceWalletIcon />
      </SvgIcon>
    ),
    label: 'Finances'
  },
  {
    href: '/reports',
    icon: (
      <SvgIcon>
        <InsightsIcon />
      </SvgIcon>
    ),
    label: 'Reports'
  },
  {
    href: '/admins',
    icon: (
      <SvgIcon>
        <SupervisorAccountIcon />
      </SvgIcon>
    ),
    label: 'Admins'
  },
  {
    href: '/support',
    icon: (
      <SvgIcon>
        <InfoIcon />
      </SvgIcon>
    ),
    label: 'Support'
  },
];
