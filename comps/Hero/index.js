import React from 'react';
import styled, {css} from 'styled-components';
import Banner from '../Banner';

const Container = styled.div`
    height: 967px;
    width: 573px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
    z-index: -1;
    display: inline-flex;
    flex-direction: column;
`;

const ImageBox = styled.div`
    height: 967px;
    width: 573px;
    background-size: cover;
    z-index: 1;
    background-image: url("/image 5.png");
    display: inline-flex;
    flex-direction: column;
`;

const Hero =()=> {
    return <Container>
        <ImageBox>
        <Banner></Banner>
        </ImageBox>
    </Container>
}

Hero.defaultProps = {

}

export default Hero;