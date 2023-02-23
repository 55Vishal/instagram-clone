import Grid from '@mui/material/Grid';
import React from 'react'

function MainContent() {
  return (
    <div>
    <Grid container style={{marginTop: '6vh'}}>
        <Grid item xs={3}>
        one
        </Grid>
        <Grid item xs={5}>
         two
        </Grid>
        <Grid item xs={2}>
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