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

const SkillTiles = styled('div')`
    display: flex;
    flex-wrap: wrap;
`;

const Tile = styled('div')`
    height: 25px;
    color: #e8e8e8;
    margin: 5px 10px;
    padding: 5px 5px 0px 5px;
    border: 1px solid #e8e8e8;
    border-radius: 2px;
`;

const devSkills = ['Python', 'HTML5', 'CSS3', 'Javascript', 'Ajax', 'React.Js', 'Node.Js', 'Express.Js', 'Redux.Js', 'MobX', 'MongoDB', 'React Testing Library', 'Jest', 'Enzyme', 'Git', 'Code Deployment', 'Recompose', 'Ramda', 'Styled-components', 'Styled-tools', 'ES6'];
const physSkills =['Advanced Calculus', 'Data Handling', 'Laboratory Science', 'Classical Mechanics', 'Quantum Mechanics', 'Material Physics and Science', 'Electromagnetism', 'Statistical Maths and Mechanics', 'Atomic Physics', 'Particle Physics', 'Nuclear Physics', 'Wave Physics', 'Special & General Relativity', 'Cosmology', 'Stellar Evolution'];

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
                <li>Ernst & Young
                    <ul>
                        <li>Created a financial tool for a client using the latest React technologies. Used functional stateless components that require various libraries such as - Styled-tools, Recompose, Ramda and MobX for state management. Created completely reusable components with latest ES6 structure and functionality. Used Watson AI conversation to analyse Twitter data and sentiment of Tweets, worked with data scientists to display corporate financial data.  </li>
                    </ul>

                </li>
                <li>British Petroleum
                    <ul>
                        <li>Started as a junior ReactJs developer and over 12 months became the technical lead developer overseeing the work of fellow graduates and interns.  Helped to create an internal mirco-site for both IBM and BP employees. Trained up interns and beginner developers while on the project and oversaw the  management of the source code. Developed skills in ReactJs for UI, NodeJs for back-end integration with servers and content management systems such as Watson Content Hub and unit testing using Jest. </li>
                    </ul>
                </li>
                <li>Barclays Bank
                    <ul>
                        <li>Created a micro-site for Barclays Bank which was used in a bid proposal for IBM iX’s digital platforms service line. The site was created in ReactJs using similar technologies to the BP microsite and was completed in a short period of time. The microsite was a leading influence in the success of the bid and brought many new projects for IBM.   </li>
                    </ul>
                </li>
                <li>Diageo
                    <ul>
                        <li>Developed a bespoke micro-site for Diageo employees showcasing latest projects and portfolios. Gained skills with client interaction as designs and implemented components had to be signed off by the Diageo stakeholders.  </li>
                    </ul>
                </li>
                <li>IBM Client Innovation Centre
                    <ul>
                        <li>Worked as a software analyst for IBM Product Transformation Center, dealing with IBM mergers and analysis of source code. Developed skills in basic javascript, css and html to develop an image scanner for product logos. Worked on Java apps for source code scanning.</li>
                    </ul>
                </li>
            </List>
                <h4>Software Skills</h4>
            <SkillTiles>
                {devSkills.map(tile => <Tile>{tile}</Tile>)}
            </SkillTiles>
                <h4>Physics and Maths Skills</h4>
            <SkillTiles>
                {physSkills.map(tile => <Tile>{tile}</Tile>)}
            </SkillTiles>
        </Wrapper>
    )
}

export default Skills;

