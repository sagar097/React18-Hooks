import React, { useReducer, useState } from 'react';
import {
  Checkbox, Grid, TextField, FormControlLabel, Paper, Button
} from '@mui/material';
import { initialState, LoginReducer } from './LoginReducer';

const init = (state) => {
  // called only initial render
  console.log('init called');

  return state
}

const LoginPage = () => {

  const [state, dispatch] = useReducer(LoginReducer, initialState, init);
  let [data, setData] = useState('')

  const handleChange = (event) => {

    let { name, value } = event?.target || {};

    if (name === 'username') {
      dispatch({ type: 'username_change', value })
    } else if (name === 'password') {
      dispatch({ type: 'password_change', value })
    }

  };

  const onSubmit = () => {

    let cred = JSON.stringify(state);
    setData(cred);

  }

  let { username, password } = state;

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField
              label="Username"
              name='username'
              value={username}
              onChange={handleChange}
            >
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type={'password'}
              name='password'
              value={password}
              onChange={handleChange}
            >
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={true}
                  label={'Keep me logged in'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12} >
            <Button
              fullWidth
              variant="contained"
              style={{ margin: '12px' }}
              onClick={onSubmit}
            >
              Login
            </Button>
          </Grid>
          <p>{data}</p>
        </Grid>
      </Paper>
    </div>
  );
};

export default LoginPage;
