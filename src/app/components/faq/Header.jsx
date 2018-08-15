import React, {PureComponent} from 'react';
import styled from 'styled-components';
import Button from '../golos-ui/Button/Button';
import Icon from '../golos-ui/Icon';
import Flex from '../Flex';

const Wrapper = Flex.extend.attrs({
    auto: true
})`
    background-color: #f9f9f9;
    
    @media (max-width: 1200px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

const Body = styled.div`
    padding: 60px;
    
    @media (max-width: 1200px) {
        max-width: 100%;
        padding: 25px 16px 40px;
        text-align: center;
    }
`;

const Title = styled.h1`
    max-width: 600px;
	color: #393636;
	font-family: "SF Pro Display";
	font-size: 34px;
	font-weight: 900;
	letter-spacing: 0.37px;
	line-height: 41px;
`;

const Description = styled.div`
    max-width: 600px;
    margin: 12px 0 37px;
    color: #959595;	
    font-family: "SF Pro Text";	
    font-size: 16px;	
    letter-spacing: -0.26px;	
    line-height: 24px; 
    
    @media (max-width: 1200px) {
        margin-bottom: 20px;
    }
`;

const ButtonsBlock = styled.div`
    display: flex;
    justify-content: flex-start;
   
    @media (max-width: 1200px) {
        justify-content: center;
    }
`;

const BlueButton = Button.extend`
    width: 138px;
    color: #FFFFFF;	
    font-family: "SF Pro Text";	
    font-size: 12px;	
    font-weight: bold;	
    line-height: 18px;	
    text-shadow: 0 2px 4px 0 rgba(0,0,0,0.5), 0 2px 12px 0 rgba(0,0,0,0.15);
    letter-spacing: 1px;
    
    @media (max-width: 1200px) {
        margin-left: 15px;
    }
`;

const WhiteButton = Button.extend`
    width: 138px;
    margin-left: 15px;
    background: none;
    border: 1px solid rgba(149, 149, 149, 0.3);
    
    color: #393636;	
    font-family: Roboto;	
    font-size: 12px;	
    font-weight: bold;	
    letter-spacing: 1.2px;	
    line-height: 23px;	
    text-align: center;
    
    &:hover {
        background-color: #fff;
    }
    
    @media (max-width: 1200px) {
        margin-left: 0px;
    }
`;

const Image = styled.div`
    flex-grow: 1;
    background: url('/images/new/faq/header-back.svg') no-repeat center;
    background-size: 451px 280px;
    
    @media (max-width: 1200px) {
        width: 100%;
        height: 280px;
    }
    
    @media (max-width: 450px) {
        height: 58vw;
        background-size: 100vw 58vw;
    }
`;

export default class Header extends PureComponent {

    render() {

        return (
            <Wrapper>
                <Body>
                <Title>Часто задаваемые вопросы</Title>
                <Description>На этой странице собраны самые популярные вопросы пользователей, обращавшихся в
                    техподдержку Golos.io
                </Description>
                <ButtonsBlock>
                    <BlueButton>
                        <Icon name="telegram" size="16px"/>Телеграмм
                    </BlueButton>
                    <WhiteButton color="white">
                        <Icon name="envelope" size="16px"/>Почта
                    </WhiteButton>
                </ButtonsBlock>
                </Body>
                <Image/>
            </Wrapper>
        );
    }
}
