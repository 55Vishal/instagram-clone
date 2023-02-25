import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import Grid from '@mui/material/Grid';
import LeftSection from '../LeftSection/LeftSection';
import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import StatusBar from '../StatusBar/StatusBar';

function MainContent() {
  return (
    <div>
      <Grid container style={{ marginTop: '6vh' }}>
        <Grid item xs={2}>
          <LeftSection />
        </Grid>
        <Grid item xs={5}>
         <StatusBar />
         <Cards />
        </Grid>
        <Grid item xs={3}>
          <Sidebar />
          <Footer />
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  )
}

export default MainContent