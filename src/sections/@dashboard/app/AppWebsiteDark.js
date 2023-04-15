import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box ,Typography} from '@mui/material';
// components
import { BaseOptionChart } from '../../../components/chart';

// ----------------------------------------------------------------------

AppWebsiteDark.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
//   chartLabels: PropTypes.arrayOf(PropTypes.string) ,
  titlebottom: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default function AppWebsiteDark({ title, subheader, titlebottom, total,
     chartData, ...other }) {
  const chartOptions = merge(BaseOptionChart(), {
    plotOptions: { bar: { columnWidth: '16%' } },
    fill: { type: chartData.map((i) => i.fill) },
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
        bgcolor: "#000",
        border :'2px solid black',
         
         
      }} {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1, height:"92%" }} dir="ltr">
        <ReactApexChart type="line" series={chartData} options={chartOptions} height={100}  />

        <Typography variant="subtitle2" sx={{ opacity: 0.72 , pl:3}}>
  {titlebottom}
</Typography>
      <Typography variant="h6" sx={{ pl:3, pb:2}}>{total}</Typography>

      </Box>
   


    </Card>
  );
}
