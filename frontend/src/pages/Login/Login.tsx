import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import LoginIcon from "@mui/icons-material/Login";
import { LoginButton, LoginContainer, LoginTitle } from "./styled-components";

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <LoginContainer fixed>
      <LoginTitle component="h2" variant="h1">
        <span>
          <WavingHandIcon fontSize="large" />
        </span>
        Welcome to Your <span>Task Manager</span>
      </LoginTitle>
      <Typography variant="body2" component="p">
        Log in to access and manage your tasks efficiently.
      </Typography>
      <LoginButton
        variant="contained"
        color="primary"
        onClick={() => loginWithRedirect()}
        size="large"
      >
        <LoginIcon />
        Log In
      </LoginButton>
    </LoginContainer>
  );
};

export default Login;
