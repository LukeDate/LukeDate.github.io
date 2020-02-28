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

const List = styled('ul')`
    list-style: none;
    > li {
        text-align: left;
    }
`;

const Skills = () => {
    return (
        <Wrapper>
            <Text>
                University Of Southampton - Master of Physics with Astronomy: Second Class Honours (Upper Division)
            </Text>
            <Text><a href="/transcript/Transcript_Final_Luke_Date.pdf" target='_blank'>Transcript of grades</a></Text>
            <Text>Over the four year course I developed many technical skills covering a wide range of disciplines - Mathematical methods, advanced Physics, laboratory techniques, data handling, data modelling using Python and using practical astronomy equipment and software. I have a passion for astronomy and cosmology and enjoy learning about the inner workings of the Universe. In my final year Master's project I gained experience in measuring the age of the Universe through historical techniques of famous Physicists whilst using the latest astronomy equipment to gather data. </Text>

            <Text>Create Music Group</Text>
            <List>
                <li>Developed applications for music royalty management for various artists and labels. Used React and front end PHP for mobile and web based apps - allowing artists to manage music distribution, royalties and music demos. </li>
            </List>

            <Text>IBM</Text>
            <List>
                <li>Ernst & Young</li>
                <li>British Petroleum</li>
                <li>Barclays Bank</li>
                <li>Diageo</li>
                <li>IBM Client Innovation Centre</li>
            </List>
        </Wrapper>
    )
}

export default Skills;

