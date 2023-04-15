import React from 'react'; 
import {
  Grid,
  Container,
  Typography,
  TextField,
  Card,
  Divider,
  CardHeader,
  Stack,
  Button,
  MenuItem,
  Select,
  CardContent,
  CardActions,
  InputLabel,
  FormControl , 
} from '@mui/material';    
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify'; 

// sections
import {
  
  AppWebsiteVisits,
  AppWebsiteWhite,
  AppWebsiteWhiteCard,
  AppWebsitePinkCard ,
  AppWebsiteDark,
   
} from '../sections/@dashboard/app';
 

// ----------------------------------------------------------------------

export default function DashboardApp() {

  const [info, setinfo] = React.useState('');

  const handleChange = (event) => {
    setinfo(event.target.value);
  };


  return (
    <div>
      <Page title="Dashboard">
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 2 }}>
            Sales Overview
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={3}>
           
              <AppWebsiteWhiteCard
                
                subheader="Today's sales"
                titletop="₦1,652.50"
                
                 
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <AppWebsiteDark
                title="24 Aug - 01 Sep 21"
                 
                chartData={[
                  
                  {
                    name: 'Transactions',
                    type: 'area',
                    fill: 'gradient',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                  },
                ]}
                titlebottom="This Week"
                total="₦1,652.50"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <AppWebsiteWhite
                title="24 Aug - 01 Sep 21" 
                 
          
                chartData={[
                  
                  {
                    name: 'Transactions',
                    type: 'area',
                    fill: 'gradient',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                  },
                ]}
                titlebottom="This Month"
                total="₦1,652.50"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <AppWebsiteWhite
                title="24 Aug - 01 Sep 21"
                 
                chartData={[
                   
                  {
                    name: 'Transactions',
                    type: 'area',
                    fill: 'gradient',
                    data: [69, 45, 76, 60, 45, 65, 54, 62, 59, 36, 39],
                  },
                ]}
                titlebottom="Last Month"
                total="₦1,652.50"
              />
            </Grid>

             
            

            <Grid item xs={12} md={8} lg={8}>
            <Stack sx={{display: 'flex',
          flexDirection: 'row',}}>
            
            <Typography sx={{ fontSize: 20, pt:1, fontWeight: "bold",  }} style={{paddingRight:12}} color="#000" gutterBottom>
      Sales
        </Typography>
       
        <Divider orientation="vertical" flexItem sx={{fontWeight:"bold"}}/>

         
            <Typography sx={{ fontSize: 15, pt:1, fontWeight: "bold" }} style={{paddingRight:12, paddingLeft:10}}  color="#ef2c5a" gutterBottom>
      7 days
        </Typography> 


        <Typography sx={{ fontSize: 15, pt:1, fontWeight: "bold" }} style={{paddingRight:12, paddingLeft:10}}  color="#000" gutterBottom>
     30 days
        </Typography> 

        <Button   variant="outlined"    style={{color:"black"}}>
            
              USD {' '}<Iconify
                icon="ic:baseline-keyboard-arrow-down"
                sx={{ width: 16, height: 16, ml: 1 }}
                style={{ color: 'black' }}
              />

            </Button> 


            <FormControl  sx={{ml:2}} style={{minWidth: 270}}>
  <InputLabel id="demo-simple-select-label">Email</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={info}
    label="Email"
    onChange={handleChange}
  >
    <MenuItem value="marizumakozi97@gmail.com">marizumakozi97@gmail.com</MenuItem>
    <MenuItem value="marizumakozi@yahoo.com">marizumakozi@yahoo.com</MenuItem> 
  </Select>
</FormControl>


            <Button   variant="outlined"    style={{color:"black", marginLeft:12}}>
            
            <Iconify
              icon="mdi:arrow-down"
              sx={{ width: 16, height: 16, ml: 1, }}
              style={{ color: 'black', paddingRight:7}}
            />     {' '} Download Report 

          </Button> 
            </Stack>

            <Stack>


            <AppWebsiteVisits
               
              chartLabels={[
                '20 Aug',
                '21 Aug',
                '22 Aug',
                '23 Aug',
                '24 Aug',
                '25 Aug',
                 
              ]}
              chartData={[
                {
                  name: '',
                  type: 'column',
                  fill: 'solid',
                  data: [0, 0, 0, 0, 4000, 0 ],
                },
                {
                  name: '',
                  type: 'area',
                  fill: 'gradient',
                  data: [2400, 2000, 3400, 1800, 2200, 2300],
                },
              
              ]}
            />
            </Stack>
            
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            
            <Card sx={{ height: 255 , marginTop:7,  bgcolor: "#ef2c5a", display: "flex",
    flexDirection: "column",}}>
      <CardContent>
        <Typography sx={{ fontSize: 18, pt:4, fontWeight: "bold" }} color="#fff" gutterBottom>
        KlashaWire - send <br/>money to businesses<br/> globally from Africa
        </Typography>
        
      </CardContent>
      <CardActions sx={{ mt: "auto" , pb:3}}>
      <Button href="" target="_blank" variant="contained" style={{ backgroundColor: '#000', color: 'white', marginLeft:16}}>
               
             Send a Wire
            </Button>
      </CardActions>
    </Card>
          </Grid>


          </Grid>
        </Container>
      </Page>
    </div>
  );
}
