import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import Grid from '@mui/material/Grid';
import LeftSection from '../LeftSection/LeftSection';
import Profile from '../Profile/Profile';
import React from 'react'
import Suggestions from '../Suggestions/Suggestions';

function MainContent() {
  return (
    <div>
    <Grid container style={{marginTop: '6vh'}}>
        <Grid item xs={2}>
        <LeftSection />
        </Grid>
        <Grid item xs={5}>
        </Grid>
        <Grid item xs={3}>
        <Profile />
        <Suggestions />
     <Footer />
        </Grid>
        <Grid item xs={2}>
        
        </Grid>
    </Grid>
    </div>
  )
}

export default MainContent