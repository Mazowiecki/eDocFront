import React, { useState } from 'react';
import {Button, FormControlLabel, Paper, Switch, TextField} from "@material-ui/core";
import styled from "styled-components";
import {handleErrors} from "../../helpers/utils";
import { URL } from "../../helpers/consts";
import {loginUser} from "../../Redux/actions";
import {useDispatch} from "react-redux";

const PaperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: slateblue;
`;

const SubTitle = styled(Title)`
  font-size: 15px;
  color: blue;
  margin-top: 10px;
`

const Login = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = (event: any) => {
        setLogin(event.target.value);
    }
    const handlePassword = (event: any) => {
        setPassword(event.target.value);
    }
    const handleIsLogin = (event: any) => {
        setIsLogin(event.target.checked);
    }
    const handleSubmit = () => {
        if (isLogin) {
            postLogin();
        }
    }

    const postLogin = () => {
        fetch(`${URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password,
            })

        })
            .then(handleErrors)
            .then(response => response.json())
            .then(res => {
                dispatch(loginUser(res.data));
            })
            .catch(error => console.error(error));
    };



    return (
        <Paper elevation={3}>
            <PaperContainer>
                <Title>eDoc</Title>
                <SubTitle>{isLogin ? 'Logowanie' : 'Rejestracja'}</SubTitle>
                <TextField onChange={handleLogin} id="outlined-basic" label="Login" variant="outlined" size={"small"} defaultValue={login} />
                <TextField onChange={handlePassword} id="outlined-basic" label="Password" variant="outlined" size={"small"} defaultValue={password} />
                <Button onClick={handleSubmit}>Submit</Button>
                <FormControlLabel
                    control={<Switch checked={isLogin} onChange={handleIsLogin} name="gilad" />}
                    label="Is Login"
                />
            </PaperContainer>
        </Paper>
    );
};

export default Login;
