import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import './Loginstyle.css'

export default function Login() {
    return (
        <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
        >
            <div className="login_container">
                <form className="login_style">
                    <TextField 
                            id="outlined-search" 
                            label="Username" 
                            type="Username" 
                        />
                    <TextField
                        id="outlined-helperText"
                        label="email"
                        type="email"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </form>
            </div>
        </Box>
    );
}
