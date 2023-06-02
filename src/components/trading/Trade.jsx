import {Box, Button, Divider, Slider, Stack, TextField, ToggleButton, ToggleButtonGroup, useTheme} from "@mui/material";
import {useState} from "react";
import styled from "@emotion/styled";
import {TradeGroup} from "./TradeGroup";

const CustomToggleButton = styled(ToggleButton)(({theme}) => ({
    "&.MuiToggleButton-standard": {
        color: '#929292',
        padding: 0,
        border: 'none',
        textTransform: 'none',

        "&:after": {
            content: '""',
            position: 'absolute',
            width: '100%',
            border: '1px solid black',
            bottom: -1,
            left: 0,
            opacity: 0,
            transition: 'opacity .1s ease-in-out',
        },

        "&.Mui-selected": {
            "&:after": {
                content: '""',
                position: 'absolute',
                width: '100%',
                border: '1px solid black',
                bottom: -1,
                left: 0,
                opacity:1,
            },

            background: 'none',
            color: "#000",
        }
    },
}));

export const Trade = () => {
    const [option, setOption] = useState('market');
    const theme = useTheme();
    const handleOption = (event, newOption) => {
        setOption(newOption);
    };
    return (
        <Box width = "100%">
            <ToggleButtonGroup
                value={option}
                exclusive
                onChange={handleOption}
                sx={{
                    gap: theme.spacing(2),
                }}
            >
                <CustomToggleButton value='market'>
                    Маркет
                </CustomToggleButton>
                <CustomToggleButton value='limit'>
                    Лимит
                </CustomToggleButton>
            </ToggleButtonGroup>
            <Divider/>
            <Stack direction='row'>
                <TradeGroup btnColor='success'/>
                <TradeGroup btnColor='secondary'/>
            </Stack>
        </Box>
    );
}

// sx = {{outline: "1px solid red"}}