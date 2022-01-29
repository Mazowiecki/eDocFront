import React, { useEffect, useState } from 'react';
import Login from "../Login/Login";
import {Box, Button, Link, makeStyles, Paper, Tab, Tabs, TextField, Typography} from "@material-ui/core";
import styled from "styled-components";
import {useSelector} from "react-redux";
import Dane from "../Dane/Dane";
import UmowWizyte from "../UmowWizyte/UmowWizyte";
import AllWizyty from "../AllWizyty/AllWizyty";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: '20px 0 10px 0',
            width: '100%'
        },
    },
}));

const TabPanel = (props: any) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Dashboard = () => {
    const classes = useStyles();
    // @ts-ignore
    const userData = useSelector(state => state.login);

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    // const getHeroes = () => {
    //     fetch(`${URL}/heroes?first=5&skip=0`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(handleErrors)
    //         .then(response => response.json())
    //         .then(res => {
    //             for (const hero of res.data) {
    //                 dispatch(addHero(hero));
    //             }
    //         })
    //         .catch(error => console.error(error));
    // };



    return (
        <Container className={classes.root}>
            {userData.length
                ?   <Paper className={classes.root}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Dane" />
                            <Tab label="Umów wizyte" />
                            <Tab label="Twoje wizyty" />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <Dane userData={userData}/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <UmowWizyte userData={userData}/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <AllWizyty userData={userData}/>
                        </TabPanel>
                    </Paper>
                : <Login/>
            }
        </Container>
    );
}
