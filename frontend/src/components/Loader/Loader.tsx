import { Box, CircularProgress } from "@mui/material";

const Loader: React.FC = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
