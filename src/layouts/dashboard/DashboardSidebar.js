import PropTypes from 'prop-types';
 
import { Link as RouterLink,  } from 'react-router-dom';
// material
import { styled,  } from '@mui/material/styles';
 
import { Box, Link, Drawer, Stack, Button } from '@mui/material';
// mock 
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logos from '../../logo.svg'; 
import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
//
import navConfig from './NavConfig';
import navPayments from './NavPayments';
import navSendPayments from './NavSendPayments';
import Iconify from '../../components/Iconify'; 

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));
 

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  
  const isDesktop = useResponsive('up', 'lg'); 

  const renderContent = (
    <div>
      <Scrollbar
        sx={{
          height: 1,
          '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#fffbf7' },
        }}
      >
        <Box sx={{ px: 1.5, py: 0.5, display: 'inline-flex' }}>
          {/* <Logo /> */}
          <img
            src={Logos}
            alt="Logo"
            height={80}
            width={80}
            style={{
              display: 'block',
              marginLeft:20,
              //  marginLeft:"auto", marginRight:"auto",
            }}
          />
        </Box>

        <div style={{ color: 'gray', marginLeft: 12, marginBottom: 7 }}>
          <Link underline="none" component={RouterLink} to="">
            <span style={{ color: '#a3a3a3', textDecoration: 'none', marginLeft:20, }}>Main pages </span>
          </Link>
        </div>

        <NavSection navConfig={navConfig} style={{marginLeft:12}} />

        <div style={{ color: 'gray', marginLeft: 12, marginBottom: 7 }}>
          <Link underline="none" component={RouterLink} to="">
            <span style={{ color: '#a3a3a3', textDecoration: 'none',marginLeft:20, }}>Accept Payments </span>
          </Link>
        </div>

        <NavSection navConfig={navPayments}  style={{marginLeft:12}}/>

        <div style={{ color: 'gray', marginLeft: 12, marginBottom: 2 }}>
          <Link underline="none" component={RouterLink} to="">
            <span style={{ color: '#a3a3a3', textDecoration: 'none',marginLeft:20, }}>Send Payments </span>
          </Link>
        </div>

        <NavSection navConfig={navSendPayments} style={{marginLeft:12}} />

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ px: 2.5, pb: 0, mt: 1 }}>
          <Stack alignItems="center" spacing={3} sx={{ pt: 0, borderRadius: 2, position: 'relative' }}>
            <Button href="" target="_blank" variant="contained" style={{ backgroundColor: '#ef2c5a', color: 'white' }}>
              <Iconify
                icon="mdi:question-mark-circle-outline"
                sx={{ width: 22, height: 22, ml: 1 }}
                style={{ color: 'white', paddingRight: 10 }}
              />
              Support
            </Button>
          </Stack>
          <Stack alignItems="center" spacing={3} sx={{ pt: 1, borderRadius: 2, position: 'relative' }}>
            <Button href="" target="_blank" variant="outlined" style={{ color: 'black' }}>
              <Iconify
                icon="ic:baseline-keyboard-arrow-left"
                sx={{ width: 16, height: 16, ml: 1 }}
                style={{ color: 'black' }}
              />{' '}
              Hide Panel
            </Button>
          </Stack>
        </Box>
      </Scrollbar>
    </div>
  );

  return (
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
