import React from 'react';
import styled, {css} from 'styled-components';

const TBBtnBox = styled.div`
    background-color: "transparent";
    // border: 1px solid black;
    display: inline-flex;
    width: 99.76px;
    height: 27px;
`;


const TBBtnText = styled.h1`
    line-height: 0px;
    margin-left: 5px;
    font-size: 18px;
    color: ${props=>props.color ? props.color: "#000"}
`;



const TopBarButton=({text,color})=> {
    return <TBBtnBox>
        <div><img src="/Layer 1.png" /></div>
        <TBBtnText color={color}>{text}</TBBtnText>
    </TBBtnBox>
}

TopBarButton.defaultProps = {
    backgroundColor: "transparent",
    text: "Logo",
    color: "#000",
}

export default TopBarButton;