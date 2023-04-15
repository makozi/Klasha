// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Link as RouterLink,  } from 'react-router-dom';
import { Card, Typography ,Link} from '@mui/material';
// utils
 // components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
//   borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetDark.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string ,
  total: PropTypes.string,
  url:PropTypes.string,
  sx: PropTypes.object,
};

export default function AppWidgetDark({ title, total, icon, url,color = 'primary', sx, ...other }) {
  return (
    <Link underline="none" component={RouterLink} to={url}>
    <Card
      sx={{
        py: 12,
        boxShadow: 0,
        textAlign: 'left', 
        paddingLeft: 4,
        color: "white",
        // bgcolor: (theme) => theme.palette[color].lighter,
        bgcolor: "#000",
        border :'2px solid black',
        ...sx,
      }}
      {...other}
    >
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
      </Typography>
 

      <Typography variant="h6">{total}</Typography>

  
      
    </Card>
    </Link>
  );
}
