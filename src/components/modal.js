import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
    display: ${props => props.open ? 'flex' : 'none'};
    // visibility: ${props => props.open ? 'visible' : 'hidden'}
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    transition: visibility 5.5s ease-in;
`;

const Image = styled('img')`
    width: 80%;
`;

const Button = styled('button')`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const Modal = ({...props}) => {
    return (
        <Wrapper open={props.open}>
            <Button onClick={() => props.closeModal(false)}>Close</Button>
            <Image src={props.image} />
        </Wrapper>
    )
}

export default Modal;