import React from "react";
import {Box, Grid, Stack} from "@mui/material";
import {Trade} from "../components/trading/Trade";
import styled from "@emotion/styled";

const RoundBox = styled(Box)(({theme}) => ({
    borderRadius: '16px',
}));

const Trading = () => {
    return (
        <>
            <Box p={1} >
                <Grid container spacing={1} height={900}>
                    <Grid item xs={8}>
                        <Stack spacing={1} height='100%'>
                            <RoundBox sx = {{outline: '1px solid red'}} flexBasis='75%'>1</RoundBox>
                            <RoundBox sx = {{outline: '1px solid red'}} flexBasis='25%'>2</RoundBox>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack spacing={1} height='100%'>
                            <RoundBox sx = {{outline: '1px solid red'}} flexBasis='33%'>
                                <Trade/>
                            </RoundBox>
                            <RoundBox sx = {{outline: '1px solid red'}} flexBasis='67%'>4</RoundBox>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Trading;
