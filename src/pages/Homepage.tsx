
import { Button } from '@mui/material';
import React from 'react'
import ButtonWrapper from '../Components/ButtonWrapper';
import Headline from '../Components/Headline/Headline';
import { usePublicUserData } from '../hooks/usePublicUserData';
import { LayoutAlign } from '../models';
import AddIcon from '@mui/icons-material/Add';
export const Homepage: React.FC = () => {
    const user = usePublicUserData();
    return (
        <>
            <Headline
                title='Overview'
                subtitle={`Homepage ${user.data?.currentUser.user.email}`}
                variant={LayoutAlign.SPACE_BETWEEN}
            >
                <ButtonWrapper >
                    <Button variant="contained" size="large" startIcon={<AddIcon />}>Create Invoice</Button>
                </ButtonWrapper>
            </Headline>
        </>
    )
}
