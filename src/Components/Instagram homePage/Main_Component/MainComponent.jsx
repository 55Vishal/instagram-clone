import Cards from '../Cards/Cards';
import Grid from '@mui/material/Grid';
import LeftSection from '../LeftSection/LeftSection';
import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import StatusBar from '../StatusBar/StatusBar';

function MainContent() {
  return (
    <div>
      <Grid container style={{ marginTop: '2vh' }}>
        <Grid item xs={2}>
          <LeftSection />
        </Grid>
        <Grid style={{ marginLeft: '5vh' }} item xs={5}>
          <StatusBar />
          <Cards />
        </Grid>
        <Grid item xs={3} style={{ marginLeft: '5vh' }}>
        <Sidebar />
        
        </Grid>
         
      </Grid>
    </div>
  )
}

export default MainContent