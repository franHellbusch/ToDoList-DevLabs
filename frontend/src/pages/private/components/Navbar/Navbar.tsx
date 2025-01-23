import { useAppDispatch } from "@/hooks/redux";
import { logoutUser } from "@/store/states/auth";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ChecklistRtlRoundedIcon from "@mui/icons-material/ChecklistRtlRounded";
import {
  AppBarContainer,
  AppBarContent,
  AppBarTitle,
  LogoutButton,
} from "./styled-components";

const Navbar: React.FC = () => {
  const { logout } = useAuth0();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch(logoutUser());
  };

  return (
    <AppBarContainer>
      <AppBarContent>
        <AppBarTitle variant="h3" component="h1">
          <ChecklistRtlRoundedIcon />
          Task List
        </AppBarTitle>
        <LogoutButton
          onClick={handleLogout}
          variant="contained"
          color="primary"
        >
          Logout <LogoutRoundedIcon fontSize="small" />
        </LogoutButton>
      </AppBarContent>
    </AppBarContainer>
  );
};

export default Navbar;
