import React from 'react';
import styled, {css} from 'styled-components';

const Container = styled.div`
    font-family: arial;
    top: 0%;
    bottom: 0%;
    display: inline-flex;
    position: relative;
    width: 382px;
    height: 16px;
`;
const Line1 = styled.div`
    position: relative;
    margin-right: 5px;
    left: 0%;
    right: 55.52%;
    top: 56.25%;
    bottom: 43.75%;
    width: 169.91px;
    height: 0px;
    // padding: 0px;
    border: 1.5px solid #C6C6C6;
`;

const Line2 = styled.div`
    position: relative;
    margin-left: 5px;
    top: 56.25%;
    bottom: 43.75%;
    width: 169.91px;
    height: 0px;
    // padding: 0px;
    border: 1.5px solid #C6C6C6;
`;

const Divider =({text})=> {
    return <Container><Line1></Line1>
        {text}
        <Line2></Line2>
        </Container>
}

Divider.defaultProps = {
    text: "or"
}

export default Divider;