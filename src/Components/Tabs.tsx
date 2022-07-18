import React, { FC } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Links } from '../models';
import { Link } from 'react-router-dom';
import { useRouteMatch } from '../hooks/useRouteMatch';

const CustomTabs: FC<{ tabs: Links[] }> = ({ tabs }) => {

    const routeMatch = useRouteMatch(['/', '/invoices']);
    const currentTab = routeMatch?.pattern?.path;

    return (
        <Tabs
            value={currentTab}
            centered
            sx={{ flexGrow: 1, display: { md: 'flex' }, justifyContent: 'center' }}
        >
            {tabs?.map((page, id) => (
                <Tab
                    disableRipple
                    label={page.name}
                    value={page.path === '/' ? page.path : `/${page.path}`}
                    to={page.path}
                    component={Link}
                    key={`${page.path}_${id}`} />
            )

            )}
        </Tabs>
    );
};

export default CustomTabs;