 
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

 
 



const navPayments = [
  
  {
    title: 'checkout',
    path: '',
    icon: getIcon('ic:outline-shopping-cart'),
    role:"Member"
  },
  {
    title: 'payments',
    path: ' ',
    icon: getIcon('mdi:link-variant'),
    role:"Admin"
  },
 
   
]; 
export default navPayments;