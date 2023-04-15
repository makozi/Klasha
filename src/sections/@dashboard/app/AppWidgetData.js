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

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string ,
  total: PropTypes.string,
  url:PropTypes.string,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, icon, url,color = 'primary', sx, ...other }) {
  return (
    <Link underline="none" component={RouterLink} to={url}>
    <Card
      sx={{
        py: 12,
        boxShadow: 0,
        textAlign: 'left',
        border: '1px solid black' ,
        paddingLeft: 4,
        color: (theme) => theme.palette[color].darker,
        // bgcolor: (theme) => theme.palette[color].lighter,
        bgcolor: "#fff",
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
