import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const Headline = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &.left{
        align-items: flex-start;
    }

    &.center{
        align-items: center;
    }
   
    &.right{
        align-items: flex-end;
    }
`
export const Wrapper = styled(Box)`

    display: flex;
    flex-direction: row;

    &.left{
        justify-content: flex-start;
    }
    &.center{
        justify-content: center;
    }
    &.right{
        justify-content: flex-end;
    }
    &.space_between{
        justify-content: space-between;
    }

`