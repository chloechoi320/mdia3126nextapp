import React from 'react';
import styled, {css} from 'styled-components';

const BtnBox = styled.div`
    font-family: arial;
    width: 384px;
    height: 46px;
    background-color: ${props=>props.backgroundColor ? props.backgroundColor: "#3D6FF1"};
    ${props=>props.borderRadius === "5px" && css`
    border-radius: 5px;
    `}
`;

const BtnText = styled.h1`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18.75px;
    text-align: center;
    letter-spacing: 0.03em;
    padding: 13px 100px;
    color: #fff;
`;

const Button=({ backgroundColor, borderRadius, text })=> {
    return <BtnBox backgroundColor={backgroundColor} borderRadius={borderRadius}>
        <BtnText>{text}</BtnText>
    </BtnBox>;
}

Button.defaultProps = {
    backgroundColor: "#3D6FF1",
    borderRadius: "5px",
    text: "Login"
}

export default Button;