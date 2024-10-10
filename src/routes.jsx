import { Outlet } from 'react-router-dom';
import { Layout as DashboardLayout } from './layouts/dashboard/layout';
import Home from './pages';
import Celebrities from './pages/celebrities';
import Users from './pages/users';
import Support from './pages/support';
import Sellers from './pages/sellers';
import Admins from './pages/admins';
import Finances from './pages/finances';
import Orders from './pages/orders';
import Products from './pages/products';
import Reports from './pages/reports';
import PageNotFound from './pages/404'

export const routes = [
  {
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'celebrities',
        element: <Celebrities />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'finances',
        element: <Finances />
      },
      {
        path: 'sellers',
        element: <Sellers />
      },
      {
        path: 'admins',
        element: <Admins />
      },
      {
        path: 'support',
        element: <Support />
      },
      {
        path: 'reports',
        element: <Reports />
      }
    ]
  },
  {
    path: '404',
    element: <PageNotFound />
  },
  {
    path: '*',
    element: <PageNotFound />
  }
];
