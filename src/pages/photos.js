import React from 'react';
import styled from 'styled-components';
import ImageTile from '../components/imageTile';

let Images = require('../images.json');

const Photos = () => {
    const Wrapper = styled('div')`
        height: calc(100vh - 150px);
        overflow: scroll;
    `;

    return(
        //how should I have gallery? Grid options with button? All photos? Section? (astro, landscape, artsy ones)
        <Wrapper>
            <ImageTile imageData={Images} ></ImageTile>
            <h2 style={{fontStyle: 'italic', marginBottom: '0'}}>More coming soon...</h2> 
        </Wrapper>
    )
}

export default Photos;

