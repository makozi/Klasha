import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//

import DashboardApp from './pages/DashboardApp';

import Users from './pages/Transactions';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <DashboardApp /> },

        { path: 'transactions', element: <Users /> },
        //
      ],
    },

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
