 
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

// eslint-disable-next-line react-hooks/rules-of-hooks

 

 

const navConfig = [
  
  {
    title: 'dashboard',
    path: '/',
    icon: getIcon('eva:pie-chart-2-fill'),
    role:"Member"
  },
  {
    title: 'balances',
    path: '',
    icon: getIcon('ph:wallet-light'),
    role:"Admin"
  },
 
  {
    title: 'transactions',
    path: '/transactions',
    icon: getIcon('akar-icons:arrow-up-down'),
    role:"Admin"
  },
  {
    title: 'analytics',
    path: ' ',
    icon: getIcon('eva:bar-chart-2-fill'),
    role:"Admin"
  }, 

  {
    title: 'marketing',
    path: ' ',
    icon: getIcon('nimbus:marketing'),
    role:"Admin"
  }, 

  {
    title: 'exchange rates',
    path: '',
    icon: getIcon('ri:exchange-dollar-line'),
    role:"Admin"
  }, 
]; 
export default navConfig;




