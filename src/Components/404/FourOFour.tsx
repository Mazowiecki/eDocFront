import React from 'react';
import { useHistory } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Styled404Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Styled404Title = styled.p`
  font-size: 90px;
  font-weight: 900;
  color: cornflowerblue;

  @media (min-width: 702px) {
    font-size: 200px;
    font-weight: 900;
    color: cornflowerblue;
  }
`;

const Styled404Content = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 20px 0;

  @media (min-width: 702px) {
    font-size: 35px;
    font-weight: 600;
    margin: 20px 0;
  }
`;

const Styled404Button = styled(Button)`
  color: #6198F3;
  text-transform: none;
  font-weight: 700;
`;

const FourOFour = () => {
    let history = useHistory();

    const routeDashboard = () => {
        history.push("/");
    };

    return (
        <Container maxWidth='lg'>
            <Styled404Container>
                <Styled404Title>OOPS!</Styled404Title>
                <Styled404Content>We can't find the page you're looking for.</Styled404Content>
                <Styled404Button onClick={routeDashboard} variant="outlined" color="primary">
                    Visit homepage
                </Styled404Button>
            </Styled404Container>
        </Container>
    );
};

export default FourOFour;
