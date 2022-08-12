import { Box } from "@mui/material";
import styled from "styled-components";
import { device } from "../../models";


export const Wrapper = styled(Box)`
min-width: 212px;
min-height: 112px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid #e1f5fe;
    border-radius: 1rem;
    padding: 13% 13% 13% 7%;
    @media ${device.tablet} { 
    padding: 7% 5% 7% 5%;
  }
`