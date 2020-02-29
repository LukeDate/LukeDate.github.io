import React from 'react';
import styled from 'styled-components';

const Photos = () => {

    const Image = styled('img')`
        width: 80%;
    `;

    return(

        //how should I have gallery? Grid options with button? All photos? Section? (astro, landscape, artsy ones)
        <div>
            <Image src="/photos/DSC_0193.jpg" />
            <Image src="/photos/DSC_0195.jpg"/>    
            <Image src="/photos/DSC_0202.jpg"/>    
            <Image src="/photos/DSC_0206.jpg"/>    
            <Image src="/photos/DSC_0200.jpg"/>    
            <Image src="/photos/DSC_0205.jpg"/>    
        </div>
    )
}

export default Photos;

