import { PrivateRoutes } from "@/types/routes";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  NotFoundImage,
  NotFoundPageContainer,
  NotFoundPageTitle,
  RedirectButton,
} from "./styled-components";
import { Typography } from "@mui/material";

const NotFoundPage: React.FC = () => {
  const [count, setCount] = useState(20);
  const navigate = useNavigate();

  // Simulates a countdown
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <NotFoundPageContainer fixed>
      <NotFoundImage
        src="https://miro.medium.com/v2/resize:fit:512/1*YWUpnY_zNbSfK62GSJIBbw.png"
        alt="Not Found Image"
      />
      <NotFoundPageTitle component="h2" variant="h1">
        Page not found!
      </NotFoundPageTitle>
      <Typography variant="body2" component="p">
        You will be redirected to the home page in {count} seconds.
      </Typography>
      <RedirectButton
        variant="contained"
        color="primary"
        onClick={() => navigate(`/${PrivateRoutes.PRIVATE}`)}
      >
        Go Back
      </RedirectButton>
      {count === 0 && <Navigate to={`/${PrivateRoutes.PRIVATE}`} replace />}
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;
