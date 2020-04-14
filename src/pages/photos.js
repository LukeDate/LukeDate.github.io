import React from 'react';
import styled from 'styled-components';

const Photos = () => {

    const Image = styled('img')`
        width: 80%;
    `;

    return(

        //how should I have gallery? Grid options with button? All photos? Section? (astro, landscape, artsy ones)
        <div>
            <h1>Astrophotography</h1>
            <Image width="25%" height="25%" src="/photos/DSC_0193.jpg" />
            <Image width="25%" height="25%" src="/photos/DSC_0195.jpg"/>    
            <Image width="25%" height="25%" src="/photos/DSC_0202.jpg"/>    
            <Image width="25%" height="25%" src="/photos/DSC_0206.jpg"/>    
            <Image width="25%" height="25%" src="/photos/DSC_0200.jpg"/>    
            <Image width="25%" height="25%" src="/photos/DSC_0205.jpg"/>
            <h2 style={{fontStyle: 'italic', marginBottom: '0'}}>More coming soon...</h2> 
        </div>
    )
}

export default Photos;

