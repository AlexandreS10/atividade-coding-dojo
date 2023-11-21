/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { create } from '../store/modules/users/usersSlice';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import GppGoodIcon from '@mui/icons-material/GppGood';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const usersRedux = useAppSelector((state) => state.users);

  function clearForm() {
    setEmail('');
    setPassword('');
  }
  function handleClick() {
    navigate('/');
  }
  function createUser() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailValido = emailRegex.test(email);

    const sequencial = /(012|123|234|345|456|567|678|789|890)/.test(password);
    const passwordValido = password.length > 4 && !sequencial;
    const repeatPassword = passwordValido;

    if (email.length && emailValido && passwordValido) {
      const exist = usersRedux.find((user) => user.email === email);

      if (!exist && repeatPassword === true) {
        dispatch(create({ id: uuid(), email, password }));
        clearForm();
      }
      if (exist) {
        alert('Usuário já existe.');
      } else {
        alert('Preencha os campos corretamente.');
      }
    }
  }
  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap'}}>
        <Box
          sx={{
            flex: '50%', 
            height: '100vh',
            background: 'url("./tacas.webp")',
            backgroundSize: 'cover'
          }}
        ></Box>
        <Grid container gap={2} justifyContent={'center'} sx={{ flex: '50%'}} style={{flexDirection:'column', alignItems:'center'}}>
          <Box
            style={{
              display: 'flex',
              width: '100px',
              alignItems: 'center',
              justifyContent: 'space-around',
              height: '100px',
              backgroundColor: '#21b340',
              borderRadius: '50%',
            }}
          >
            {<GppGoodIcon style={{ fontSize: '3.8rem', fill: 'white', width: 'none', height: 'none' }} />}
          </Box>
            <Typography variant="h4">SignUp</Typography>
          
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    style={{width:400}}
                    id="email"
                    label="E-mail*"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    style={{width:400}}
                    id="password"
                    label="Password*"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={repeatPassword}
                    onChange={(ev) => setRepeatPassword(ev.target.value)}
                    style={{width:400}}
                    id="repeatPassword"
                    label="Repeat password*"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" onClick={createUser}style={{width:400}}>
                    Cadastrar
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography component={Button} onClick={handleClick} size="small" textTransform={'none'}>
                    Já possui uma conta? Logar.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
      </Box>
    </>
  );
};
export default SignUp;
