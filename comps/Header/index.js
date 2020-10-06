import React from 'react';
import styled, {css} from 'styled-components';

const HeadTitle = styled.h1`
    font-size: 30px;
    font-family: arial;
    color: ${props=>props.color ? props.color : "#000"};
    padding: 5px;
    ${props=>props.highlight === true && css`
    background-color: #F5A;
    margin: 5px;
    `}
`;

const HeadBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
`;


const Header = ({color, highlight}) => {
    return <HeadBox>
    <HeadTitle color={color} highlight={highlight}>Welcome Back!</HeadTitle>
    </HeadBox>
}

Header.defaultProps = {
    color: null,
    highlight: null
}

export default Header;