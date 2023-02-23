import Grid from '@mui/material/Grid';
import LeftSection from '../LeftSection/LeftSection';
import React from 'react'

function MainContent() {
  return (
    <div>
    <Grid container style={{marginTop: '6vh'}}>
        <Grid item xs={2}>
        <LeftSection />
        </Grid>
        <Grid item xs={5}>
         two
        </Grid>
        <Grid item xs={3}>
        three
        </Grid>
        <Grid item xs={2}>
        Four.
        </Grid>
    </Grid>
    </div>
  )
}

export default MainContent