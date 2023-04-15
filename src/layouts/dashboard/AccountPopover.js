import React, { useRef, useState   } from 'react';
import { Link as RouterLink,    } from 'react-router-dom';
 
// eslint-disable-next-line camelcase
 
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
// mocks_
 
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: 'app',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    linkTo: 'profile',
  },
  
  
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const anchorRef = useRef(null); 

  const [open, setOpen] = useState(null);
   
  
  const staffID= localStorage.getItem('staffId'); 

  const picture= localStorage.getItem('picture'); 
  
  
const displayNames = `Makozi Marizu-Ibewiro`  ;
   

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };


 

  const handleClose = () => {
    setOpen(null);
  };

  const logout=()=>{
     
    localStorage.clear();
    
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        {/* <Avatar src={account.photoURL} alt="photoURL" /> */}
          <Avatar src={picture} alt="photoURL" /> <Iconify
    icon= "ic:baseline-keyboard-arrow-down"
    sx={{ width: 16, height: 16, ml: 1 }} style={{color:"black"}}
  /> 
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {displayNames}
          </Typography>
           
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={logout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}