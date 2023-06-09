import { useState } from 'react'; 
import { useIdleTimer} from "react-idle-timer";
import { useNavigate} from "react-router-dom";
// material
import { styled, alpha } from '@mui/material/styles';
import { Input, Slide, Button, IconButton, InputAdornment, ClickAwayListener } from '@mui/material';
// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

export default function Searchbar() {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const timeout = 1000 * 400 * 1; 
  const navigate = useNavigate();
 
  const [isTimedOut, setTimeOut] = useState(false);
  const onIdle = () => {
    if (!isTimedOut) {
      localStorage.clear("user-info");
      navigate('/', { replace: true });
          

      setTimeOut(true);
    }
  };


  const idleTimer = useIdleTimer({ onIdle  })
  return (
    <>
    {/* <IdleTimer
      element={document}
      onIdle={onIdle}
      debounce={250}
      timeout={timeout} /> */}
      <ClickAwayListener onClickAway={handleClose}>
        <div>
          {!isOpen && (
            <IconButton onClick={handleOpen}>
              <Iconify icon="eva:search-fill" width={20} height={20} />
            </IconButton>
          )}

          <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
            <SearchbarStyle>
              <Input
                autoFocus
                fullWidth
                disableUnderline
                placeholder="Search…"
                startAdornment={<InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                </InputAdornment>}
                sx={{ mr: 1, fontWeight: 'fontWeightBold' }} />
              <Button variant="contained" onClick={handleClose}>
                Search
              </Button>
            </SearchbarStyle>
          </Slide>
        </div>
      </ClickAwayListener></>
  );
}
