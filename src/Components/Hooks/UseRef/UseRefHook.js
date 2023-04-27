import { Grid } from '@mui/material'
import React from 'react'
import ForwardRefHook from './ForwardRefHook'
import VideoPlayer from './VideoPlayer'

function UseRefHook() {
  return (
    <Grid container spacing={3}>

      <Grid item>
        <ForwardRefHook />
      </Grid>

      <Grid item>
        <VideoPlayer />
      </Grid>

    </Grid>
  )
}

export default UseRefHook