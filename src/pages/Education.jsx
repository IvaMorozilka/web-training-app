import React, {memo} from "react";
import {Box, Grid, Paper} from "@mui/material";
import ResponsivePlayer from "../components/player/ResponsivePlayer";
import LessonSelector from "../components/education/LessonSelector";
import {DescriptionBlock} from "../components/education/DescriptionBlock";

const Education = memo(() => {
  return (
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <LessonSelector/>
          </Grid>
          <Grid item xs={8}>
            <ResponsivePlayer/>
            <DescriptionBlock/>
          </Grid>
        </Grid>
      </Box>
  );
});

export default Education;
