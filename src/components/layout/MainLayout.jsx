import { Box } from "@mui/material";
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      {/* global-loading */}
      {/* global-loading */}

      {/* global-modal */}
      {/* global-Modal*/}

      <Box display="flex" minHeight="100vh">
        {/* header */}
        {/* header */}

        {/* main */}

        <Box
          component="main"
          flexGrow={1}
          overflow="hidden"
          minHeight="100vh"
        ></Box>

        {/* main */}
      </Box>

      {/*  footer */}

      {/*  footer */}
    </>
  );
};

export default MainLayout;
