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
                I am originally from the outskirts of a small village; Church Crookham, in the UK. I was born in Basingstoke before moving abroad and growing up around the world.
            </Text>
            <Text>I have lived in Russia, Bangladesh and The Philippines - in Dhaka and Manila I attended international schools (The American International School Dhaka and The British School Manila), I had the great opportunity to travel around South East Asia and get exposure to various different cultures and people. I competed in many sports, such as basketball, football, swimming and track and field. I got a chance to be a part of many volunteering projects where I helped to build libraries for local school children and help conservationist protect local sea life.</Text>
            <Text>My hobbies and interests vary greatly but in my spare time I enjoy weightlifting, playing sports, being outdoors in nature and finding new and different creative outlets. I thoroughly enjoy travelling around the world as much as I can and my current venture is living in Vancouver, Canada.
                Weightlifting keeps me disciplined and focused as I find that exercise brings me clarity and my mind and body healthy. 
                I also enjoy photography, especially astrophotography (as you can see in my photography section of this site), as this gets me out exploring new places and seeing new things.
            </Text>
        </Wrapper>
    )
}

export default AboutMe;