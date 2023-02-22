import Grid from '@mui/material/Grid';
import React from 'react'

function MainContent() {
  return (
    <div>
    <Grid container style={{marginTop: '6vh'}}>
        <Grid item xs={2}>
        One.
        </Grid>
        <Grid item xs={6}>
        Two.
        </Grid>
        <Grid item xs={2}>
        Three
        </Grid>
        <Grid item xs={2}>
        Four.
        </Grid>
    </Grid>
    </div>
  )
}

export default MainContent