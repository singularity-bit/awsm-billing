import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { device } from "../../models";

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
        flex-direction: column;

    }
    &.center{
        justify-content: center;
        flex-direction: column;

    }
    &.right{
        justify-content: flex-end;
        flex-direction: column;

    }
    &.space_between{
        justify-content: space-between;
    }
    @media ${device.tablet} { 
        flex-direction: column;

  }

`