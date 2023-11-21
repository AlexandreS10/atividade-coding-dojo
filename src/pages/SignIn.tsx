import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { login } from "../store/modules/users/userSlice";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const SignIn: React.FC = () => {
  const [email, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkBox, setCheckBox] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const usersRedux = useAppSelector((state) => state.users);

  function clearForm() {
    setUsername("");
    setPassword("");
  }
  function handleClick() {
    navigate("/signUp");
  }
  function logarUser() {
    if (email.length && password.length) {
      const exist = usersRedux.find((user) => user.email === email);

      if (exist) {
        dispatch(login({ id: uuid(), email, password }));
        clearForm();
        navigate("/home");
      } else {
        alert("Usuário não cadastrado.");
      }
    }
  }
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box
          sx={{
            flex: "50%",
            height: "100vh",
            background: 'url("./flor_raminho.jpg")',
            backgroundSize: "cover",
          }}
        ></Box>
        <Grid
          container
          gap={2}
          justifyContent={"center"}
          sx={{ flex: "50%" }}
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <Box
            style={{
              display: "flex",
              width: "100px",
              height: "100px",
              alignItems: "center",
              justifyContent: "space-around",
              backgroundColor: "#e71b69",
              borderRadius: "50%",
            }}
          >
            {
              <LockOutlinedIcon
                style={{
                  fontSize: "3.8rem",
                  fill: "white",
                  width: "none",
                  height: "none",
                }}
              />
            }
          </Box>
          <Typography variant="h4">Sign In</Typography>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(ev) => setUsername(ev.target.value)}
                  style={{ width: 400 }}
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
                  style={{ width: 400 }}
                  id="password"
                  label="Senha"
                  type="password"
                  variant="outlined"
                />
               <Box style={{ display:'flex',justifyContent: "center" ,alignItems: 'center ',width: 400 }} >
               <Checkbox
                  value={checkBox}
                  onChange={(ev) => setCheckBox(ev.target.checked)}
                />
                <p>Remember-me</p>
               </Box>
                
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  style={{ width: 400 }}
                  onClick={logarUser}
                >
                  Entrar
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  component={Button}
                  onClick={handleClick}
                  size="small"
                  textTransform={"none"}
                >
                  Não tem conta? Cadastrar.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default SignIn;
