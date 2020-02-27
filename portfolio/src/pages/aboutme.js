import React from 'react';
import styled from 'styled-components';

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    color: #e8e8e8;
    padding: 40px 60px;
`;

const Text = styled('p')`
    text-align: left;
`;

const AboutMe = () => {

    return (
        <Wrapper>
            <Text>
                Where I am from:
            </Text>
            <Text>Where I grew up</Text>
            <Text>Hobbies and interests</Text>
        </Wrapper>
    )
}

export default AboutMe;