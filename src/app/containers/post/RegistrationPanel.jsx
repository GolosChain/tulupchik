import React, { Component } from 'react';
import styled from 'styled-components';

import Button from 'golos-ui/Button';
import Icon from 'golos-ui/Icon';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    margin-top: 20px;
    
    object-fit: contain;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .06);
`;

const Information = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    padding: 20px;
`;

const Rocket = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.div`
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;

const Description = styled.div`
    margin-top: 10px;
    
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.3px;
    text-align: center;
    color: #959595;
`;

const RegistrationButton = styled(Button)`
    margin-top: 10px;
`;

const Divider = styled.div`
    width: 1px;
    height: 100%;
    
    background-color: #e1e1e1;
`;

const RocketHolder = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    
    margin-left: 20px;
    padding-right: 20px;
    
    ${Icon} {
        min-width: 133px;
        min-height: 132px;
    }
`;

export default class RegistrationPanel extends Component {
    render() {
        return (<Wrapper>
            <Information>
                <Title>
                    Зарегистрируйтесь, чтобы проголосовать за пост или написать комментарий
                </Title>
                <Description>
                    Авторы получают вознаграждение, когда пользователи голосуют за их посты. Голосующие читатели
                    также получают вознаграждение за свои голоса.
                </Description>
                <RegistrationButton>
                    Зарегистрируйтесь
                </RegistrationButton>
            </Information>
            <Rocket>
                <Divider/>
                <RocketHolder>
                    <Icon name="registration-rocket" width="133" height="132"/>
                </RocketHolder>
            </Rocket>
        </Wrapper>)
    }
}