import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Loginstyle.css";
import { Buttons1 } from "./Components/buttons/Buttons";


export default function Login() {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1,  } }}
      noValidate
      autoComplete="off"
    >
      <div className="login_container">
        <div className="login_style">
          <div className="box_form">
            <h1>Login</h1>
            <form className="form_flex">
                <div>
                    <label htmlFor="Username">User name</label>
                </div>
              <TextField
                id="outlined-search"
                label="Username"
                type="Username"
              />
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <TextField id="outlined-helperText" label="email" type="email" />
              <div>
                <label htmlFor="Password">Password</label>
              </div>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <Buttons1 title="Sig in"/>
              <p>Don't have ann account?</p>
            </form>
          </div>
        </div>
      </div>
    </Box>
  );
}
