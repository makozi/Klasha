import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box ,Typography} from '@mui/material';
// components
import { BaseOptionChart } from '../../../components/chart';

// ----------------------------------------------------------------------

AppWebsitePinkCard.propTypes = {
  title: PropTypes.string,
  titletop: PropTypes.string,
  subheader: PropTypes.string,
  
//   chartLabels: PropTypes.arrayOf(PropTypes.string) ,
  titlebottom: PropTypes.string,
  total: PropTypes.string,
};

export default function AppWebsitePinkCard({ title, subheader,  titletop,titlebottom, total,
      ...other }) {
  const chartOptions = merge(BaseOptionChart(), {
    plotOptions: { bar: { columnWidth: '16%' } },
    // fill: { type: chartData.map((i) => i.fill) },
    // labels: chartLabels,
    // xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} transactions`;
          }
          return y;
        },
      },
    },
  });

  return (
    <Card sx={{
        height:"96%",
        color: "white",
        bgcolor: "#ef2c5a",
         
      }} {...other}>
      <CardHeader title={title} subheader={subheader} />
      <Typography variant="h5" sx={{ opacity: 0.72 , pl:3}}>
  {titletop}
</Typography>
      <Box sx={{ p: 3, pb: 1, height:"92%" }} dir="ltr">
        {/* <ReactApexChart type="line" series={chartData} options={chartOptions} height={100}  /> */}

        <Typography variant="h6" sx={{ opacity: 0.72 , pl:3}}>
  {titlebottom}
</Typography>
      <Typography variant="subtitle2" sx={{ pl:3, pb:2}}>{total}</Typography>

      </Box>
   


    </Card>
  );
}
