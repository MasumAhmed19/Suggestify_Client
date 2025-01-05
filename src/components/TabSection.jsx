import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import QueryCard from './QueryCard';

// Custom Tab Panel Component
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

// PropTypes for CustomTabPanel
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

// Accessibility props for tabs
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// Main Tab Section Component
const TabSection = ({queries}) => {
    const [value, setValue] = useState(0);
    console.log({queries})
    // const { queryer, productName, productBrand, productImg, queryTitle, problemFaced, addedTime } = queries || {}


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            {/* Tabs Header */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} textColor="secondary"
  indicatorColor="secondary" >
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Technology" {...a11yProps(1)} />
                    <Tab label="Home Appliance" {...a11yProps(2)} />
                    <Tab label="Personal Care" {...a11yProps(3)} />
                </Tabs>
            </Box>
            {/* Tab Content */}
            <CustomTabPanel value={value} index={0}>
                <div className='flex flex-col gap-8'>
                    {queries.map(el=>(
                        <QueryCard key={el._id} el={el}  />
                    ))}

                </div>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>

            <CustomTabPanel value={value} index={3}>
                Item four
            </CustomTabPanel>
        </Box>
    );
};

export default TabSection;
