import React from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
    font-family: arial;
    width: 478px;
    height: 170px;
    display: inline-flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.88);
`;

const BigT = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
    color: #333333;
`;

const SmallT = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #3D5AF1;
`;

const Banner =({text, text2})=> {
    return <Container>
        <BigT>{text}</BigT>
        <SmallT>{text2}</SmallT>
        </Container>
}

Banner.defaultProps = {
    text: "Hack your way to learning",
    text2: "Start your free account today"
}

export default Banner;