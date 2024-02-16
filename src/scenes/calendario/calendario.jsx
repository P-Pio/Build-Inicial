//import React, { useMemo, useState } from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
//import { ResponsiveLine } from "@nivo/line";
//import { useGetSalesQuery } from "state/api";
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import BreakdownChart from "components/BreakdownChart";

const Calendario = () => {
    return (
        <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
    );
};

export default Calendario;
