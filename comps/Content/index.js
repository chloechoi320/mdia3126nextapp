import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color:${props=>props.bgcolor ? props.bgcolor: "#DEFECD"};
    background-image:${props=>props.bgimg ? props.bgimg: "hidden"};
    min-width: 10px;
    min-height: 10px;
`;

const Content = ({children, bgcolor, bgimg}) =>{
    return <Container bgcolor={bgcolor} bgimg={bgimg}>
    {children}
    </Container>
}

Content.defaultProps = {
    bgcolor: "#DEFECD",
    bgimg: "hidden"
}

export default Content;