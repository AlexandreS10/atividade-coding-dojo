import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { login } from '../store/modules/users/userSlice';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignIn: React.FC = () => {
  const [email, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const usersRedux = useAppSelector((state) => state.users);

  function clearForm() {
    setUsername('');
    setPassword('');
  }
  function handleClick() {
    navigate('/signUp');
  }
  function logarUser() {
    if (email.length && password.length) {
      const exist = usersRedux.find((user) => user.email === email);

      if (exist) {
        dispatch(login({ id: uuid(), email, password }));
        clearForm();
        navigate('/home');
      } else {
        alert('Usuário não cadastrado.');
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
            background: 'url("./flor_raminho.jpg")',
            backgroundSize: 'cover'
          }}
        ></Box>
        <Grid container justifyContent={'center'} sx={{ flex: '50%'}}>
          <Box
            style={{
              display: 'flex',
              width: '100px',
              height: '100px',
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: '#e71b69',
              borderRadius: '50%'
            }}
          >{<LockOutlinedIcon style ={{ fontSize:'3.8rem', fill:'white', width:'none', height:'none'}}/>}</Box>
          <Grid item xs={12}>
            <Typography variant="h4">Sign In</Typography>
          </Grid>

          <Grid item xs={6}>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    value={email}
                    onChange={(ev) => setUsername(ev.target.value)}
                    fullWidth
                    id="email"
                    label="Username"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    fullWidth
                    id="password"
                    label="Senha"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth onClick={logarUser}>
                    Entrar
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography component={Button} onClick={handleClick} size='small' textTransform={'none'}>
                    Não tem conta? Cadastrar.
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignIn;
