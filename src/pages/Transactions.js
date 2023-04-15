import React, { useState, useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';

import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove'; 
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
 
// material
import { Container,  Button } from '@mui/material';
// components
import Page from '../components/Page';



import Iconify from '../components/Iconify'; 

// ----------------------------------------------------------------------

export default function Users() {
  const [openFilter, setOpenFilter] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    // Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <Button variant="outlined"    {...props} ref={ref}  >Export <Iconify
    icon= "ic:baseline-keyboard-arrow-down"
    sx={{ width: 16, height: 16, ml: 1 }} style={{color:"black"}}
  /> </Button>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  function toCurrency(numberString) {
    const number = parseFloat(numberString);

    return number.toLocaleString('USD');
  }

  // const tableIcons = {     Export: forwardRef((props, ref) => <Button className="p-0" {...props} ref={ref} />)   };

  const columns = [
    // {title: "S/N", field: "id", },
    {
      title: 'Transaction ID',
      field: 'transactionID',
      render: (row) => <div style={{ textTransform: 'uppercase' }}>{row.transactionID}</div>,
    },
    {
      title: 'Source',
      field: 'source',
      render: (row) => <div style={{ textTransform: 'uppercase' }}>{row.source}</div>,
    },
    {
      title: 'Customer name',
      field: 'customername',
      width: "50%",
      render: (row) => <div style={{ textTransform: 'uppercase' }}>{row.customername}</div>,
    },
    { title: 'Customer email', field: 'email' },
    { title: 'Amount', field: 'amount' },
    { title: 'Request Date', field: 'requestDate' },
    { title: 'Status', field: 'status' },
    
  ];


  const dataSource = [
    {
      key: '1',
      transactionID: 'GB12QWYEYYEUUWU',
      source: "GTB",
      customername: 'Mike Owens',
      email:"0029837765",
      amount:"$230.00",
      requestDate:"24.08.2021",
      status:"Pending",
    },
    {
      key: '2',
      transactionID: 'OB12ERTTTYYEUWU',
      source: "UBA",
      customername: "Steven O'Shassy",
      email:"0029837765",
      amount:"$480.00",
      requestDate:"22.08.2021",
      status:"Successful",
    },
    {
      key: '3',
      transactionID: 'GB12QWYEYYEUUWU',
      source: "GTB",
      customername: 'Mike Owens',
      email:"0029837765",
      amount:"$230.00",
      requestDate:"24.08.2021",
      status:"Pending",
    },
    {
      key: '4',
      transactionID: 'GB12QWYEYYEUUWU',
      source: "GTB",
      customername: 'Mike Owens',
      email:"0029837765",
      amount:"$230.00",
      requestDate:"24.08.2021",
      status:"Pending",
    },
        {
      key: '5',
      transactionID: 'GB12QWYEYYEUUWU',
      source: "GTB",
      customername: 'Mike Owens',
      email:"0029837765",
      amount:"$230.00",
      requestDate:"24.08.2021",
      status:"Pending",
    },
    
    {
      key: '6',
      transactionID: 'GB12QWYEYYEUUWU',
      source: "GTB",
      customername: 'Mike Owens',
      email:"0029837765",
      amount:"$230.00",
      requestDate:"24.08.2021",
      status:"Pending",
    },
    
    
    
    {
      key: '7',
      transactionID: 'GB12QWYEYYEUUWU',
      source: "GTB",
      customername: 'Mike Owens',
      email:"0029837765",
      amount:"$230.00",
      requestDate:"24.08.2021",
      status:"Pending",
    },
    
    {
      key: '8',
      transactionID: 'GB12QWYEYYEUUWU',
      source: "GTB",
      customername: 'Mike Owens',
      email:"0029837765",
      amount:"$230.00",
      requestDate:"24.08.2021",
      status:"Pending",
    },
    
    {
      key: '9',
      transactionID: 'GB12QWYEYYEUUWU',
      source: "GTB",
      customername: 'Mike Owens',
      email:"0029837765",
      amount:"$230.00",
      requestDate:"24.08.2021",
      status:"Pending",
    },
    
    {
      key: '10',
      transactionID: 'GB12QWYEYYEUUWU',
      source: "GTB",
      customername: 'Mike Owens',
      email:"0029837765",
      amount:"$230.00",
      requestDate:"24.08.2021",
      status:"Pending",
    },
    
    {
      key: '11',
      transactionID: 'GB12QWYEYYEUUWU',
      source: "GTB",
      customername: 'Mike Owens',
      email:"0029837765",
      amount:"$230.00",
      requestDate:"24.08.2021",
      status:"Pending",
    },
    
    {
      key: '12',
      transactionID: 'GB12QWYEYYEUUWU',
      source: "GTB",
      customername: 'Mike Owens',
      email:"0029837765",
      amount:"$230.00",
      requestDate:"24.08.2021",
      status:"Pending",
    },
    
    {
      key: '13',
      transactionID: 'GB12QWYEYYEUUWU',
      source: "GTB",
      customername: 'Mike Owens',
      email:"0029837765",
      amount:"$230.00",
      requestDate:"24.08.2021",
      status:"Pending",
    },
    
        {
      key: '14',
      transactionID: 'GB12QWYEYYEUUWU',
      source: "GTB",
      customername: 'Mike Owens',
      email:"0029837765",
      amount:"$230.00",
      requestDate:"24.08.2021",
      status:"Pending",
    },
    

    
  ];
  

 

 

  return (
     <>
        <Page title="Transactions">
          <Container>
            {/* <Typography variant="h4" sx={{ mb: 5 }}>
              Users
            </Typography> */}
            <Grid container spacing={3}>
              <Grid item xs={12} xl={24}>
                <MaterialTable
                  title="Transaction History"
                  columns={columns}
                  data={dataSource}
                  icons={tableIcons}
                  options={{
                    pageSize:4,
                    // filtering: true,i
                pageSizeOptions: [4,8,12],
                    exportButton: true,
                    exportAllData:true,
                    rowStyle: (x) => {
                      if (x.tableData.id % 2) {
                        return { backgroundColor: '#f2f2f2' };
                      }
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Page>
     </>

    // </div>

  );
}
