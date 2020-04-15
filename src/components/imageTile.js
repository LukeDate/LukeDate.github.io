import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './modal';

const SectionTitle = styled('h2')`

`;

const Collage = styled('div')`
    display: flex;
    width: 80%;
    margin: 0 auto;
    flex-wrap: wrap;
    > img {
        padding: 10px;
    }
`;

const Image = styled('img')`
    &:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease-in;
        cursor: pointer;
    }
`;

const ImageTile = ({...props}) => {

    const [open, toggleModal] = useState(false);
    const [imageId, setImageId] = useState('');

    const handleClick = (image) => {
        toggleModal(true);
        setImageId(image);
    }
    return(
        props.imageData.imageProperties.map(image => (
            <>
            <SectionTitle>
                {image.title}
            </SectionTitle>
            <Collage>
                {image.sources.map(source => <Image onClick={() => handleClick(source)} width='20%' height='40%' src={source} />)}
            </Collage>
            <Modal closeModal={toggleModal} open={open} image={imageId} />
            </>
            )
        )
    )
}

export default ImageTile;